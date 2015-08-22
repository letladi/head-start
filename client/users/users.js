Template.userTerms.onRendered(function() {
  $('.container').addClass('user-terms');
});

Template.userTerms.onDestroyed(function() {
  $('.container').removeClass('user-terms');
});