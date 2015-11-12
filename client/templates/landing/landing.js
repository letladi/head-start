Template.landing.onRendered(function() {
  // blink cursor on landing page - a better approach would be keyframes
  Meteor.setInterval(function() {
    if($('.console-cursor').css('visibility') === 'hidden') {
      $('.console-cursor').css('visibility', 'visible');
    } else {
      $('.console-cursor').css('visibility', 'hidden');
    }
  }, 500);
  
});