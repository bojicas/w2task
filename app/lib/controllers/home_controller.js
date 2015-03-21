HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    this.subscribe('tasks').wait();
  },

  action: function() {
    this.render('Home');
  }
});
