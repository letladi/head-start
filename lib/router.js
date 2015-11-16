Router = FlowRouter;

publicRoute = FlowRouter.group({});
privateRoute = FlowRouter.group({
  triggersEnter: [ 
    // https://blog.tableflip.io/flow-router-some-useful-patterns/
    function checkLoggedIn() {  
      if ( !(Meteor.userId() || Meteor.loggingIn()) ) {
        Router.go('/login');
      }
    } 
  ]
});

FlowRouter.route('/', {
  name: 'landing',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'landing' });
  }
});
publicRoute.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'login' });
  }
});
publicRoute.route('/register', {
  name: 'register',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'register' });
  }
});

function isLoggedIn() {
  return !!(Meteor.users.findOne());
}
publicRoute.route('/user-terms', {
  name: 'user-terms',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'userTerms' });
  }
});
publicRoute.route('/forgot-password', {
  name: 'forgotPassword',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'forgotPassword' });
  }
});
publicRoute.route('/reset-password', {
  name:'resetPassword',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'resetPassword' });
  }
});


privateRoute.route('/dashboard', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'dashboard' })
  }
});
privateRoute.route('/uploads', {
  name: 'uploads',
  action: function() {
    BlazeLayout.render('layout', { top: 'header', main: 'uploads' })
  }
});
