const MULT = 1
const WIDTH = 512
const HEIGHT = 256
const MIDDLEX = WIDTH / 2
const MIDDLEY = HEIGHT / 2
const PLAYER_SIZE_X = 2
const PLAYER_SIZE_Y = 28
const PADDING = 10

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
    console.log(this.opponentId)
    this.loadModels()
  },

  loadModels: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
				// await this.guilds.fetch() &&
				await this.games.fetch() // par sur d'avoir besoin de games
        // this.loadFullDocument()
        this.user = this.users.get(this.id)
        if (this.gameId === undefined || this.gameId === '' || this.gameId === null ||
				isNaN(this.gameId) || this.gameId <= 0 || this.gameId > this.games.length) {
          // $(document).ready(this.playLadder())
          this.$el.find('#gameTitle').html('Playing Ladder or Alfred, for now')
          $(document).ready(this.challengeAlfred())
        } else {
          this.game = JSON.parse(JSON.stringify(this.games.get(this.gameId)))
          // console.log(this.game)
          // gérer game not found
          this.mode = this.game.mode
          if (this.mode === 'duel') {
            this.$el.find('#gameTitle').html('Playing Duel')
            $(document).ready(this.playDuel())
          } else if (this.mode === 'war') {
            this.$el.find('#gameTitle').html('Playing War match')
            $(document).ready(this.playWar())
          }
        }
      //   this.opponent = this.users.get(this.opponentId)
      } catch (e) {
        console.log('Error while fetching models')
        console.log(e)
      }
    }
    load()
  },

  loadFullDocument: function () {
    /* if (this.game) {
      this.$el.html(Handlebars.templates.game({ mode: this.game.get('mode'), width: WIDTH * MULT, height: HEIGHT * MULT }))
    } else {
    	this.$el.html(Handlebars.templates.game({ mode: 'ladder', width: WIDTH * MULT, height: HEIGHT * MULT }))
    } */
  },

  requestMatchmaking: async function () {
    return await $.ajax({
      url: '/api/games/',
      data: { mode: 'ladder' },
      method: 'POST',
      context: this,
      success: function (response) {
        console.log(response)
        this.gameId = response.id
        this.game = response
        // navigate to game/{{this.gameId}}
      }
    })
  },

  playLadder: function () { // a refaire comme pour alfred
    console.log('bonjour ladder')
    // lancer matchMaking
    const loadMatchMaking = async () => {
      // afficher Waiting
      try {
      	this.requestMatchmaking()
        this.initializeGame()
      } catch (e) {
        console.log('error while requesting ladder match')
        console.log(e)
        // this.initializeGame()
      }
    }
    loadMatchMaking()
  },

  playDuel: function () {
    this.initializeGame()
  },

  playWar: function () {
    this.initializeGame()
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
      this.data[0].ball.x = message.ball.x
      this.data[0].ball.y = message.ball.y
      this.data[0].ball.dir = message.ball.dir
    }

    if (message.action && message.action === 'game_won') {
      // this.data[0].socket.close()
      // afficher écran victoire
      // this.data[0].end = true
      console.log('win')
      this.data[0].end = true
      this.data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) })
      printEndScreen(data[0], true)
    } else if (message.action && message.action === 'game_lost') {
      // this.data[0].socket.close()
      // afficher écran défaite
      // this.data[0].end = true
      console.log('loose')
      this.data[0].end = true
      this.data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data) })
      printEndScreen(this.data[0], false)
    }
    // this.data[0].ball.x += 10
    // this.data[0].playerRight.y -= 10
  },

  initializeGame: function () {
    this.canvas = document.getElementById('gameWindow')
    this.gameId = this.game.id
   	this.data = [{
      canvas: this.canvas,
      canvasLocation: undefined,
      ctx: undefined,
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
        dir: 0
	    },
      socket: this.socket,
      end: false,
      gameId: this.gameId,
      receiveMessage: undefined
    }]
    this.data[0].canvasLocation = this.data[0].canvas.getBoundingClientRect()
    this.data[0].ctx = this.data[0].canvas.getContext('2d')
    // this.data[0].ctx.witdh = WIDTH
    // this.data[0].ctx.height = HEIGHT
    // if (this.game.get('player_left_id') === this.id) {
	  this.data[0].playerLeft.isUser = true
    printField(this.data[0])
    printTextBoxes(this.data[0])
    printPaddles(this.data[0])
    printBall(this.data[0])
	  /* } else if (this.game.get('player_right_id') === this.id) {
	  this.playerRight.isUser = true
	  } */
    const chanId = this.gameId
    const data = this.data[0]
    console.log(this.gameId)
    console.log('here')
    data.socket.subscribeChannel(chanId, 'GameChannel')
    /* data.socket.send(JSON.stringify({
      command: 'suscribe',
      identifier: JSON.stringify({
        id: chatId,
        channel: 'GameChannel'
      })
    })) */
    data.socket.updateContextForGame(this)
    this.data[0].canvas.addEventListener('mousemove', function (e) { move(e, data) })

    // join websocket and it's set the receiveMessage method
    // data[0].socket.subscribeChannel(data.gameId, 'GameChannel')
    // data[0].socket.updateContext(this, undefined)
    preGameLoop(this.data)
  },

  callAlfred: async function () {
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
  },

  challengeAlfred: function () {
    // const load = async () => {
    try {
      	this.callAlfred()
      /* console.log('la')
      console.log(this.game) */
    } catch (e) {
      console.log('error while trying to challengeAlfred')
      console.log(e)
    }
    // }
    // load()
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
  const px_height = 35
  let arg
  if (data.playerRight.score > data.playerLeft.score) {
    if (data.playerRight.isUser) {
      arg = 'WON - GG'
    } else {
      arg = 'lost - Boo'
    }
  }
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + 'px serif'
  data.ctx.textAlign = 'center'
  data.ctx.fillText(`you ${arg}`, WIDTH / 2, HEIGHT / 2)
  console.log('yeah')
}

function move (e, data) {
  const mouseLocation = event.clientY - data.canvasLocation.y
  // console.log('moving')
  // console.log(mouseLocation)
  /* if (data.playerLeft.isUser) {
  	data.playerLeft.y = mouseLocation - PLAYER_SIZE_Y / 2
  } else if (data.playerRight.isUser) {
    data.playerRight.y = mouseLocation - PLAYER_SIZE_Y / 2
  } */
  data.socket.sendForGame({ position: parseInt(mouseLocation), action: 'received' }, data.gameId)
}

function updateGameState (data) {
  // do stuff with websocket to update positions
  // console.log(data.socket)
  // data.socket.receiveMessage() -> update pos in if forrest
  // data.ball.x += 10
}

function gameLoop (data) {
  let animation
  /* $(window).bind('unload', function () {
    console.log('NONONO')
  }) */
  printField(data[0])
  printTextBoxes(data[0])
  printPaddles(data[0])
  printBall(data[0])
  console.log('prout')
  if (!data[0].end) {
  	animation = window.requestAnimationFrame(function () { gameLoop(data) })
  } else {
    data[0].canvas.removeEventListener('mousemove', function (e) { move(e, data[0]) }) // ca marche???
    printEndScreen(data[0])

    // data[0].socket.close()
  }
}

function preGameLoop (data) {
  /* Suscribe to start playing
	get invitation
	data[0].socket.subscribeChannel(roomId ????, 'GameChannel')
	data[0].socket.subscribeChannel(data.gameId, 'GameChannel')
	data[0]

	*/
  gameLoop(data)
  console.log(data[0].socket)
}
