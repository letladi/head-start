Template.header.events({
  'click .logout': ()=> {
    Meteor.logout();
    Router.go('login');
    return false;
  }
});

Template.header.onRendered(()=> {
	$('.button-collapse').sideNav();
});