export const HeaderView = Backbone.View.extend({
  events: {
    'click .btn': 'target_url'
  },
  initialize: function () {
  },
  el: $('#header'),
  render: function (target) {
    this.templateTopNav = Handlebars.templates.topnav
    const array = {}

    if (target === undefined) { target = '#home' }
    array[target.substring(1)] = true
    if (target === '#chat') {
      array.chatIcon = './icons/active_chat.svg'
    } else {
      array.chatIcon = './icons/chat.svg'
    }
    array.active = 'active'
    array.user = this.model.get('nickname')
    array.admin = this.model.get('admin')
    array.profile_pic = this.model.get('image_url')
    array.id = this.model.get('id')
    const context = JSON.parse(JSON.stringify(array))
    const templateDataTopNav = this.templateTopNav(context)
    this.$el.html(templateDataTopNav)
    return this
  },

  target_url: function (e) {
    const target = $(e.currentTarget).attr('href')
    this.render(target)
  }
})
