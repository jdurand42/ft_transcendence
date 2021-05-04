
const MULT = 1
const WIDTH = 512
const HEIGHT = 256
const MIDDLEX = WIDTH / 2
const MIDDLEY = HEIGHT / 2
const PLAYER_SIZE_X = 2
const PLAYER_SIZE_Y = 28
const PADDING = 10
const BALL_SPEED = 1
const BALL_RAY = 5
const AIMED_PING = 3000
const FRAMES = 10

export const GameView = Backbone.View.extend({
  el: $('#app'),
  initialize: function (options) {
    this.adaptToScreenSize()
    // this.$el.html(Handlebars.templates.game({ width: WIDTH * MULT, height: HEIGHT * MULT }))
    this.$el.html(Handlebars.templates.game({ width: this.width, height: this.height }))
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
    console.log('cest la')
    this.loadModels()
  },

  adaptToScreenSize: function () {
    this.width = parseInt(window.innerWidth * 0.66)
    if (this.width < WIDTH) {
      this.width = WIDTH
    }
    this.height = parseInt(this.width / 2)
    this.ratio = this.width / WIDTH
    // this.width = (this.width < 512)
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
    const px_height = parseInt(15 * this.ratio)
    const arg = 'Oups ! Game not found. Perphaps it was declined'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = px_height + 'px serif'
    this.ctx.fillText(arg, this.width / 2, this.height / 2)
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

  initializeData: function () {
    this.data = [{
      canvas: this.canvas,
      canvasLocation: undefined,
      ctx: this.ctx,
     	ratio: this.ratio,
      width: this.width,
      height: this.height,
      halfWidth: parseInt(this.width / 2),
      halfHeight: parseInt(this.height / 2),
      playerSizeX: parseInt(PLAYER_SIZE_X * this.ratio),
      playerSizeY: parseInt(PLAYER_SIZE_Y * this.ratio),
      halfPlayerSizeX: parseInt(parseInt(PLAYER_SIZE_X * this.ratio) / 2),
      halfPlayerSizeY: parseInt(parseInt(PLAYER_SIZE_Y * this.ratio) / 2),
      padding: parseInt(PADDING * this.ratio),
      playerLeft: undefined,
      playerRight: undefined,
      ball: undefined,
      socket: this.socket,
      end: false,
      started: false,
      gameId: this.game.id,
      frameLimiter: true,
      ping: 0,
      drop: 0,
      frames: 0,
      oldDate: Date.now()
    }]
    this.data[0].playerLeft = {
      nickname: this.users.get(this.game.player_left_id).get('nickname'),
      score: 0,
      isUser: false,
      x: this.data[0].padding,
      y: parseInt(this.data[0].halfHeight - this.data[0].halfPlayerSizeY)
    }
    this.data[0].playerRight = {
      nickname: this.users.get(this.game.player_right_id).get('nickname'),
      score: 0,
      isUser: false,
      x: this.width - this.data[0].padding,
      y: parseInt(this.data[0].halfHeight - this.data[0].halfPlayerSizeY)
    }
    this.data[0].ball = {
      x: this.data[0].halfWidth,
      y: this.data[0].halfHeight,
      r: parseInt(BALL_RAY * this.ratio),
      dirx: 0,
      diry: 0,
      speed: BALL_SPEED
    }
  },

  initializeGame: function () {
    this.initializeData()
    this.data[0].canvasLocation = this.data[0].canvas.getBoundingClientRect()
    if (parseInt(this.game.player_left_id) === parseInt(this.id)) {
	  	this.data[0].playerLeft.isUser = true
    } else if (parseInt(this.game.player_right_id) === parseInt(this.id)) {
      this.data[0].playerRight.isUser = true
    }
    printField(this.data[0])
    printTextBoxes(this.data[0])
    printPaddles(this.data[0])
    printBall(this.data[0])

    const chanId = this.game.id
    const data = this.data[0]
    data.socket.subscribeChannel(chanId, 'GameChannel')
    data.socket.updateContext(this, this.model.get('notifView').get('obj'))
    if (this.data[0].playerRight.isUser || this.data[0].playerLeft.isUser) {
      console.log('ici')
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
    // console.log(message)
    if (message.player_left) {
      this.data[0].playerLeft.y = parseInt(message.player_left.pos * this.data[0].ratio)
      this.data[0].playerLeft.score = message.player_left.score
    }
    if (message.player_right) {
      this.data[0].playerRight.y = parseInt(message.player_right.pos * this.data[0].ratio)
      this.data[0].playerRight.score = message.player_right.score
    }
    if (message.ball) {
      // console.log(message.ball)
      if (!this.data[0].started) {
        this.data[0].started = true
      }
      this.data[0].ball.x = parseInt(message.ball.x * this.data[0].ratio)
      this.data[0].ball.y = parseInt(message.ball.y * this.data[0].ratio)
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
  data.ctx.fillRect(0, 0, data.width, data.height)
  data.ctx.strokeStyle = 'white'
  data.ctx.beginPath()
  data.ctx.moveTo(data.halfWidth, 0)
  data.ctx.lineTo(data.halfWidth, data.height)
  data.ctx.stroke()
  data.ctx.closePath()
}

function printPaddles (data) {
  data.ctx.strokeStyle = 'white'
  data.ctx.fillStyle = 'white'
  data.ctx.fillRect(data.playerLeft.x, data.playerLeft.y - data.halfPlayerSizeY, data.playerSizeX, data.playerSizeY)
  data.ctx.fillRect(data.playerRight.x, data.playerRight.y - data.halfPlayerSizeY, data.playerSizeX, data.playerSizeY)
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
  const px_height = parseInt(15 * data.ratio)
  data.ctx.fillStyle = 'white'
  data.ctx.font = px_height + 'px serif'
  data.ctx.textAlign = 'left'
  data.ctx.textBaseline = 'top'

  let boxes_text = data.playerLeft.nickname
  // penser a réduire si le nom est trop grand
  data.ctx.fillText(boxes_text, data.halfWidth - (data.ctx.measureText(boxes_text).width) - 5 * data.ratio, 0)
  boxes_text = data.playerLeft.score
  data.ctx.fillStyle = 'white'
  data.ctx.fillText(boxes_text, data.halfWidth - (data.ctx.measureText(boxes_text).width) - 5 * data.ratio, px_height + 5)

  boxes_text = data.playerRight.nickname
  data.ctx.fillText(boxes_text, data.halfWidth + 5 * data.ratio, 0)
  data.ctx.fillStyle = 'white'
  boxes_text = data.playerRight.score
  data.ctx.fillText(boxes_text, data.halfWidth + 5 * data.ratio, px_height + 5)
}

function printEndScreen (data) {
  const px_height = parseInt(15 * data.ratio)
  let arg
  if (data.playerRight.score > data.playerLeft.score) {
    arg = data.playerRight.nickname
  } else {
    arg = data.playerLeft.nickname
  }
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + 'px serif'
  data.ctx.textAlign = 'center'
  data.ctx.fillText(`${arg} wins the MATCH`, data.halfWidth, data.halfHeight)
}

function printPing (data) {
  // console.log(data.ping)
  console.log(data.drop)
}

function limitInput (data, n) {
  if (n <= data.halfPlayerSizeY) {
    return data.halfPlayerSizeY
  } else if (n >= data.height - data.halfPlayerSizeY) {
    return data.height - data.halfPlayerSizeY
  } else {
    return n
  }
}

function move (e, data) {
  const mouseLocation = parseInt(event.clientY - data.canvasLocation.y)
  data.socket.sendForGame({ position: parseInt(mouseLocation / data.ratio), action: 'received' }, data.gameId)
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
  const px_height = parseInt(35 * data.ratio)
  const arg = 'Waiting for your opponent to join'
  data.ctx.textAlign = 'center'
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + 'px serif'
  data.ctx.fillText(arg, data.halfWidth, data.halfHeight)
}

function clearCanvas (data) {
  data.ctx.clearRect(0, 0, data.width, data.height)
}

function gameLoop (data) {
  let animation
  // data[0].frameLimiter = !data[0].frameLimiter
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
    // data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) }) // ca marche???
    clearCanvas(data[0])
    printEndScreen(data[0])
    // data[0].socket.unsubscribeChannel(parseInt(data[0].gameId), 'GameChannel')
  }
}