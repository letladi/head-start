BlazeLayout.setRoot('body');

Template.layout.events({
  'click a[href*=#]:not([href=#])': function(ev) {
    if (!$(ev.target).attr('href')) return;
    lib.goToSection(ev.target);
  },
  'click .js-show-details': function(ev, tmpl) {
    $(ev.target).next().fadeIn(500, function() {
      $(ev.target)
        .text('Hide Details')
        .removeClass('js-show-details')
        .addClass('js-hide-details');
    });
  },
  'click .js-hide-details': function(ev, tmpl) {
    $(ev.target).next().fadeOut(500, function() {
      $(ev.target)
        .text('Show Details')
        .removeClass('js-hide-details')
        .addClass('js-show-details');
    });
  }
});