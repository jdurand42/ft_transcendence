export const LeaderboardView = Backbone.View.extend({
  initialize: function () {
    this.users = this.model.get('users').get('obj')
    this.guilds = this.model.get('guilds').get('obj')
    this.template = Handlebars.templates.leaderboard
    this.load()
  },
  el: $('#app'),
  load: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        await this.guilds.fetch()
        this.render()
      } catch (e) {
        console.log(e)
        this.$el.html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },
  render: function () {
    const row = []
    for (let i = 1; i <= this.guilds.length; i++) {
      // Trier guilde par score ici
      row.push(JSON.parse(JSON.stringify(this.guilds.get(i))))
    }

    // trier le tableau ici par score
    for (let i = 1; i <= row.length; i++) {
      // Trier guilde par score ici
      row[i - 1].position = i
    }
    const context = { row: row }
    console.log(row)
    this.$el.html(this.template(context))
    return this
  }
})

// A list of users ordered by rank
