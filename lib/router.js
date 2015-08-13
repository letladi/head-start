Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', 'landing');
Router.route('/login', {
  name: 'login',
  template: 'login'
});
Router.route('/register', {
  name: 'register',
  template: 'register'
});
Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard'
});
Router.route('/reset', {
  name: 'reset',
  template: 'reset'
});
Router.route('/reset-password', {
  name:'resetPassword',
  template: 'resetPassword'
});

OnBeforeActions = {
  loginRequired: function() {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      this.next();
    }
  }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['dashboard']
});