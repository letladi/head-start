Router = FlowRouter;

Router.route('/', 'landing');
Router.route('/login', {
  name: 'login',
  template: 'login'
});
Router.route('/register', {
  name: 'register',
  template: 'register'
});

Accounts.onLogin(function() {
  Router.go('dashboard');
});

Tracker.autorun(function() {
  if (!Meteor.userId()) {
    Router.go('home');
  }
});

Router.route('/user-terms', {
  name: 'user-terms',
  template: 'userTerms'
});
Router.route('/contact', {
  name: 'contact',
  template: 'contact'
});
Router.route('/forgot-password', {
  name: 'forgotPassword',
  template: 'forgotPassword'
});
Router.route('/reset-password', {
  name:'resetPassword',
  template: 'resetPassword'
});


Router.route('/dashboard', {
  name: 'dashboard',
  triggersEnter: [checkLoggedIn],
  action: function() {
    //BlazeLayout.render('layout', { template: 'dashboard' })
  }
});
Router.route('/uploads', {
  name: 'uploads',
  triggersEnter: [checkLoggedIn], 
  action: function() {
    //BlazeLayout.render('layout', { template: 'uploads })
  }
})
// https://blog.tableflip.io/flow-router-some-useful-patterns/
function checkLoggedIn (_, redirect) {  
  if (!Meteor.userId()) {
    redirect('/login')
  }
}

function redirectIfLoggedIn (_, redirect) {  
  if (Meteor.userId()) {
    redirect('/dashboard')
  }
}