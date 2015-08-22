Template.dashboard.onRendered(function() {
  $('.container').addClass('dashboard');
});

Template.dashboard.onDestroyed(function() {
  $('.container').removeClass('dashboard');
});