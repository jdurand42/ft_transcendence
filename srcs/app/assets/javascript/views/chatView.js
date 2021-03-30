/* eslint-disable eqeqeq */
import { Users } from '../collections/usersCollection'
import { ChatModel } from '../models/chatModel'
import { User } from '../models/userModel'
import { Channels } from '../collections/channels'
import { MyWebSocket } from '../services/websocket'
import { GameRecord } from '../models/gameRecord'

export const ChatView = Backbone.View.extend({
  events: {
    'click .add_channel': 'openModalCreateChannel',
    'click .createChannel': 'createChannel',
    'click .closeModal': 'modalClose',
    'keyup .input': 'sendMessage',
    'click .eachFriendModalCreateChannel': 'selectCheckbox',
    'click .eachFriendModalCreateDirectMessages': 'createDM',
    'keyup .search': 'modalSearchFriends',
    'keyup .inputModalSearchAllChannels': 'inputModalSearchAllChannels',
    'click .add_direct_messages': 'openModalCreateDM',
    'click .close-icon': 'deleteChannelConfirmation',
    'click .search_channel': 'openModalSearchChannel',
    'click .eachChannel': 'subscribeChannel',
    'click .yesDeleteChannel': 'deleteChannel',
    'click .no': 'modalClose',
    'click .clickable-discussions': 'openChat',
    'click .group_add-container': 'openModalAddFriendsToChannel',
    'click .validate-add-friends': 'validateAddFriendsToChannel',
    'click .admin_panel_settings': 'adminPanelOverviewMenu',
    'click .overview-menu': 'adminPanelOverviewMenu',
    'click .permissions-menu': 'adminPanelPermissionsMenu',
    'click .members-menu': 'adminPanelMembersMenu',
    'click .closeParams': 'closeParams',
    'keyup .modalSearchAddFriendsToChannel': 'modalSearchAddFriends',
    'click .dots-container': 'adminRights',
    'click .deleteChannel': 'deleteDefinitivelyChannel',
    'click .yesDeleteDefinitivelyChannel': 'yesDeleteDefinitivelyChannel',
    'click .appoint-as-admin': 'modalValidationAppointAsAdmin',
    'click .members': 'closeAdminRights',
    'click .yesAsAdmin': 'yesAsAdmin',
    'click .ban': 'openModalBan',
    'click .yesBan': 'validateBan',
    'click .mute': 'openModalMute',
    'click .yesMute': 'validateMute',
    'click .passwordVisibility': 'passwordVisibility',
    'click .private': 'radioPrivate',
    'click .public': 'radioPublic',
    'click .protected': 'radioProtected',
    'click .save': 'savePrivacy',
    'click .validate-password': 'subscribeProtectedChannel',
    'click .blockViewProfile': 'openDropListBlockViewProfile',
    'click .chat': 'closeDropListBlockViewProfile',
    'click .block': 'blockUser',
    'click .view-profile': 'viewProfile',
    'click .remove-admin-rights': 'removeAdminRights',
    'click .play-button': 'play'
  },
  initialize: function () {
    this.myMessages = {}
    this.context = {}
    this.context.messages = []
    this.myChannels = new Channels()
    this.channels = new Channels()
    this.users = new Users()
    this.userLogged = new User()
    this.userLoggedId = Number(window.localStorage.getItem('user_id'))

    this.socket = new MyWebSocket(this.userLoggedId, 'UserChannel', this)

    this.userLogged.fetchUser(this.userLoggedId)

    this.myChannels.on('remove', function () {
      this.channel = this.channels.fetch()
    }, this)

    this.channels.fetch()

    const fetch = async () => {
      const response2 = this.myChannels.fetchByUserId(window.localStorage.getItem('user_id'))
      const response1 = this.users.fetch()
      await response1 && await response2
      this.users.remove(window.localStorage.getItem('user_id'))
      let i = 0
      for (; i < this.myChannels.length; i++) {
        const currentChannel = this.myChannels.at(i)
        console.log(currentChannel)
        const channelId = currentChannel.get('id')
        if (currentChannel.get('ban_ids').some(el => el == this.userLoggedId) === false) {
          const socket = new MyWebSocket(channelId, 'ChatChannel', this)
          const participantIds = currentChannel.get('participant_ids')
          for (let i = 0; i < participantIds.length; i++) {
            const socket = new MyWebSocket(participantIds[i], 'UserStatusChannel', this)
          }
        } else {
          this.myChannels.remove(channelId)
        }
      }
      this.render()
    }
    fetch()
  },
  defaults: {
    myChannels: undefined,
    channels: undefined,
    userLogged: undefined,
    users: undefined,
    channelId: undefined,
    socket: undefined,
    context: undefined,
    myMessages: undefined
  },
  el: $('#app'),
  render: function () {
    this.templateChat = Handlebars.templates.chat

    this.updateContextLeftSide()

    let currentChannel
    if (this.myChannels.length > 0) {
      currentChannel = this.myChannels.at(0)
    } else if (this.channels.length > 0 && this.userLogged.get('admin') === true) {
      currentChannel = this.channels.at(0)
    }

    let channelId
    if (currentChannel !== undefined) {
      channelId = currentChannel.get('id')
    }

    const fetchAllMessages = async () => {
      for (let i = 0; i < this.myChannels.length; i++) {
        const channel = this.myChannels.at(i)
        if (channel.get('id') !== channelId) {
          const messages = await channel.getMessages()
          for (let i = 0; i < messages.length; i++) {
            this.receiveMessage(channel.get('id'), messages[i])
          }
        }
      }
    }
    fetchAllMessages()

    const fetchMessage = async () => {
      if (currentChannel !== undefined) {
        const messages = await currentChannel.getMessages()
        for (let i = 0; i < messages.length; i++) {
          this.receiveMessage(channelId, messages[i])
        }
        this.updateContextCenter(currentChannel)
        this.updateContextRightSide(currentChannel)
      }

      Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
        switch (operator) {
          case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this)
          default:
            return options.inverse(this)
        }
      })

      const templateDataChat = this.templateChat(this.context)
      this.$el.html(templateDataChat)

      // update post render
      let currentTarget
      if (this.myChannels.length > 0) {
        const id = this.myChannels.at(0).get('id')
        if (document.getElementById('channel' + id) !== undefined) {
          currentTarget = document.getElementById('channel' + id)
        } else if (document.getElementById('DM' + id) !== undefined) {
          currentTarget = document.getElementById('DM' + id)
        }
        this.updateDOM(currentTarget, this.myChannels.at(0))
      } else if (this.channels.length > 0) {
        const id = this.channels.at(0).get('id')
        currentTarget = document.getElementById('all-channel' + id)
        this.updateDOM(currentTarget, this.channels.at(0))
      }
      return this
    }
    fetchMessage()
  },

  play: function (e) {
    const userId = Number(e.currentTarget.getAttribute('for'))
    const newGame = new GameRecord()

    newGame.inviteGame(userId)
  },

  receiveMessage: function (chatId, message) {
    if (message.action) { // message.action = message TO DO
      if (message.action === 'user_online' ||
        message.action === 'user_offline' ||
        message.action === 'user_ingame') {
        if (message.action === 'user_online') {
          this.users.get(message.id).set({ status: 'online' })
        } else if (message.action === 'user_offline') {
          this.users.get(message.id).set({ status: 'offline' })
        } else if (message.action === 'user_ingame') {
          this.users.get(message.id).set({ status: 'ingame' })
        }
        const currentChannel = this.channels.get(this.channelId)
        this.updateContextCenter(currentChannel)
        this.updateContextRightSide(currentChannel)
        if (currentChannel.get('privacy') === 'direct_message') {
          this.updateHTML('left-header')
        } else {
          this.updateHTML('right-side')
        }
      } else if (message.action === 'chat_invitation') {
        const socket = new MyWebSocket(message.id, 'ChatChannel', this)

        const fetchMyChannels = async () => {
          this.channels.fetch()
          await this.myChannels.fetchByUserId(this.userLoggedId)

          const messages = await this.myChannels.get(message.id).getMessages()
          for (let i = 0; i < messages.length; i++) {
            this.receiveMessage(message.id, messages[i])
          }

          if (message.sender_id !== this.userLoggedId) { // check back ok
            this.updateContextLeftSide()
            if (this.myChannels.get(message.id).get('privacy') === 'direct_message') {
              this.updateHTML('DM')
            } else {
              this.updateHTML('myChannels')
            }
          }
        }
        fetchMyChannels()
      }
    } else {
      let sender
      if (message.sender_id === this.userLogged.get('id')) {
        sender = this.userLogged
      } else {
        if (this.userLogged.get('ignores').some(el => el.ignored_id === message.sender_id) === false) {
          sender = this.users.get(message.sender_id)
        }
      }

      if (this.myMessages[chatId] === undefined) {
        this.myMessages[chatId] = []
      }
      this.myMessages[chatId].unshift(JSON.parse(JSON.stringify(message)))

      if (sender !== undefined && document.getElementById('messages' + chatId) !== null) {
        this.context.messages.unshift(JSON.parse(JSON.stringify(sender)))
        if (message.created_at) {
          let date = message.created_at.replace('T', ' ')
          date = date.substr(0, 19)
          this.context.messages[0].time = date
        }
        this.context.messages[0].message = message.content
        this.updateHTML('messages' + chatId)
        document.getElementById('textInput').focus()
      }
    }
  },

  blockUser: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const innerHtml = e.currentTarget.innerHTML
    const ignores = this.userLogged.get('ignores')
    if (innerHtml === 'Block') {
      this.userLogged.block(Number(userId))
      ignores.push({ ignored_id: Number(userId) })
      this.userLogged.set({ ignores: ignores })
      e.currentTarget.innerHTML = 'Unblock'
    } else {
      this.userLogged.unblock(Number(userId))
      const newIgnores = ignores.slice().filter(el => el.ignored_id != userId)
      this.userLogged.set({ ignores: newIgnores })
      e.currentTarget.innerHTML = 'Block'
    }
    const currentChannel = this.myChannels.get(e.currentTarget.getAttribute('channel-id'))
    this.updateContextLeftSide()
    if (currentChannel.get('privacy') === 'direct_message') {
      document.getElementById('right-side').style.display = 'none'
    } else {
      document.getElementById('right-side').style.display = 'flex'
    }
    this.updateContextRightSide(currentChannel)
    this.updateContextCenter(currentChannel)
    this.updateHTML('discussions')
    this.updateHTML('center')
    this.updateHTML('right-side')
  },

  viewProfile: function (e) {
    e.stopPropagation()
  },

  openDropListBlockViewProfile: function (e) {
    e.stopPropagation()
    const dropList = document.getElementById('droplistBlockViewProfile')
    const viewProfile = document.getElementById('view-profile')
    const blockDiv = document.getElementById('block')
    const userId = e.currentTarget.getAttribute('for')
    dropList.style.display = 'flex'
    blockDiv.setAttribute('for', userId)
    blockDiv.setAttribute('channel-id', e.currentTarget.getAttribute('id'))
    viewProfile.setAttribute('href', '/#profile/' + userId)

    const getOffsetTop = element => {
      let offsetTop = 0
      while (element) {
        offsetTop += element.offsetTop
        element = element.offsetParent
      }
      return offsetTop
    }
    const X = getOffsetTop(e.target)

    const getOffsetLeft = element => {
      let offsetLet = 0
      while (element) {
        offsetLet += element.offsetLeft
        element = element.offsetParent
      }
      return offsetLet
    }
    const Y = getOffsetLeft(e.target)

    dropList.style.top = X + e.target.offsetHeight + 4
    dropList.style.left = Y
    const block = dropList.childNodes[3]

    if (this.userLogged.get('ignores').find(el => {
      return el.ignored_id == userId
    })) {
      block.innerHTML = 'Unblock'
    } else {
      block.innerHTML = 'Block'
    }
  },

  closeDropListBlockViewProfile: function (e) {
    e.stopPropagation()
    const viewProfile = document.getElementById('view-profile')
    const block = document.getElementById('block')
    if (e.currentTarget.classList.contains('image-container') === false) {
      const droplistBlockViewProfile = document.getElementsByClassName('droplistBlockViewProfile')
      for (let i = 0; i < droplistBlockViewProfile.length; i++) {
        droplistBlockViewProfile[i].style.display = 'none'
        block.setAttribute('for', '')
        viewProfile.setAttribute('href', '')
      }
    }
  },

  passwordVisibility: function () {
    const icon = document.getElementById('eyeVisibility')
    const password = document.getElementById('password')
    if (icon.src.includes('icons/visibility.svg')) {
      icon.src = './icons/visibility_off.svg'
      password.type = 'password'
    } else {
      icon.src = './icons/visibility.svg'
      password.type = 'text'
    }
  },

  validateMute: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const radio = document.getElementsByName('radioMute' + userId)
    const getValue = function () {
      let i = 0
      for (; i < radio.length; i++) {
        if (radio[i].checked === true) { break }
      }
      return radio[i].value
    }
    const value = getValue()
    const currentChannel = this.channels.get(this.channelId)
    currentChannel.muteUser(Number(value), Number(userId))
    this.modalClose()
  },

  openModalMute: function (e) {
    document.getElementById('modalValidationMute' + e.currentTarget.getAttribute('for')).style.display = 'flex'
  },

  validateBan: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const radio = document.getElementsByName('radioBan' + userId)
    const getValue = function () {
      let i = 0
      for (; i < radio.length; i++) {
        if (radio[i].checked === true) { break }
      }
      return radio[i].value
    }
    const value = getValue()
    const currentChannel = this.channels.get(this.channelId)
    currentChannel.banUser(Number(value), Number(userId))
    this.modalClose()
  },

  openModalBan: function (e) {
    document.getElementById('modalValidationBan' + e.currentTarget.getAttribute('for')).style.display = 'flex'
  },

  yesAsAdmin: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const currentChannel = this.channels.get(this.channelId)
    const adminIds = currentChannel.get('admin_ids')
    adminIds.push(Number(userId))
    currentChannel.appointAsAdmin(Number(userId))
    currentChannel.set({ admin_ids: adminIds })
    this.modalClose()
    this.updateContextAdmin(currentChannel)
    this.updateContextMembers(currentChannel)
    this.updateHTML('admins')
    this.updateHTML('participants')
  },

  removeAdminRights: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const currentChannel = this.channels.get(this.channelId)
    let adminIds = currentChannel.get('admin_ids')
    adminIds = adminIds.filter(el => el !== Number(userId))
    currentChannel.removeAdminRights(Number(userId))
    currentChannel.set({ admin_ids: adminIds })
    this.updateContextAdmin(currentChannel)
    this.updateContextMembers(currentChannel)
    this.updateHTML('admins')
    this.updateHTML('participants')
  },

  modalValidationAppointAsAdmin: function (e) {
    e.stopPropagation()
    document.getElementById('modalValidationAppointAsAdmin' + e.currentTarget.getAttribute('for')).style.display = 'flex'
  },

  closeAdminRights: function (e) {
    e.stopPropagation()
    if (e.currentTarget.classList.contains('admin-rights') === false) {
      const adminRights = document.getElementsByClassName('admin-rights')
      for (let i = 0; i < adminRights.length; i++) {
        adminRights[i].style.display = 'none'
      }
      const dotsContainer = document.getElementsByClassName('dots-container')
      for (let i = 0; i < dotsContainer.length; i++) {
        dotsContainer[i].classList.remove('open')
      }
    }
  },

  adminRights: function (e) {
    e.stopPropagation()
    const id = e.currentTarget.getAttribute('for')
    if (e.currentTarget.classList.contains('open')) {
      document.getElementById('admin-rights' + id).style.display = 'none'
      e.currentTarget.classList.remove('open')
    } else {
      e.currentTarget.classList.add('open')
      document.getElementById('admin-rights' + id).style.display = 'flex'
    }
  },

  updateContextAdmin: function (currentChannel) {
    const admins = currentChannel.get('admin_ids')
    const channelId = currentChannel.get('id')
    this.context.admins = []
    for (let i = 0; i < admins.length; i++) {
      if (admins[i] !== currentChannel.get('owner_id')) {
        let admin = this.users.get(admins[i])
        if (admin === undefined) {
          admin = this.userLogged
        }
        let anagram
        if (admin.get('anagram') === undefined) {
          anagram = 'N/A'
        } else {
          anagram = admin.get('anagram')
        }
        this.context.admins.push(JSON.parse(JSON.stringify(admin)))
        this.context.admins[this.context.admins.length - 1].anagram = anagram
        this.context.admins[this.context.admins.length - 1].channelId = channelId
        this.context.admins[this.context.admins.length - 1].superAdmin = this.userLogged.get('admin')
      }
    }
  },

  updateContextMembers: function (currentChannel) {
    const members = currentChannel.get('participant_ids')
    const admins = currentChannel.get('admin_ids')
    const ownerId = currentChannel.get('owner_id')
    const channelId = currentChannel.get('id')
    let owner
    if (ownerId === this.userLogged.get('id')) {
      owner = this.userLogged
    } else {
      owner = this.users.get(
        currentChannel.get('owner_id')
      )
    }
    this.context.members = []
    for (let i = 0; i < members.length; i++) {
      if (members[i] !== this.userLogged.get('id') &&
        !admins.find(el => el === members[i])) {
        const member = this.users.get(members[i])
        let anagram
        if (owner.get('anagram') === undefined) {
          anagram = 'N/A'
        } else {
          anagram = owner.get('anagram')
        }
        this.context.members.push(JSON.parse(JSON.stringify(member)))
        this.context.members[this.context.members.length - 1].anagram = anagram
        this.context.members[this.context.members.length - 1].owner = this.context.owner
        this.context.members[this.context.members.length - 1].superAdmin = this.userLogged.get('admin')
        this.context.members[this.context.members.length - 1].channelId = channelId
      }
    }
  },

  adminPanelMembersMenu: function () {
    const currentChannel = this.channels.get(this.channelId)
    const channelId = currentChannel.get('id')
    const ownerId = currentChannel.get('owner_id')
    let owner
    if (ownerId === this.userLogged.get('id')) {
      owner = this.userLogged
    } else {
      owner = this.users.get(
        currentChannel.get('owner_id')
      )
    }
    this.context.owners = []
    let anagram
    if (owner.get('anagram') === undefined) {
      anagram = 'N/A'
    } else {
      anagram = owner.get('anagram')
    }
    this.context.owners.push(JSON.parse(JSON.stringify(owner)))
    this.context.owners[this.context.owners.length - 1].anagram = anagram
    this.context.owners[this.context.owners.length - 1].channelId = channelId

    this.updateContextAdmin(currentChannel)
    this.updateContextMembers(currentChannel)

    this.updateHTML('params-members')
    document.getElementById('params-overview').style.display = 'none'
    document.getElementById('params-permissions').style.display = 'none'
    document.getElementById('params-members').style.display = 'flex'

    document.getElementById('overview-menu').classList.remove('open')
    document.getElementById('members-menu').classList.add('open')
    if (document.getElementById('permissions-menu') !== null) {
      document.getElementById('permissions-menu').classList.remove('open')
    }
  },

  closeParams: function () {
    document.getElementById('params').style.display = 'none'
    document.getElementById('passwordDiv').style.display = 'none'
    document.getElementById('password').value = ''
    document.getElementById('discussions').style.display = 'flex'
    document.getElementById('center').style.display = 'flex'
    this.updateHTML('right-side')
    document.getElementById('right-side').style.display = 'flex'
    // this.channelId = undefined
  },

  savePrivacy: function () {
    // const radios = document.getElementByName('privacy')
    const privacy = document.querySelector('input[name="privacy"]:checked').value
    const password = document.getElementById('password').value
    const currentChannel = this.myChannels.get(this.channelId)
    const updatePrivacy = async () => {
      try {
        const response = await currentChannel.updatePrivacy(privacy, password)
        this.context.privacy = privacy[0].toUpperCase() + privacy.slice(1)
        document.getElementById('error-password').innerHTML = 'Your changes have been saved.'
        document.getElementById('error-password').style.display = 'block'
        document.getElementById('error-password').style.color = 'var(--secondary-color)'
      } catch (error) {
        document.getElementById('error-password').innerHTML = error.responseJSON.message
        document.getElementById('error-password').style.display = 'block'
        document.getElementById('error-password').style.color = 'var(--error-message-color)'
      }
    }
    updatePrivacy()
  },

  radioPublic: function () {
    document.getElementById('passwordDiv').style.display = 'none'
  },

  radioPrivate: function () {
    document.getElementById('passwordDiv').style.display = 'none'
  },

  radioProtected: function () {
    document.getElementById('passwordDiv').style.display = 'flex'
  },

  adminPanelPermissionsMenu: function () {
    const currentChannel = this.channels.get(this.channelId)
    const privacy = currentChannel.get('privacy')
    const radio = document.getElementById(privacy)
    radio.checked = true

    if (privacy === 'protected') {
      document.getElementById('passwordDiv').style.display = 'flex'
    }

    document.getElementById('params-overview').style.display = 'none'
    document.getElementById('params-members').style.display = 'none'
    document.getElementById('params-permissions').style.display = 'flex'
    document.getElementById('overview-menu').classList.remove('open')
    document.getElementById('members-menu').classList.remove('open')
    document.getElementById('permissions-menu').classList.add('open')
  },

  adminPanelOverviewMenu: function (e) {
    e.stopPropagation()

    this.context.superAdmin = this.userLogged.get('admin')
    if (e.currentTarget.getAttribute('class') === 'admin_panel_settings') {
      this.channelId = e.currentTarget.getAttribute('for')
      e.currentTarget = e.currentTarget.parentElement
      this.context.name = this.channels.get(this.channelId).get('name')
      this.openChat(e)
    }
    this.updateHTML('params')

    document.getElementById('discussions').style.display = 'none'
    document.getElementById('center').style.display = 'none'
    document.getElementById('right-side').style.display = 'none'
    document.getElementById('params').style.display = 'flex'

    document.getElementById('params-overview').style.display = 'flex'
    document.getElementById('params-permissions').style.display = 'none'
    document.getElementById('params-members').style.display = 'none'

    document.getElementById('overview-menu').classList.add('open')
    document.getElementById('members-menu').classList.remove('open')
    if (document.getElementById('permissions-menu') !== null) {
      document.getElementById('permissions-menu').classList.remove('open')
    }
  },

  validateAddFriendsToChannel: function (e) {
    const channelId = e.currentTarget.getAttribute('for')
    const participantIds = this.getSelectedBoxes()
    const currentChannel = this.myChannels.get(channelId)
    currentChannel.invitesToChannel(participantIds)
    const participants = currentChannel.get('participant_ids')
    participantIds.forEach(el => participants.push(Number(el)))
    currentChannel.set({ participants_ids: participants })
    this.myChannels.set(currentChannel)
    this.updateContextRightSide(currentChannel)
    this.updateHTML('right-side')
    this.modalClose()
  },

  openModalAddFriendsToChannel: function (e) {
    const channelId = e.currentTarget.getAttribute('for')
    const currentChannel = this.myChannels.get(channelId)
    const participantIds = currentChannel.get('participant_ids')
    const users = this.users.slice().filter(function (el) {
      for (let i = 0; i < participantIds.length; i++) {
        if (participantIds[i] === el.get('id')) {
          return false
        }
      }
      return true
    })
    this.context.friends = JSON.parse(JSON.stringify(users))
    this.updateHTML('modalAddFriendsToChannel')
    document.getElementById('modalAddFriendsToChannel').style.display = 'flex'
  },

  modalSearchAddFriends: function (e) {
    const value = document.getElementById(e.currentTarget.getAttribute('id')).value
    const channelId = e.currentTarget.getAttribute('for')
    const currentChannel = this.myChannels.get(channelId)
    const participantIds = currentChannel.get('participant_ids')
    const search = this.users.slice().filter(function (el) {
      for (let i = 0; i < participantIds.length; i++) {
        if (participantIds[i] === el.get('id')) {
          return false
        }
      }
      if (el.get('nickname').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      if (el.get('anagram') !== undefined && el.get('anagram').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    const find = 'friends' + e.currentTarget.getAttribute('id')
    this.context.friends = JSON.parse(JSON.stringify(search))
    this.updateHTML(find)
  },

  updateDOM: function (currentTarget, currentChannel) {
    document.getElementById('center').style.display = 'flex'
    if (this.userLogged.get('admin') === false) {
      if (this.myChannels.length === 0) {
        document.getElementById('right-side').style.display = 'none'
        document.getElementById('center').style.display = 'none'
      }
      if (this.myChannels.length > 0) {
        let id = currentChannel.get('participant_ids').find(el => el !== this.userLogged.get('id'))
        const userChat = this.users.get(id)
        id = currentChannel.get('id')
        if (currentChannel.get('privacy') === 'direct_message') {
          document.getElementById('right-side').style.display = 'none'
          document.getElementById('pastille').classList.add(userChat.get('status'))
          document.getElementById('DM' + id).classList.add('open')
        } else {
          document.getElementById('right-side').style.display = 'flex'
          document.getElementById('channel' + id).classList.add('open')
        }
      }
    } else {
      if (this.channels.length > 0) {
        const id = currentChannel.get('id')
        if (currentChannel.get('privacy') === 'direct_message') {
          const userId = currentChannel.get('participant_ids').find(el => el !== this.userLogged.get('id'))
          const userChat = this.users.get(userId)
          document.getElementById('right-side').style.display = 'none'
          document.getElementById('pastille').classList.add(userChat.get('status'))
          document.getElementById('DM' + id).classList.add('open')
        } else if (currentTarget.getAttribute('id').startsWith('channel') === true) {
          document.getElementById('right-side').style.display = 'flex'
          document.getElementById('channel' + id).classList.add('open')
        } else {
          document.getElementById('right-side').style.display = 'flex'
          document.getElementById('all-channel' + id).classList.add('open')
        }
      }
    }
  },

  updateContextLeftSide: function () {
    // my channels
    const channels = this.myChannels.slice().filter(el => el.get('privacy') !== 'direct_message')
    this.context.myChannels = []
    for (let i = 0; i < channels.length; i++) {
      this.context.myChannels.push(JSON.parse(JSON.stringify(channels[i])))
      if (channels[i].get('owner_id') && (channels[i].get('admin_ids').find(el => el === this.userLogged.get('id')) === true ||
      channels[i].get('owner_id') === this.userLogged.get('id'))) {
        this.context.myChannels[i].admin = true
      } else {
        this.context.myChannels[i].admin = false
      }
    }

    // direct messages
    const DM = this.myChannels.slice().filter(el => el.get('privacy') === 'direct_message')
    this.context.DM = []
    for (let i = 0; i < DM.length; i++) {
      this.context.DM.push(JSON.parse(JSON.stringify(DM[i])))
      console.log(DM[i])
      const id = DM[i].get('participant_ids').find(el => el !== this.userLogged.get('id'))
      console.log(id)
      const user = this.users.get(id)
      console.log(this.users.get(id))
      if (this.userLogged.get('ignores').some(el => el.ignored_id == id) === true) {
        this.context.DM[i].image_url = './icons/blocked.svg'
      } else {
        this.context.DM[i].image_url = user.get('image_url')
      }
      this.context.DM[i].anagram = user.get('anagram')
      this.context.DM[i].nickname = user.get('nickname')
      this.context.DM[i].userId = user.get('id')
      this.context.DM[i].channelId = DM[i].get('id')
    }

    this.context.superAdmin = this.userLogged.get('admin')
    if (this.context.superAdmin === true) {
      const allChannels = this.channels.slice().filter(el => el.get('privacy') !== 'direct_message')
      this.context.allChannels = []
      for (let i = 0; i < allChannels.length; i++) {
        this.context.allChannels.push(JSON.parse(JSON.stringify(allChannels[i])))
      }
    }
  },

  updateContextRightSide: function (currentChannel) {
    const channelId = currentChannel.get('id')
    const usersOnline = this.users.slice().filter(function (el) {
      const id = el.get('id')
      if (currentChannel.get('participant_ids').find(el2 => el2 == id) &&
      el.get('status') === 'online') { return true }
      return false
    })
    const usersInGame = this.users.slice().filter(function (el) {
      const id = el.get('id')
      if (currentChannel.get('participant_ids').find(el2 => el2 == id) &&
      el.get('status') === 'ingame') { return true }
      return false
    })
    const usersOffline = this.users.slice().filter(function (el) {
      const id = el.get('id')
      if (currentChannel.get('participant_ids').find(el2 => el2 == id) &&
      el.get('status') === 'offline') { return true }
      return false
    })
    this.context.nbOnline = usersOnline.length
    this.context.nbOffline = usersOffline.length
    this.context.nbInGame = usersInGame.length
    this.context.usersOnline = []
    for (let i = 0; i < usersOnline.length; i++) {
      this.context.usersOnline.push(JSON.parse(JSON.stringify(usersOnline[i])))
      if (this.userLogged.get('ignores').some(el => el.ignored_id == usersOnline[i].get('id')) === true) {
        this.context.usersOnline[i].image_url = './icons/blocked.svg'
      }
      this.context.usersOnline[i].userId = usersOnline[i].get('id')
      this.context.usersOnline[i].channelId = channelId
      let length
      if (this.context.usersOnline[i].anagram !== undefined) {
        length = this.context.usersOnline[i].anagram.length + this.context.usersOnline[i].nickname.length
      } else {
        length = this.context.usersOnline[i].nickname.length
      }
      if (length > 17) {
        let size = 16
        if (this.context.usersOnline[i].anagram !== undefined) {
          size = 16 - this.context.usersOnline[i].anagram.length
        }
        this.context.usersOnline[i].nickname = this.context.usersOnline[i].nickname.substr(0, size) + '.'
      }
    }

    // in game
    this.context.usersInGame = []
    for (let i = 0; i < usersInGame.length; i++) {
      this.context.usersInGame.push(JSON.parse(JSON.stringify(usersInGame[i])))
      if (this.userLogged.get('ignores').some(el => el.ignored_id == usersInGame[i].get('id')) === true) {
        this.context.usersInGame[i].image_url = './icons/blocked.svg'
      }
      this.context.usersInGame[i].userId = usersInGame[i].get('id')
      this.context.usersInGame[i].channelId = channelId
      let length
      if (this.context.usersInGame[i].anagram !== undefined) {
        length = this.context.usersInGame[i].anagram.length + this.context.usersInGame[i].nickname.length
      } else {
        length = this.context.usersInGame[i].nickname.length
      }
      if (length > 17) {
        let size = 16
        if (this.context.usersInGame[i].anagram !== undefined) {
          size = 16 - this.context.usersInGame[i].anagram.length
        }
        this.context.usersInGame[i].nickname = this.context.usersInGame[i].nickname.substr(0, size) + '.'
      }
    }

    // offline
    this.context.usersOffline = []
    for (let i = 0; i < usersOffline.length; i++) {
      this.context.usersOffline.push(JSON.parse(JSON.stringify(usersOffline[i])))
      if (this.userLogged.get('ignores').some(el => el.ignored_id == usersOffline[i].get('id')) === true) {
        this.context.usersOffline[i].image_url = './icons/blocked.svg'
      }
      this.context.usersOffline[i].userId = usersOffline[i].get('id')
      this.context.usersOffline[i].channelId = channelId
      if (this.context.usersOffline[i].anagram !== undefined) {
        const length = this.context.usersOffline[i].anagram.length + this.context.usersOffline[i].nickname.length
        if (length > 17) {
          const size = 16 - this.context.usersOffline[i].anagram.length
          this.context.usersOffline[i].nickname = this.context.usersOffline[i].nickname.substr(0, size) + '.'
        }
      }
    }
  },

  updateContextCenter: function (currentChannel) {
    let status

    const idUserLogged = this.userLoggedId

    if (currentChannel.get('privacy') === 'direct_message') {
      this.context.channel = false
      const id = currentChannel.get('participant_ids').find(el => el !== idUserLogged)
      const user = this.users.get(id)
      if (this.userLogged.get('ignores').some(el => el.ignored_id == id) === true) {
        this.context.image_url = './icons/blocked.svg'
      } else {
        this.context.image_url = user.get('image_url')
      }
      this.context.anagram = user.get('anagram')
      this.context.nickname = user.get('nickname')
      status = user.get('status')
      this.context.status = status

      if (status === 'ingame') {
        this.context.slide_show = './icons/slideshow-ingame.svg'
      } else {
        this.context.slide_show = './icons/slideshow.svg'
      }
      this.context.userId = user.get('id')
    } else {
      this.context.channel = true
      this.context.privacy = currentChannel.get('privacy')[0].toUpperCase() + currentChannel.get('privacy').slice(1)
      this.context.name = currentChannel.get('name')
      const isOwner = function () { return currentChannel.get('owner_id') == idUserLogged }
      this.context.owner = isOwner()
      this.context.chatId = currentChannel.get('id')
    }

    this.context.id = currentChannel.get('id')
    this.context.messages = []
    const channelId = currentChannel.get('id')
    if (this.myMessages[channelId] !== undefined) {
      for (let i = 0; i < this.myMessages[channelId].length; i++) {
        const message = this.myMessages[channelId][i]
        let sender
        if (message.sender_id === this.userLogged.get('id')) {
          sender = this.userLogged
        } else {
          sender = this.users.get(message.sender_id)
        }
        this.context.messages.unshift(JSON.parse(JSON.stringify(sender)))
        if (message.created_at) {
          let date = message.created_at.replace('T', ' ')
          date = date.substr(0, 19)
          this.context.messages[0].time = date
        }
        this.context.messages[0].message = message.content
      }
    }
  },

  openChat: function (e) {
    // display

    const divId = e.currentTarget.getAttribute('id')
    const id = e.currentTarget.getAttribute('for')
    this.channelId = id
    this.closeOpenDiscussion()
    document.getElementById(divId).classList.add('open')
    const currentChannel = this.channels.get(id)
    if (currentChannel.get('privacy') === 'direct_message') {
      document.getElementById('right-side').style.display = 'none'
    } else {
      document.getElementById('right-side').style.display = 'flex'
    }
    document.getElementById('center').style.display = 'flex'

    // center
    this.updateContextCenter(currentChannel)

    // right-side
    this.updateContextRightSide(currentChannel)

    // update HTML
    this.updateHTML('center')
    this.updateHTML('right-side')

    if (currentChannel.get('timeout_ids').some(el => el == this.userLoggedId) === true) {
      document.getElementById('textInput').disabled = true
      document.getElementById('textInput').value = 'You have been mute for a certain amount of time'
    }

    if (currentChannel.get('privacy') === 'direct_message' && this.context.status !== 'online') {
      document.getElementById('play-button').style.backgroundColor = '#C4C4C4'
      document.getElementById('play-button').style.cursor = 'auto'
    }

    // update post render
    this.updateDOM(e.currentTarget, currentChannel)
  },

  selectCheckbox: function (e) {
    const id = e.currentTarget.getAttribute('for')
    const checkbox = document.getElementById(id)
    if (checkbox.checked === true) { checkbox.checked = false } else { checkbox.checked = true }
  },

  openModalCreateChannel: function () {
    this.context.friends = JSON.parse(JSON.stringify(this.users))
    this.updateHTML('modalCreateChannel')
    document.getElementById('modalCreateChannel').style.display = 'flex'
  },

  modalClose: function () {
    const checkboxes = document.getElementsByClassName('checkbox')
    for (const el of checkboxes) {
      el.checked = false
    }
    document.getElementById('error-message').style.display = 'none'
    Array.prototype.forEach.call(document.getElementsByClassName('modal'),
      function (el) {
        el.style.display = 'none'
      })
  },

  getSelectedBoxes: function () {
    const checkboxes = document.getElementsByClassName('checkbox')
    const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked === true)
    return Array.from(selectedCboxes, x => x.value)
  },

  createChannel: function (e) {
    const participantsIds = this.getSelectedBoxes()
    const name = document.getElementById('channelName').value
    const newChannel = new ChatModel()
    const createChannel = async () => {
      try {
        const response = await newChannel.createChannel(name, participantsIds)
        this.myChannels.add(newChannel)
        this.channels.add(newChannel)
        this.modalClose()
        const myChannels = this.myChannels.slice().filter(el => el.get('privacy') !== 'direct_message')
        this.context.myChannels.push(JSON.parse(JSON.stringify(newChannel)))
        this.context.myChannels[this.context.myChannels.length - 1].admin = true
        this.updateHTML('myChannels')
        if (this.userLogged.get('admin') === true) {
          this.context.allChannels.push(JSON.parse(JSON.stringify(newChannel)))
          this.context.allChannels[this.context.allChannels.length - 1].admin = true
          this.updateHTML('all-channels')
        }
        this.closeOpenDiscussion()
        document.getElementById('channel' + newChannel.get('id')).classList.add('open')
        e.currentTarget = document.getElementById('channel' + newChannel.get('id'))
        // const socket = new MyWebSocket(newChannel.get('id'), 'ChatChannel', this)
        this.openChat(e)
      } catch (error) {
        document.getElementById('error-message').innerHTML = error.responseJSON.message
        document.getElementById('error-message').style.display = 'block'
      }
    }
    createChannel()
  },

  sendMessage: function (e) {
    if (e.keyCode === 13) {
      const chatId = e.currentTarget.getAttribute('for')
      const currentChannel = this.channels.get(chatId)
      const message = e.currentTarget.value
      const response = currentChannel.sendMessage(message)
    }
  },

  updateHTML: function (div) {
    const html = this.templateChat(this.context)
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById(div)
    currentDiv.innerHTML = found
  },

  modalSearchFriends: function (e) {
    const value = document.getElementById(e.currentTarget.getAttribute('id')).value
    const search = this.users.slice().filter(function (el) {
      if (el.get('nickname').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      if (el.get('anagram') !== undefined && el.get('anagram').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    const find = 'friends' + e.currentTarget.getAttribute('id')
    this.context.friends = JSON.parse(JSON.stringify(search))
    this.updateHTML(find)
  },

  inputModalSearchAllChannels: function (e) {
    const value = document.getElementById(e.currentTarget.getAttribute('id')).value
    const search = this.channels.slice().filter(function (el) {
      if ((el.get('privacy') === 'public' || el.get('privacy') === 'protected') &&
      el.get('name').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    this.context.channels = JSON.parse(JSON.stringify(search))
    this.updateHTML('searchAllChannel')
  },

  openModalCreateDM: function () {
    this.context.friends = JSON.parse(JSON.stringify(this.users))
    this.updateHTML('modalCreateDirectMessages')
    document.getElementById('modalCreateDirectMessages').style.display = 'flex'
  },

  closeOpenDiscussion: function () {
    Array.prototype.forEach.call(document.getElementsByClassName('open'),
      function (el) {
        el.classList.remove('open')
      })
  },

  createDMValidate: async function (e, id) {
    const newChannel = new ChatModel()
    const participantsIds = []
    participantsIds.push(Number(id))
    console.log(id)
    const createChannel = async () => {
      try {
        const response = await newChannel.createChannel(undefined, participantsIds, 'direct_message')
        this.myChannels.add(newChannel)
        this.channels.add(newChannel)
        this.context.DM.push(JSON.parse(JSON.stringify(newChannel)))
        const user = this.users.get(id)
        this.context.DM[this.context.DM.length - 1].image_url = user.get('image_url')
        this.context.DM[this.context.DM.length - 1].anagram = user.get('anagram')
        this.context.DM[this.context.DM.length - 1].nickname = user.get('nickname')
        this.context.DM[this.context.DM.length - 1].userId = user.get('id')
        this.updateHTML('DM')
        this.modalClose()
        this.closeOpenDiscussion()
        document.getElementById('DM' + newChannel.get('id')).classList.add('open')
        e.currentTarget = document.getElementById('DM' + newChannel.get('id'))
        // const socket = new MyWebSocket(newChannel.get('id'), 'ChatChannel', this)
        this.openChat(e)
        return newChannel
      } catch (error) {
        this.modalClose()
      }
    }
    const ret = createChannel()
    return ret
  },

  createDM: function (e) {
    const id = e.currentTarget.getAttribute('for')
    const DM = this.myChannels.slice().filter(el => el.get('privacy') === 'direct_message')
    let i = 0
    for (; i < DM.length; i++) {
      if (DM[i].get('participant_ids').find(el => el == id)) {
        this.modalClose()
        this.closeOpenDiscussion()
        document.getElementById('DM' + DM[i].get('id')).classList.add('open')
        e.currentTarget = document.getElementById('DM' + DM[i].get('id'))
        this.openChat(e)
        break
      }
    }
    if (i === DM.length) {
      this.createDMValidate(e, id)
    }
  },

  yesDeleteDefinitivelyChannel: function (e) {
    const currentChannel = this.channels.get(this.channelId)
    currentChannel.deleteDefinitivelyChannel()
    this.channels.remove(this.channelId)
    this.deleteChannelOfHTML(e)
    this.closeParams()
  },

  deleteDefinitivelyChannel: function () {
    document.getElementById('modalValidationDeleteDefinitivelyChannel').style.display = 'flex'
  },

  deleteChannelOfHTML: function (e) {
    const myChannels = this.myChannels.slice().filter(el => el.get('privacy') !== 'direct_message')
    const array = []
    for (let i = 0; i < myChannels.length; i++) {
      array.push(JSON.parse(JSON.stringify(myChannels[i])))
      array[i].admin = myChannels[i].get('admin_ids').find(el => el === this.userLogged.get('id'))
    }
    this.context.myChannels = JSON.parse(JSON.stringify(array))
    this.updateHTML('myChannels')
    document.getElementById('modalValidationDeleteChannel').style.display = 'none'
    document.getElementById('modalValidationDeleteChannel').setAttribute('for', '')
    if (this.myChannels.length > 0) {
      e.currentTarget = document.getElementsByClassName('clickable-discussions')[0]
      this.openChat(e)
    } else {
      document.getElementById('center').style.display = 'none'
      document.getElementById('right-side').style.display = 'none'
    }
  },

  deleteChannel: function (e) {
    const id = document.getElementById('modalValidationDeleteChannel').getAttribute('for')
    const leaveRoom = async () => {
      await this.myChannels.get(id).leaveRoom()
      this.myChannels.remove(id)
      this.deleteChannelOfHTML(e)
    }
    leaveRoom()
  },

  deleteChannelConfirmation: function (e) {
    e.stopPropagation()
    const id = e.currentTarget.getAttribute('for')
    if (this.myChannels.get(id).get('privacy') !== 'direct_message') {
      if (this.myChannels.get(id).get('admin_ids').find(el => el === this.userLogged.get('id'))) {
        document.getElementById('modalValidationDeleteChannel').style.display = 'flex'
        document.getElementById('modalValidationDeleteChannel').setAttribute('for', id)
      } else {
        this.myChannels.get(id).leaveRoom()
        this.myChannels.remove(id)
        const myChannels = this.myChannels.slice().filter(el => el.get('privacy') !== 'direct_message')
        this.context.myChannels = JSON.parse(JSON.stringify(myChannels))
        this.updateHTML('myChannels')
        if (this.myChannels.length > 0) {
          e.currentTarget = document.getElementsByClassName('clickable-discussions')[0]
          this.openChat(e)
        } else {
          document.getElementById('center').style.display = 'none'
          document.getElementById('right-side').style.display = 'none'
        }
      }
    }
  },

  openModalSearchChannel: function () {
    const channels = this.channels.slice().filter(function (el) {
      if (el.get('privacy') === 'public' || el.get('privacy') === 'protected') {
        return true
      }
      return false
    })
    this.context.channels = JSON.parse(JSON.stringify(channels))
    this.updateHTML('searchAllChannel')
    document.getElementById('modalSearchAllChannels').style.display = 'flex'
  },

  updateDOMSubsribeChannel: function (id, e) {
    this.modalClose()
    this.closeOpenDiscussion()
    document.getElementById('channel' + id).classList.add('open')
    e.currentTarget = document.getElementById('channel' + id)
    this.openChat(e)
  },

  subscribeChannelModel: function (e, id, password) {
    if (this.myChannels.find(el => el.id == id) === undefined) {
      const channel = this.channels.get(id)
      channel.subscribeChannel(password)
      this.myChannels.add(channel)
      this.context.myChannels.push(JSON.parse(JSON.stringify(channel)))
      this.updateHTML('myChannels')
    }
    this.updateDOMSubsribeChannel(id, e)
  },

  subscribeProtectedChannel: function (e) {
    const channelId = e.currentTarget.getAttribute('for')
    const password = document.getElementById('inputModalPassword' + channelId).value
    this.subscribeChannelModel(e, channelId, password)
  },

  subscribeChannel: function (e) {
    const id = e.currentTarget.getAttribute('for')
    if (this.myChannels.find(el => el.id == id) !== undefined) {
      this.updateDOMSubsribeChannel(id, e)
    } else if (this.channels.get(id).get('privacy') === 'protected') {
      document.getElementById('modalPassword' + id).style.display = 'flex'
    } else {
      this.subscribeChannelModel(e, id)
    }
  }
})
