Template.header.events({
  'click .logout': function() {
    Meteor.logout();
    Router.go('login');
    return false;
  }
});