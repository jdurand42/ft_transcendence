const WIDTH = 512
const HEIGHT = 256
const MIDDLEX = WIDTH / 2
const MIDDLEY = HEIGHT / 2
const PLAYER_SIZE_X = 2
const PLAYER_SIZE_Y = 28

export const GameView = Backbone.View.extend({
  el: $('#app'),
  initialize: function (options) {
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
				await this.guilds.fetch() &&
				await this.games.fetch()
        this.loadDocument()
        this.user = this.users.get(this.id)
        if (this.gameId === undefined || this.gameId === '' || this.gameId === null) {
          $(document).ready(this.playLadder())
        } else {
          this.game = this.games.get(this.gameId)
          // gérer game not found
          this.mode = this.game.get('mode')
          if (this.mode === 'duel') {
            $(document).ready(this.playDuel())
          } else if (this.mode === 'war') {
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

  loadDocument: function () {
    this.$el.html(Handlebars.templates.game({ mode: 'ladder' }))
  },

  callmatchmaking: function (f) {
    return $.ajax({
      url: '/api/games/',
      data: { mode: 'ladder', opponent_id: '5' },
      method: 'POST',
      success: f
    })
  },

  setLadderGame: function (response) {
    console.log('In setLadderGame')
    console.log(response)
    this.game = response
  },

  playLadder: function () {
    console.log('bonjour ladder')
    // lancer matchMaking
    const loadMatchMaking = async () => {
      // afficher Waiting
      try {
      	await this.callmatchmaking(this.setLadderGame)
      } catch (e) {
        console.log('error while requesting ladder match')
        console.log(e)
        this.initializeGame()
      }
    }
    loadMatchMaking()
  },

  playDuel: function () {
    console.log('bonjour duel')
  },

  playWar: function () {
    console.log('bonjour war')
  },

  initializeGame: function () {
    this.canvas = document.getElementById('gameWindow')
    this.canvasLocation = this.canvas.getBoundingClientRect()
    console.log(this.canvasLocation)
    this.ctx = this.canvas.getContext('2d')
    this.ctx.width = WIDTH
    this.ctx.height = HEIGHT
    this.playerLeft = {
      // nickname: this.users.get(this.game.get('player_left_id')).get('nickname'),
      nickname: 'left',
	 		score: 0,
      isUser: false,
      x: WIDTH / 10,
      y: HEIGHT / 2 - PLAYER_SIZE_Y / 2
    }
    this.playerRight = {
      // nickname: this.users.get(this.game.get('player_right_id')).get('nickname'),
      nickname: 'right',
	 		score: 0,
      isUser: false,
      x: WIDTH - WIDTH / 10,
      y: HEIGHT / 2 - PLAYER_SIZE_Y / 2
    }
    this.ball = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      r: 5
    }
    // if (this.game.get('player_left_id') === this.id) {
    this.playerLeft.isUser = true
    /* } else if (this.game.get('player_right_id') === this.id) {
      this.playerRight.isUser = true
    } */
    // register websocket
    this.canvas.addEventListener('mousemove', this.move)
    this.gameLoop()
  },

  move: function () {
    const mouseLocation = event.clientY - this.canvasLocation.y
    console.log('yes')
    console.log(this.id)
    // faire correspondre
  },

  printField: function () {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height)
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.ctx.width / 2, 0)
    this.ctx.lineTo(this.ctx.width / 2, this.ctx.height)
    this.ctx.stroke()
    this.ctx.closePath()
  },

  printPaddles: function () {
    this.ctx.strokeStyle = 'white'
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.playerLeft.x, this.playerLeft.y, PLAYER_SIZE_X, PLAYER_SIZE_Y)
    this.ctx.fillRect(this.playerRight.x, this.playerRight.y, PLAYER_SIZE_X, PLAYER_SIZE_Y)
  },

  printBall: function () {
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'yellow'
    this.ctx.fillStyle = 'yellow'
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.r, 0, Math.PI * 2, true)
    this.ctx.stroke()
    this.ctx.fill()
    this.ctx.closePath()
  },

  printTextBoxes: function () {
    const px_height = 15
    this.ctx.fillStyle = 'white'
    this.ctx.font = px_height + 'px serif'
    this.ctx.textAlign = 'left'
    this.ctx.textBaseline = 'top'

    let boxes_text = this.playerLeft.nickname
    // penser a réduire si le nom est trop grand
    this.ctx.fillText(boxes_text, 0, 0)
    boxes_text = this.playerLeft.score
    this.ctx.fillText(boxes_text, 0, px_height + 5)

    boxes_text = this.playerRight.nickname
    this.ctx.fillText(boxes_text, this.ctx.width - (this.ctx.measureText(boxes_text).width), 0)
    boxes_text = this.playerRight.score
    this.ctx.fillText(boxes_text, this.ctx.width - (this.ctx.measureText(boxes_text).width), px_height + 5)
  },

  updateGameState: function () {
    // do stuff with websocket to update positions
  },

  gameLoop: function () {
    let animation
    this.updateGameState()
    this.printField()
    this.printTextBoxes()
    this.printPaddles()
    this.printBall()
    animation = window.requestAnimationFrame(this.gameLoop)
  }
})
