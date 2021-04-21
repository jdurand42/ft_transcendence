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
    'click .close': function (e) { this.closeModal(e) }
  },
  el: $('#app'),
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.ownerBool = false
    this.officerBool = false
    console.log(this.model.get('userLoggedId'))
    this.router = this.model.get('router')
    this.load()
  },

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

  sideBar: function (e) {
    if (e.target.textContent === 'Owner') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
    } else if (e.target.textContent === 'Officer') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
    } else if (e.target.textContent === 'Leave Guild') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.leaveGuild(this.loadContext()))
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
    } else if (this.officerBool) {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
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

  inviteMember: function () {
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
        const response = await this.createRequest('/members' + '/' + id, 'POST')
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

  sendInvitation: function () {
    const nickname = document.getElementById('nonMemberToSendInvitation').value
    let id
    if (this.users.findWhere({ nickname: nickname })) {
    	id = this.users.findWhere({ nickname: nickname }).id
    } else {
      console.log('error') // a gerer
      return
    }
    const inviteMember = async () => {
      try {
        const response = await this.createRequest('/invitations/', 'POST', { user_id: id })
        this.$el.find('#guildGlobalError').html('<p>Invitation successfully sent</p>')
      } catch (e) {
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
        if (e.status == 200) {
          /* this.updateLists([this.membersList, this.nonMembersList], nickname, id)
          this.users.get(id).set({ guild_id: this.guild.id }) */
        }
      } finally {
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
        console.log(error)
        this.renderError(error, '#guildGlobalError', Handlebars.templates.guildError)
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
    console.log(value)
    /* if (!value.length) {
      this.$el.find(target).html(Handlebars.templates.nicknameSearchResult({}))
      return
    } */
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
    this.nonMembersList = Array()
    this.membersList = Array()
    this.officersList = Array()
    for (let i = 1; i <= this.users.length; i++) {
      if (this.officerBool && this.users.get(i).get('guild_id') == undefined) {
        this.nonMembersList.push(JSON.parse(JSON.stringify(this.users.get(i))))
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
      console.log(1)
      l[0].push({
        nickname: nickname,
        id: id
	 })
    }
	 if (l[1].length > 0) {
		 console.log(2)
	 for (let i = 0; i < l[1].length; i++) {
        if (l[1][i].id === id) {
          l[1].splice(i, 1)
          break
        }
      }
    }
  },

  modal: function (e) {
    const modal = document.getElementById('inviteMemberModal')
    modal.style.display = 'block'
    this.inviteModalSearch(e)
    // this.nicknameSearch(this.nonMembersList, 'nonMemberToSendInvitation', '#inviteMemberResult')
  },

  inviteModalSearch: function (e) {
    const value = document.getElementById('nonMemberToInvite').value
    console.log(value)
    this.search = this.nonMembersList.slice().filter(el => el.nickname.toLowerCase().includes(value.toLowerCase()) === true)
    const context = { search: JSON.parse(JSON.stringify(this.search)), input: 'nonMemberToInvite' }
    this.$el.find('#inviteMemberResult').html(Handlebars.templates.nicknameSearchResult(context))
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
