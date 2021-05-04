// peut etre fetch juste la game plutot que toute la collec

const MULT = 1
const WIDTH = 512
const HEIGHT = 256
const MIDDLEX = WIDTH / 2
const MIDDLEY = HEIGHT / 2
const PLAYER_SIZE_X = 2
const PLAYER_SIZE_Y = 28
const PADDING = 10
const BALL_SPEED = 1
const AIMED_PING = 3000
const FRAMES = 10

export const GameView = Backbone.View.extend({
  el: $('#app'),
  initialize: function (options) {
    this.$el.html(Handlebars.templates.game({ width: WIDTH * MULT, height: HEIGHT * MULT }))
    this.users = this.model.get('users').get('obj')
    this.id = this.model.get('userLoggedId')
    // this.opponentId = options.opponentId
    this.guilds = this.model.get('guilds').get('obj')
    this.socket = options.socket
    this.gameId = options.gameId
    this.games = this.model.get('gameRecords').get('obj')
    this.canvas = document.getElementById('gameWindow')
    this.ctx = this.canvas.getContext('2d')
    // console.log(this.opponentId)
    this.loadModels()
  },

  loadModels: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
				await this.games.fetch()
        this.user = this.users.get(this.id)
        this.game = JSON.parse(JSON.stringify(this.games.get(this.gameId)))
        if (this.game.status === 'played') {
          throw 'Game is already played'
        }
        console.log(this.game)
        this.mode = this.game.mode
        this.$el.find('#gameTitle').html('playing ' + this.mode + ' match')
        $(document).ready(this.initializeGame())
      } catch (e) {
        // console.log('Error while fetching models')
        console.log(e)
        this.handleGameNotFound()
      }
    }
    load()
  },

  handleGameNotFound: function () {
    // console.log("here")
    this.$el.find('#gameTitle').html('Game not found')
    const px_height = 35
    const arg = 'Oups ! Game not found. Perphaps it was declined'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = px_height + 'PressStart2P-Regular'
    this.ctx.fillText(arg, WIDTH / 2, HEIGHT / 2)
  },

	  /* callAlfred: async function () {
	    return await $.ajax({
	      url: '/api/games/',
	      data: { mode: 'duel', opponent_id: '1' },
	      method: 'POST',
	      context: this,
	      success: function (response) {
	        console.log(response)
	        this.game = response
	        this.initializeGame()
	      }
	    })
	  }

	 	challengeAlfred: function () {
	    try {
	     	this.callAlfred()
	    } catch (e) {
	      console.log('error while trying to challengeAlfred')
	      console.log(e)
	    }
	  }, */

  initializeGame: function () {
   	this.data = [{
      canvas: this.canvas,
      canvasLocation: undefined,
      ctx: this.ctx,
      playerLeft: {
	      nickname: this.users.get(this.game.player_left_id).get('nickname'),
	      // nickname: 'left',
		 		score: 0,
	      isUser: false,
	      x: PADDING,
	      y: HEIGHT / 2 - PLAYER_SIZE_Y / 2
	    },
      playerRight: {
	      nickname: this.users.get(this.game.player_right_id).get('nickname'),
	      // nickname: 'right',
		 		score: 0,
	      isUser: false,
	      x: WIDTH - PADDING,
	      y: HEIGHT / 2 - PLAYER_SIZE_Y / 2
	    },
      ball: {
	      x: WIDTH / 2,
	      y: HEIGHT / 2,
	      r: 5,
        dirx: 0,
        diry: 0,
        speed: BALL_SPEED
	    },
      socket: this.socket,
      end: false,
      started: false,
      gameId: this.gameId,
      frameLimiter: true,
      ping: 0,
      drop: 0,
      frames: 0,
      oldDate: Date.now()
    }]
    this.data[0].canvasLocation = this.data[0].canvas.getBoundingClientRect()
    if (parseInt(this.game.player_left_id) == this.id) {
	  	this.data[0].playerLeft.isUser = true
    } else if (parseInt(this.game.player_right_id) == this.id) {
      this.data[0].playerRight.isUser = true
    }
    printField(this.data[0])
    printTextBoxes(this.data[0])
    printPaddles(this.data[0])
    printBall(this.data[0])

    const chanId = this.gameId
    const data = this.data[0]
    data.socket.subscribeChannel(parseInt(chanId), 'GameChannel')
    data.socket.updateContext(this, this.model.get('notifView').get('obj'))
    if (this.data[0].playerRight.isUser || this.data[0].playerLeft.isUser) {
      this.data[0].canvas.addEventListener('mousemove', function (e) { move(e, data) })
    }
    this.preGameLoop()
  },

  preGameLoop: function () {
    printWaitingScreen(this.data[0])
    gameLoop(this.data)
  },

  handleWaiting: function () {
  },

  receivePing: function () {
    // console.log('ping')

    /* this.data[0].newDate = this.data[0].newDate.getMilliseconds()
		this.data[0].ping = this.data[0].newDate - this.data[0].oldDate
		this.data[0].oldDate = this.data[0].newDate */
  },

  receiveMessage: function (msg) {
    const message = msg.message
    if (message.player_left) {
      this.data[0].playerLeft.y = message.player_left.pos
      this.data[0].playerLeft.score = message.player_left.score
    }
    if (message.player_right) {
      this.data[0].playerRight.y = message.player_right.pos
      this.data[0].playerRight.score = message.player_right.score
    }
    if (message.ball) {
      // console.log(message.ball)
      if (!this.data[0].started) {
        this.data[0].started = true
      }
      this.data[0].ball.x = message.ball.x
      this.data[0].ball.y = message.ball.y
      this.data[0].ball.dirx = (message.ball.left) ? -1 : 1
      this.data[0].ball.diry = (message.ball.up) ? 1 : -1
    }

    if (message.action && message.action === 'game_won') {
      this.data[0].end = true
      // this.data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) })
    } else if (message.action && message.action === 'game_lost') {
      this.data[0].end = true
      // this.data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) })
    }
  }
})

function printField (data) {
  data.ctx.fillStyle = 'black'
  data.ctx.fillRect(0, 0, WIDTH, HEIGHT)
  data.ctx.strokeStyle = 'white'
  data.ctx.beginPath()
  data.ctx.moveTo(WIDTH / 2, 0)
  data.ctx.lineTo(WIDTH / 2, HEIGHT)
  data.ctx.stroke()
  data.ctx.closePath()
}

function printPaddles (data) {
  data.ctx.strokeStyle = 'white'
  data.ctx.fillStyle = 'white'
  data.ctx.fillRect(data.playerLeft.x, data.playerLeft.y - (PLAYER_SIZE_Y / 2), PLAYER_SIZE_X, PLAYER_SIZE_Y)
  data.ctx.fillRect(data.playerRight.x, data.playerRight.y - (PLAYER_SIZE_Y / 2), PLAYER_SIZE_X, PLAYER_SIZE_Y)
}

function printBall (data) {
  data.ctx.beginPath()
  data.ctx.strokeStyle = 'yellow'
  data.ctx.fillStyle = 'yellow'
  data.ctx.arc(data.ball.x, data.ball.y, data.ball.r, 0, Math.PI * 2, true)
  data.ctx.stroke()
  data.ctx.fill()
  data.ctx.closePath()
}

function printTextBoxes (data) {
  const px_height = 15
  data.ctx.fillStyle = 'white'
  data.ctx.font = px_height + 'px serif'
  data.ctx.textAlign = 'left'
  data.ctx.textBaseline = 'top'

  let boxes_text = data.playerLeft.nickname
  // penser a réduire si le nom est trop grand
  data.ctx.fillText(boxes_text, 0, 0)
  boxes_text = data.playerLeft.score
  data.ctx.fillText(boxes_text, 0, px_height + 5)

  boxes_text = data.playerRight.nickname
  data.ctx.fillText(boxes_text, WIDTH - (data.ctx.measureText(boxes_text).width), 0)
  boxes_text = data.playerRight.score
  data.ctx.fillText(boxes_text, WIDTH - (data.ctx.measureText(boxes_text).width), px_height + 5)
}

function printEndScreen (data) {
  const px_height = 15
  let arg
  if (data.playerRight.score > data.playerLeft.score) {
    arg = data.playerRight.nickname
  } else {
    arg = data.playerLeft.nickname
  }
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + 'px serif'
  data.ctx.textAlign = 'center'
  data.ctx.fillText(`${arg} wins the MATCH`, WIDTH / 2, HEIGHT / 2)
}

function printPing (data) {
  // console.log(data.ping)
  console.log(data.drop)
}

function limitInput (n) {
  if (n <= PLAYER_SIZE_Y / 2) {
    return PLAYER_SIZE_Y / 2
  } else if (n >= HEIGHT - PLAYER_SIZE_Y / 2) {
    return HEIGHT - PLAYER_SIZE_Y / 2
  } else {
    return n
  }
}

function move (e, data) {
  const mouseLocation = parseInt(event.clientY - data.canvasLocation.y)
  data.socket.sendForGame({ position: mouseLocation, action: 'received' }, data.gameId)
}

function simulateBall (data) {
  // simulate ball for lag compensation here
  data.ball.x += data.ball.speed * data.ball.dirx
  data.ball.y += data.ball.speed * data.ball.diry
}

function checkFrames (data) {
  if (data.frames >= 60) {
    data.frames = 0
    printPing(data)
  }
}

function printWaitingScreen (data) {
  const px_height = 35
  const arg = 'Waiting for your opponent to join'
  data.ctx.textAlign = 'center'
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + 'px serif'
  data.ctx.fillText(arg, WIDTH / 2, HEIGHT / 2)
}

function clearCanvas (data) {
  data.ctx.clearRect(0, 0, WIDTH, HEIGHT)
}

function gameLoop (data) {
  let animation
  data[0].frameLimiter = !data[0].frameLimiter
  printField(data[0])
  printTextBoxes(data[0])
  printPaddles(data[0])
  printBall(data[0])
  if (!data[0].started) {
    printWaitingScreen(data[0])
  }
  // console.log('frame')
  // printPing(data[0])

  if (!data[0].end) {
    // if (data[0].frameLimiter) {
    	// simulateBall(data[0])
    // }
  	animation = window.requestAnimationFrame(function () { gameLoop(data) })
  } else {
    data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) }) // ca marche???
    clearCanvas(data[0])
    printEndScreen(data[0])
  }
}