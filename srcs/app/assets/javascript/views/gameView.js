
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
const FONT_NAME = 'Arial'

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
    // console.log('GameId dans gameView ' + this.gameId)
    this.games = this.model.get('gameRecords').get('obj')
    this.canvas = document.getElementById('gameWindow')
    this.ctx = this.canvas.getContext('2d')
    /* this.music = new Audio('./sounds/music1.mp3')
		this.music.addEventListener("canplaythrough", event => {
			console.log('here')
			this.music.play();
		}) */
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
        // console.log('Item game in gameView:')
        console.log(this.game)
        this.mode = this.game.mode
        // console.log('modelLoaded')
        $(document).ready(this.initializeGame())
      } catch (e) {
        // console.log('Error while fetching models')
        // console.log(e)
        this.handleGameNotFound()
        this.canvas.addEventListener('click', function (e) { redirecting(e) })
      }
    }
    load()
  },

  handleGameNotFound: function () {
    // console.log("here")
    this.$el.find('#gameTitle').html('Game not found')
    const px_height = parseInt(15 * this.ratio)
    let arg = 'Oups ! Game not found. Perphaps it was declined'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = px_height + ' \"PressStart2P-Regular\"'
    this.ctx.fillText(arg, this.width / 2, this.height / 2)
    arg = 'Click anywhere to exit'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = 'yellow'
    this.ctx.font = px_height + `px ${FONT_NAME}`
    this.ctx.fillText(arg, this.width / 2, this.height / 2 + 45 * this.ratio)
  },

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
      completed: false,
      started: false,
      gameId: this.game.id,
      mode: this.mode
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
    this.$el.find('#gameTitle').html('playing ' + this.mode + ' match')
    const data = this.data[0]
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

    data.socket.subscribeChannel(chanId, 'GameChannel')
    data.socket.updateContext(this, this.model.get('notifView').get('obj'))
    // console.log('game intialized')
    if (this.data[0].playerRight.isUser || this.data[0].playerLeft.isUser) {
      // console.log('ici, linput est configuré')
      this.data[0].canvas.addEventListener('mousemove', function (e) { move(e, data) })
    }
    window.onbeforeunload = function (e) { safetyBeforeUnload(e, data) }
    this.preGameLoop()
  },

  preGameLoop: function () {
    printWaitingScreen(this.data[0])
    // console.log(this.data[0].canvas.style.fontFamily)
   	// printWaitingScreen(this.data[0])
    gameLoop(this.data)
  },

  handleWaiting: function () {
  },

  receivePing: function () {
  },

  receiveMessage: function (msg) {
    const message = msg.message
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

    if (message.action && message.action === 'game_won' || message.action === 'game_lost' ||
		message.action === 'game_unanswered' || message.action === 'game_over' ||
		message.action === 'game_declined') {
      // console.log(message)
      this.data[0].completed = true
      this.data[0].end = true
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
  data.ctx.font = px_height + `px ${FONT_NAME}`
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
  // print line
  data.ctx.strokeStyle = 'white'
  data.ctx.beginPath()
  data.ctx.moveTo(data.halfWidth, data.halfHeight - (15 * data.ratio))
  data.ctx.lineTo(data.halfWidth, data.halfHeight - (15 * data.ratio) + (45 * data.ratio))
  data.ctx.stroke()
  data.ctx.closePath()

  const px_height = parseInt(15 * data.ratio)
  let arg
  if (data.playerRight.score > data.playerLeft.score && data.completed === true) {
    arg = data.playerRight.nickname + ' WINS'
  } else if (data.playerRight.score < data.playerLeft.score && data.completed === true) {
    arg = data.playerLeft.nickname + ' WINS'
  } else if (data.completed === true) {
    arg = 'Cancelled'
  } else {
    arg = 'Leaving game'
  }
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + `px ${FONT_NAME}`
  data.ctx.textAlign = 'center'
  data.ctx.fillText(arg, data.halfWidth, data.halfHeight - (45 * data.ratio))

  data.ctx.fillStyle = 'white'
  data.ctx.font = px_height + `px ${FONT_NAME}`
  data.ctx.textAlign = 'left'
  data.ctx.textBaseline = 'top'

  let boxes_text = data.playerLeft.nickname
  // penser a réduire si le nom est trop grand
  data.ctx.fillText(boxes_text, data.halfWidth - (data.ctx.measureText(boxes_text).width) - 5 * data.ratio, data.halfHeight - (15 * data.ratio) + (5 * data.ratio))
  boxes_text = data.playerLeft.score
  data.ctx.fillStyle = 'white'
  data.ctx.fillText(boxes_text, data.halfWidth - (data.ctx.measureText(boxes_text).width) - 5 * data.ratio, data.halfHeight - (15 * data.ratio) + (5 * data.ratio) + px_height + 5)

  boxes_text = data.playerRight.nickname
  data.ctx.fillText(boxes_text, data.halfWidth + 5 * data.ratio, data.halfHeight - (15 * data.ratio) + (5 * data.ratio))
  data.ctx.fillStyle = 'white'
  boxes_text = data.playerRight.score
  data.ctx.fillText(boxes_text, data.halfWidth + 5 * data.ratio, data.halfHeight - (15 * data.ratio) + (5 * data.ratio) + px_height + 5)

  data.ctx.fillStyle = 'yellow'
  data.ctx.textAlign = 'center'
  if (data.completed) {
  	data.ctx.fillText('Click anywhere to exit', data.halfWidth, data.halfHeight - (15 * data.ratio) + (45 * data.ratio) + (10 * data.ratio))
  }
}

function move (e, data) {
  const mouseLocation = parseInt(event.clientY - data.canvasLocation.y)
  // console.log('input envoyé')
  data.socket.sendForGame({ position: parseInt(mouseLocation / data.ratio), action: 'received' }, data.gameId)
}

function simulateBall (data) {
  // simulate ball for lag compensation here
  data.ball.x += data.ball.speed * data.ball.dirx
  data.ball.y += data.ball.speed * data.ball.diry
}

function printWaitingScreen (data) {
  // console.log('ici')
  const px_height = parseInt(35 * data.ratio)
  const arg = 'Waiting for your opponent to join'
  data.ctx.textAlign = 'center'
  data.ctx.fillStyle = 'yellow'
  data.ctx.font = px_height + `px ${FONT_NAME}`
  data.ctx.fillText(arg, data.halfWidth, data.halfHeight)
}

function clearCanvas (data) {
  data.ctx.clearRect(0, 0, data.width, data.height)
}

// unsubscribeChannel si reload

function gameLoop (data) {
  let animation
  printField(data[0])
  printTextBoxes(data[0])
  if (data[0].started) {
    printPaddles(data[0])
	  printBall(data[0])
  } else {
    printWaitingScreen(data[0])
  }
  if (!data[0].end) {
  	animation = window.requestAnimationFrame(function () { gameLoop(data) })
  } else {
    clearCanvas(data[0])
    printEndScreen(data[0])
    if (data[0].completed) {
    	data[0].socket.unsubscribeChannel(data[0].gameId, 'GameChannel')
    }
    const mode = data[0].mode
    data[0].canvas.addEventListener('click', function (e) { redirecting(e, mode) })
  }
}

function safetyBeforeUnload (e, data) {
  try {
  	// data.socket.unsubscribeChannel(data.gameId, 'GameChannel')
  	data.end = true
  } catch (e) {}
}

function redirecting (e, mode) {
  if (mode === 'duel') {
    window.location.href = '#profile/'
  } else if (mode === 'tournament') {
    window.location.href = '#tournament'
  } else if (mode === 'war') {
    window.location.href = '#guild'
  } else {
    window.location.href = '#home'
  }
}

/*
function deleteData(data) {
	try {
		data.end = true
		console.log('data cleared')
	}
	catch (e) {
		console.log(e)
	}
}
*/
