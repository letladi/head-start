Template.header.events({
  'click .logout': function() {
    Meteor.logout();
    Router.go('login');
    $('.container').removeClass('dashboard');
    return false;
  }
});