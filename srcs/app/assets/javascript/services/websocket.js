export class MyWebSocket {
  constructor (objet) {
    let proto = 'ws'
    if (window.location.protocol === 'https:') {
      proto += 's'
    }
    const url = proto + '://' + window.location.host + '/cable?access-token=' + window.localStorage.getItem('access-token') + '&client=' + window.localStorage.getItem('client_id') + '&uid=' + window.localStorage.getItem('uid')
    this.socket = new WebSocket(url)

    const socket = this.socket
    this.socket.onopen = function (event) {
      let msg = {
        command: 'subscribe',
        identifier: JSON.stringify({
          id: window.localStorage.getItem('user_id'),
          channel: 'UserChannel'
        })
      }
      socket.send(JSON.stringify(msg))

      msg = {
        command: 'subscribe',
        identifier: JSON.stringify({
          id: undefined,
          channel: 'ActivityChannel'
        })
      }
      socket.send(JSON.stringify(msg))
      console.log('WebSocket is connected: ')
    }

    this.socket.onclose = function (event) {
      console.log(event)
      console.log('websocket is closed: ')
    }

    this.socket.onmessage = function (event) {
      const response = event.data
      const msg = JSON.parse(response)

      if (msg.type === 'ping') {
        return
      }
      console.log(msg)
      if (msg.message) {
        try {
          objet.receiveMessage(msg)
        } catch (e) {
        }
      }
    }
    this.socket.onerror = function (error) {}
  }

  subscribeChannel (chatRoomId, channelName) {
    const msg = {
      command: 'subscribe',
      identifier: JSON.stringify({
        id: chatRoomId,
        channel: channelName
      })
    }
    this.socket.send(JSON.stringify(msg))
  }

  updateContext (objet, notif) {
    this.socket.onmessage = function (event) {
      const response = event.data
      const msg = JSON.parse(response)

      if (msg.type === 'ping') {
        return
      }
      console.log(msg)
      if (msg.message && msg.message.action !== undefined && msg.message.action === 'game_invitation') {
        try {
          notif.receiveMessage(msg.message)
        } catch (e) {
        }
      } else if (msg.message) {
        try {
          objet.receiveMessage(msg)
        } catch (e) {
        }
      }
    }
  }

  getSocket () {
    return this.socket
  }

  close () {
    console.log('close')
    this.socket.close()
  }
}
