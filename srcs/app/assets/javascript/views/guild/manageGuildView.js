import { Guild } from '../../models/guildModel.js'

export const ManageGuildView = Backbone.View.extend({
  events: {
    'click .createGuild': 'createGuild',
    'click .inviteMember': 'inviteMember',
    'click #kickMember': function (e) { this.kickMember(e) },
    'click .sendInvitation': 'sendInvitation',
    'click #promoteMember': function (e) { this.promoteMember(e) },
    'click #relegateMember': function (e) { this.relegateMember(e) },
    'click .updateGuildName': 'updateGuildName',
    'click .updateGuildAnagram': 'updateGuildAnagram',
    'click #leaveGuild': 'leaveGuild',
    'click #leaveGuildSideBar': 'leaveGuildSideBar',
    /* 'keyup #nonMemberToInvite': function () { this.nicknameSearch(this.nonMembersList, 'nonMemberToInvite', '#inviteMemberResult') },
    'keyup #memberToKick': function () { this.nicknameSearch(this.membersList, 'memberToKick', '#KickMemberResult') },
    'keyup #memberToPromote': function () { this.nicknameSearch(this.membersList, 'memberToPromote', '#promoteMemberResult') },
    'keyup #memberToRelegate': function () { this.nicknameSearch(this.officersList, 'memberToRelegate', '#relegateMemberResult') },
    'keyup #nonMemberToSendInvitation': function () { this.nicknameSearch(this.nonMembersList, 'nonMemberToSendInvitation', '#sendInvitationResult') }, */
    'mouseover .nicknameSearchElement': function (e) { this.outlineNickname(e) },
    'mouseout .nicknameSearchElement': function (e) { e.target.style.color = '' },
    'keyup #nonMemberToInvite': function (e) { this.inviteModalSearch(e) },
    'click .nicknameSearchElement': function (e) { this.clickNickname(e) },
    'click .manageGuildSideBarContentEl': function (e) { this.sideBar(e) },
    'click #inviteMemberModalButton': function (e) { this.modal(e) },
    'click .close': function (e) { this.closeModal(e) },
    'click .eachFriend': 'selectCheckbox'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.ownerBool = false
    this.officerBool = false
    this.router = this.model.get('router')
    this.socket = this.model.get('socket').get('obj')
    this.notifView = this.model.get('notifView').get('obj')
    this.socket.updateContext(this, this.notifView)
    this.load()
  },
  el: $('#app'),

  load: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.guilds.fetch()
        this.chooseView()
      } catch (e) {
        console.log(e)
        this.$el.html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  leaveGuildSideBar: function () {
    this.$el.find('#manageGuildContent').html(Handlebars.templates.leaveGuild(this.loadContext()))
  },

  sideBar: function (e) {
    if (e.target.textContent === 'Owner') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      document.getElementById('owner').classList.add('open')
      document.getElementById('officer').classList.remove('open')
    } else if (e.target.textContent === 'Officer') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      document.getElementById('officer').classList.add('open')
      document.getElementById('owner').classList.remove('open')
    }
  },

  chooseView: function () {
    if (this.users.get(this.userId).get('guild_id') === undefined ||
    this.users.get(this.userId).get('guild_id') === null) {
      this.createGuildView()
    } else {
      this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
      this.manageGuildView()
    }
  },

  createGuildView: function () {
    console.log('create your guild')
    this.$el.html(Handlebars.templates.createGuild({}))
  },

  createGuild: function () {
    const name = document.getElementById('guildName').value
    const anagram = document.getElementById('guildAnagram').value
    if (name == '' || anagram == '') {
      this.emptyError(name, anagram)
    } else {
      const guild = new Guild()
      const createAGuild = async () => {
        try {
	        const response = await guild.create(name, anagram)
          // this.users.fetch() // mettre a jour juste coté front
          // this.guilds.fetch()
          /* this.users.get(this.userId).set({ guild_id: response.id })
          this.guilds.add(response)
          console.log(response) */
          await this.guilds.fetch() && await this.users.fetch()
          this.chooseView()
          // this.preload()
        } catch (error) {
          this.$el.html(Handlebars.templates.createGuild({}))
          this.renderError(error, '#errorField', Handlebars.templates.guildError)
        }
      }
      createAGuild()
    }
  },

  getPermissionsBool () {
    this.ownerBool = (parseInt(this.userId) === this.guild.get('owner_id')[0])
    this.officerBool = (this.guild.get('officer_ids').includes(parseInt(this.userId)) || this.ownerBool)
    console.log(this.ownerBool)
    console.log(this.officerBool)
  },

  manageGuildView: function () {
    /* this.ownerBool = (this.id == this.guilds.get('owner_id'))
    this.officerBool = (this.guild.get('officer_ids').includes(this.id) || this.id === this.guilds.get('owner_id')) */
    this.getPermissionsBool()
    this.$el.html(Handlebars.templates.manageGuild({ owner: this.ownerBool, officer: this.officerBool }))
    this.$el.find('#guildManageIntro').html(Handlebars.templates.guildManageIntro(JSON.parse(JSON.stringify(this.guild))))
    if (this.ownerBool) {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      document.getElementById('owner').classList.add('open')
    } else if (this.officerBool) {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      document.getElementById('officer').classList.add('open')
    } else {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.leaveGuild(this.loadContext()))
    }
  },

  loadContext: function () {
    const context = { guild: JSON.parse(JSON.stringify(this.guild)), officers: Array(), members: Array(), ownerBool: this.ownerBool, officerBool: this.officerBool }
    this.list()
    if (this.ownerBool) {
      context.officers = this.officersList
      context.members = this.membersList
    } else if (this.officerBool) {
      context.members = this.membersList
    }
    return context
  },

  leaveGuild: function () { // a travailler
    const leaveGuild = async () => {
      try {
        const response = await this.createRequest('/members/' + this.userId, 'DELETE')
        this.users.get(this.userId).set({ guild_id: null })
        this.$el.html('<p>You successfully leaved the guild</p>')
        this.ownerBool = false
        this.officerBool = false
        console.log('ici')
      } catch (e) {
        console.log(e)
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      } finally {
      }
    }
    leaveGuild()
  },

  getSelectedBoxes: function () {
    const checkboxes = document.getElementsByClassName('checkbox')
    const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked === true)
    return Array.from(selectedCboxes, x => x.value)
  },

  inviteMember: function (e) {
    const inviteMember = async () => {
      try {
        const ids = this.getSelectedBoxes()
        for (let i = 0; i < ids.length; i++) {
          // const response = await this.createRequest('/members' + '/' + ids[i], 'POST')
          const response = await this.guild.sendInvitation(ids[i])
          this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
        }
        this.closeModal(null)
        await this.users.fetch() && await this.guilds.fetch()
        this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      }
    }
    inviteMember()
  },

  sendInvitation: function () {
    const nickname = document.getElementById('nonMemberToInvite').value
    let id
    if (this.users.findWhere({ nickname: nickname })) {
      id = this.users.findWhere({ nickname: nickname }).id
    } else {
      console.log('error') // a gerer
      return
    }
    const inviteMember = async () => {
      try {
        const response = await this.guild.sendInvitation(id)
        console.log('invitation successfully sent')
        this.closeModal(null)
        await this.users.fetch() && await this.guilds.fetch()
        this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
        this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      }
    }
    inviteMember()
  },

  kickMember: function (e) {
    const id = e.target.value
    const kickMember = async () => {
      try {
        const response = await this.createRequest('/members/' + id, 'DELETE')
        await this.users.fetch() && await this.guilds.fetch()
        this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
        this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      } catch (e) {
        console.log(e)
      } finally {
      }
    }
    kickMember()
  },

  promoteMember: function (e) {
    // const nickname = document.getElementById('memberToPromote').value
    const id = e.target.value
    const promoteMember = async () => {
      const officers = this.guild.get('officer_ids')
      try {
        const response = await this.createRequest('/officers/' + id, 'POST')
        await this.users.fetch() && await this.guilds.fetch()
        this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
        this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        console.log(e)
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      }
    }
    promoteMember()
  },

  relegateMember: function (e) {
    // const nickname = document.getElementById('memberToRelegate').value
    const id = e.target.value
    const relegateMember = async () => {
      try {
        const officers = this.guild.get('officer_ids')
        const response = await this.createRequest('/officers/' + id, 'DELETE')
        await this.users.fetch() && await this.guilds.fetch()
        this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
        this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      }
    }
    relegateMember()
  },

  updateGuildName: function () {
    const name = document.getElementById('guildName').value
    const patchAGuild = async () => {
      try {
        const response = await this.guild.save({ name: name }, { patch: true })
        this.guild.set({ name: name })
        this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        console.log(e)
        if (e.status != 200) { this.renderError(e, '#nameError', Handlebars.templates.guildError) }
      }
    }
    patchAGuild()
  },

  updateGuildAnagram: function () {
    const anagram = document.getElementById('guildAnagram').value
    const patchAGuild = async () => {
      try {
        const response = await this.guild.save({ anagram: anagram }, { patch: true })
        this.guild.set({ anagram: anagram })
        this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        if (e.status != 200) { this.renderError(e, '#anagramError', Handlebars.templates.guildError) }
      }
    }
    patchAGuild()
  },

  nicknameSearch: function (list, input, target) {
    const value = document.getElementById(input).value
    this.search = list.slice().filter(el => el.nickname.toLowerCase().includes(value.toLowerCase()) === true)
    const context = { search: JSON.parse(JSON.stringify(this.search)), input: input }
    this.$el.find(target).html(Handlebars.templates.nicknameSearchResult(context))
  },

  outlineNickname: function (e) {
    e.target.style.color = 'purple'
  },

  clickNickname: function (e) {
    const target = e.target.parentElement.id
    this.$el.find('#' + target)[0].value = e.target.innerHTML
  },

  render: function () {
    return this
  },

  emptyError: function (name, anagram) {
    if (!name.length) { this.$el.find('#nameError').html("Error: name can't be empty") }
    if (!anagram.length) { this.$el.find('#anagramError').html("Error: anagram can't be empty") }
  },

  renderError: function (error, target, template) {
    this.$el.find(target).html(template({
      status: error.status,
      statusText: error.statusText,
      body: JSON.stringify(error.responseJSON)
    }))
  },

  list: function () {
    if (!this.ownerBool && !this.officerBool) { return }
    this.nonMembersList = []
    this.membersList = []
    this.officersList = []
    for (let i = 0; i < this.users.length; i++) {
      if (this.officerBool && (this.users.at(i).get('guild_id') === undefined ||
          this.users.at(i).get('guild_id') === null)) {
        this.nonMembersList.push(JSON.parse(JSON.stringify(this.users.at(i))))
      }
    }
    for (let i = 0; i < this.guild.get('member_ids').length; i++) {
      if (this.users.get(this.guild.get('member_ids')[i]).get('id') != this.guild.get('owner_id') &&
          !this.guild.get('officer_ids').includes(this.guild.get('member_ids')[i])) {
        this.membersList.push(JSON.parse(JSON.stringify(this.users.get(this.users.get(this.guild.get('member_ids')[i])))))
      }
    }
    for (let i = 0; i < this.guild.get('officer_ids').length; i++) {
      this.officersList.push(JSON.parse(JSON.stringify(this.users.get(this.users.get(this.guild.get('officer_ids')[i])))))
    }
  },

  updateLists: function (l, nickname, id) {
    if (l[0].length > 0) {
      l[0].push({
        nickname: nickname,
        id: id
      })
    }
    if (l[1].length > 0) {
      for (let i = 0; i < l[1].length; i++) {
        if (l[1][i].id === id) {
          l[1].splice(i, 1)
          break
        }
      }
    }
  },

  modal: function (e) {
    const value = document.getElementById('nonMemberToInvite').value
    this.search = this.nonMembersList.slice().filter(el => el.nickname.toLowerCase().includes(value.toLowerCase()) === true)
    const context = {}
    context.member = []
    context.member = JSON.parse(JSON.stringify(this.search))
    const modal = document.getElementById('inviteMemberModal')
    this.updateHTML('inviteMemberModal', Handlebars.templates.officerPannel(context))
    modal.style.display = 'flex'
  },

  selectCheckbox: function (e) {
    const id = e.currentTarget.getAttribute('for')
    const checkbox = document.getElementById(id)
    if (checkbox.checked === true) { checkbox.checked = false } else { checkbox.checked = true }
  },

  updateHTML: function (div, template) {
    const html = template
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById(div)
    currentDiv.innerHTML = found
  },

  inviteModalSearch: function (e) {
    const value = document.getElementById('nonMemberToInvite').value
    this.search = this.nonMembersList.slice().filter(el => el.nickname.toLowerCase().includes(value.toLowerCase()) === true)
    const context = {}
    context.member = []
    context.member = JSON.parse(JSON.stringify(this.search))
    const modal = document.getElementById('inviteMemberModal')
    this.updateHTML('inviteMemberResult', Handlebars.templates.officerPannel(context))
  },

  closeModal: function (e) {
    const modal = document.getElementById('inviteMemberModal')
    modal.style.display = 'none'
  },

  createRequest: function (path, method, data) {
    return $.ajax({
      url: '/api/guilds/' + this.guild.id + path,
      method: method,
      data: data
    })
  }
})
