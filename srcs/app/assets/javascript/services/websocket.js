export class MyWebSocket {
  constructor (chatRoomId, channelName, objet) {
    const url = 'ws://' + window.location.host + '/cable?access-token=' + window.localStorage.getItem('access-token') + '&client=' + window.localStorage.getItem('client_id') + '&uid=' + window.localStorage.getItem('uid')
    this.socket = new WebSocket(url)

    const socket = this.socket
    this.socket.onopen = function (event) {
      const msg = {
        command: 'subscribe',
        identifier: JSON.stringify({
          id: chatRoomId,
          channel: channelName
        })
      }
      socket.send(JSON.stringify(msg))
      console.log('WebSocket is connected.')
    }

    this.socket.onclose = function (event) {
      console.log('websocket is closed')
    }

    this.socket.onmessage = function (event) {
      const response = event.data
      const msg = JSON.parse(response)

      if (msg.type === 'ping') {
        return
      }
      if (msg.message) {
        console.log(msg.message)
        objet.receiveMessage(chatRoomId, msg.message)
      }
    }
    this.socket.onerror = function (error) {
      console.log(error)
    }
  }

  getSocket () {
    return this.socket
  }
}
