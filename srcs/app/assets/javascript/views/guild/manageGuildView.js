/* eslint-disable eqeqeq */
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
    'mouseover .nicknameSearchElement': function (e) { this.outlineNickname(e) },
    'mouseout .nicknameSearchElement': function (e) { e.target.style.color = '' },
    'keyup #nonMemberToInvite': function (e) { this.inviteModalSearch(e) },
    'click .nicknameSearchElement': function (e) { this.clickNickname(e) },
    'click .manageGuildSideBarContentEl': function (e) { this.sideBar(e) },
    'click #inviteMemberModalButton': function (e) { this.modal(e) },
    'click .close': function (e) { this.closeModal(e) },
    'click .eachFriend': 'selectCheckbox'
  },
  initialize: function (options) {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.ownerBool = false
    this.officerBool = false
    this.router = this.model.get('router')
    this.id = options.id
    this.guild = undefined
    this.adminBool = false
    this.socket = this.model.get('socket').get('obj')
    this.notifView = this.model.get('notifView').get('obj')
    this.socket.updateContext(this, this.notifView)
    this.load()
  },
  el: $('#app'),

  load: function () {
    const load = async () => {
      try {
        const response1 = this.users.fetch()
        const response2 = this.guilds.fetch()
        await response1 && await response2
        this.chooseView()
      } catch (e) {
        this.$el.html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  leaveGuildSideBar: function () {
    this.$el.find('#manageGuildContent').html(Handlebars.templates.leaveGuild(this.loadContext()))
  },

  sideBar: function (e) {
    if (e.target.textContent === 'Edit guild') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      document.getElementById('owner').classList.add('open')
      try {
        document.getElementById('officer').classList.remove('open')
      } catch (e) {}
    } else if (e.target.textContent === 'Manage Members') {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      document.getElementById('officer').classList.add('open')
      try {
        document.getElementById('owner').classList.remove('open')
      } catch (e) {}
    }
  },

  chooseView: function () {
    if (this.id !== undefined && this.id !== null &&
        !isNaN(this.id) && this.users.get(this.userId).get('admin')) {
      try {
        this.adminBool = true
        this.guild = this.guilds.get(this.id)
        if (this.guild === undefined) {
          throw 'This guild doesnt exists'
        }
      } catch (e) {
        this.guild = undefined
        this.adminBool = false
      }
    }
    if (this.adminBool) {
      // this.guild = this.guilds.get(this.id)
      this.manageAdminView()
    } else if (this.users.get(this.userId).get('guild_id') === undefined ||
    this.users.get(this.userId).get('guild_id') === null) {
      this.createGuildView()
    } else {
      this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
      this.manageGuildView()
    }
  },

  createGuildView: function () {
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
          // await this.guilds.fetch() && await this.users.fetch()
          // await guild.create(name, anagram)
          const response1 = this.guilds.fetch()
          const response2 = this.users.fetch()
          await response1 && await response2
          this.chooseView()
        } catch (e) {
          this.renderError(e)
          // this.renderError(error, '#errorField', Handlebars.templates.guildError)
        }
      }
      createAGuild()
    }
  },

  getPermissionsBool: function () {
    this.ownerBool = (parseInt(this.userId) === this.guild.get('owner_id')[0])
    this.officerBool = (this.guild.get('officer_ids').includes(parseInt(this.userId)) || this.ownerBool)
    this.memberBool = false
  },

  manageGuildView: function () {
    /* this.ownerBool = (this.id == this.guilds.get('owner_id'))
    this.officerBool = (this.guild.get('officer_ids').includes(this.id) || this.id === this.guilds.get('owner_id')) */
    this.getPermissionsBool()
    this.$el.html(Handlebars.templates.manageGuild({ owner: this.ownerBool, officer: this.officerBool, member: true }))
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

  manageAdminView: function () {
    this.ownerBool = true
    this.officerBool = true
    this.$el.html(Handlebars.templates.manageGuild({ owner: false, officer: false, admin: this.adminBool }))
    this.$el.find('#guildManageIntro').html(Handlebars.templates.guildManageIntro(JSON.parse(JSON.stringify(this.guild))))
    this.$el.find('#manageGuildContent').html(Handlebars.templates.adminPannel(this.loadContext()))
  },

  loadContext: function () {
    const context = { guild: JSON.parse(JSON.stringify(this.guild)), officers: Array(), members: Array(), ownerBool: this.ownerBool, officerBool: this.officerBool, adminBool: this.adminBool }
    this.list()
    if (this.ownerBool) {
      context.officers = this.officersList
      context.members = this.membersList
    } else if (this.officerBool) {
      context.members = this.membersList
      context.officers = this.officersList
    }
    if (this.adminBool) {
      context.owner = JSON.parse(JSON.stringify(this.users.get(this.guild.get('owner_id')[0])))
    }
    return context
  },

  leaveGuild: function () { // a travailler
    const leaveGuild = async () => {
      try {
        const response = await this.createRequest('/members/' + this.userId, 'DELETE')
        this.users.get(this.userId).set({ guild_id: null })
        this.ownerBool = false
        this.officerBool = false
        window.location.href = '#profile/'
      } catch (e) {
        this.renderError(e)
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
        }
        this.closeModal(null)
        await this.users.fetch() && await this.guilds.fetch()
        this.getGuild()
        this.getTemplate(Handlebars.templates.officerPannel(this.loadContext()))
        // this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
        this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e)
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
        this.getGuild()
        this.getTemplate(Handlebars.templates.officerPannel(this.loadContext()))
        // this.$el.find('#manageGuildContent').html(Handlebars.templates.officerPannel(this.loadContext()))
      } catch (e) {
        if (this.adminBool) {
          window.location.href = '#guilds'
        }
        this.renderError(e)
        if (parseInt(this.userId) === parseInt(id)) {
          window.location.href = '#profile/'
        }
        // cons}ole.log(e)
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
        this.getGuild()
        /* if (this.ownerBool) {
        	this.getTemplate(Handlebars.templates.ownerPannel(this.loadContext()))
        } else { */
        this.getTemplate(Handlebars.templates.officerPannel(this.loadContext()))
        // }
      } catch (e) {
        this.renderError(e)
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
        this.getGuild()
        /* if (this.ownerBool) {
        	this.getTemplate(Handlebars.templates.ownerPannel(this.loadContext()))
        } else { */
        this.getTemplate(Handlebars.templates.officerPannel(this.loadContext()))
        // }
        // this.$el.find('#manageGuildContent').html(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e)
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
        this.getTemplate(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e)
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
        this.getTemplate(Handlebars.templates.ownerPannel(this.loadContext()))
      } catch (e) {
        this.renderError(e)
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
    if (!name.length) { this.$el.find('#manageGuildErrorDiv').html("Error: name can't be empty") }
    if (!anagram.length) { this.$el.find('#manageGuildErrorDiv').html("Error: anagram can't be empty") }
  },

  renderError: function (e) {
    if (e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0]) {
      this.$el.find('#manageGuildErrorDiv').html('Error: ' + e.responseJSON.errors[0])
    } else if (e.responseJSON && e.responseJSON.message) {
      this.$el.find('#manageGuildErrorDiv').html('Error: ' + e.responseJSON.message)
    } else if (e.responseJSON && e.responseJSON.error) {
      this.$el.find('#manageGuildErrorDiv').html('Error: ' + e.responseJSON.error)
    }
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
  },

  getGuild: function () {
    if (this.adminBool) {
      this.guild = this.guilds.get(this.id)
    } else {
      this.guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
    }
  },

  getTemplate: function (template) {
    if (this.adminBool) {
      this.$el.find('#manageGuildContent').html(Handlebars.templates.adminPannel(this.loadContext()))
    } else {
      this.$el.find('#manageGuildContent').html(template)
    }
  }
})
