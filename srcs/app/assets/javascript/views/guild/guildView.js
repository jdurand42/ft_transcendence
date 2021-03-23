export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers'
  },
  el: $('#app'),
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.userId = this.model.get('userLoggedId')
    console.log(this.id)
    // a refaire
    // console.log(this.id)
    this.$el.html(Handlebars.templates.guild({}))
    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar({}))
    this.loadCurrentWar()
  },

  loadCurrentWar: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        if (this.id === null || this.id === undefined) {
          console.log(this.userId)
	        this.id = this.users.get(this.userId).get('guild_id')
          console.log(this.id)
        }
	        if (this.id === null || this.id === undefined) {
          this.$el.find('#guildContent').html('<p>It seems you aren\'t member of a guild</p>')
          return
	      }
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.renderPannel()
        this.currentWar()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadLastWars: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.renderPannel()
        this.lastWars()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadMembers: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch() &&
        this.renderPannel()
        this.members()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  currentWar: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.find('#guildcontent').html(Handlebars.templates.currentWar(context))
    return this
  },

  lastWars: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.find('#guildcontent').html(Handlebars.templates.lastWars(context))

    return this
  },

  members: function () {
    const members = []
    const officers = []

    for (let i = 1; i <= this.users.length; i++) {
      if (this.users.get(i).get('guild_id') == this.id &&
			this.users.get(i).get('id') !== this.guilds.get(this.id).get('owner_id') &&
			this.guilds.get(this.id).get('officer_ids').includes(this.users.get(i).get('id')) === false &&
			this.guilds.get(this.id).get('owner_id') != this.users.get(i).get('id')) {
        members.push(JSON.parse(JSON.stringify(this.users.get(i))))
      }
    }

    for (let i = 0; i < this.guilds.get(this.id).get('officer_ids').length; i++) {
      officers.push(JSON.parse(JSON.stringify(this.users.get(this.guilds.get(this.id).get('officer_ids')[i]))))
    }
    const context = {
      name: this.guilds.get(this.id).get('name'),
      id: this.id,
      anagram: this.guilds.get(this.id).get('anagram'),
      owner_id: this.guilds.get(this.id).get('owner_id'),
      owner_nickname: this.users.get(this.guilds.get(this.id).get('owner_id')).get('nickname'),
      members: members,
      officers: officers,
      membersNumber: members.length + officers.length + 1
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.guildMembers(context))
    return this
  },

  renderPannel: function () {
    this.$el.find('#guildPannel').html(Handlebars.templates.guildPannel({}))
  }
})
