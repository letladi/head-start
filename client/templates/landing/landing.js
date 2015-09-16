Template.landing.onRendered(function() {
  
  $('.container').addClass('landing');
  
  // blink cursor on landing page - a better approach would be keyframes
  Meteor.setInterval(function() {
    if($('.console-cursor').css('visibility') === 'hidden') {
      $('.console-cursor').css('visibility', 'visible');
    } else {
      $('.console-cursor').css('visibility', 'hidden');
    }
  }, 500);
  
});

Template.landing.onDestroyed(function() {
  $('.container').removeClass('landing');
});
Template.landing.events({
  'click .menu-btn': function(ev) {
    if ($('.nav').hasClass('hide-nav')) {
      $('.nav').fadeIn(600, function() {
        $('.nav').toggleClass('hide-nav');
      }); 
    } else {
      $('.nav').fadeOut(600, function() {
        $('.nav').toggleClass('hide-nav');
      });
    };
    var btnContainerClass = $(ev.target).attr('class');
   // btnContainerClass = btnContainerClass.split(' ')[0];
    //console.log(btnContainerClass);
    $('.menu-btn .btn').toggleClass('fa-bars').toggleClass('fa-times');
  },
  'click a[href*=#]:not([href=#])': function(ev) {
    if (!$(ev.target).attr('href')) return;
    goToSection(ev.target);
  },
  /* this is a hack, An extra event handler for scrolling when fa-angle-down is clicked, for some r   * eason it wasn't working properly, i.e by giving the right ev.target
  */
  'click .see-sections': function(ev) { 
    var parent = $(ev.target).parents()[0];
    if ($(parent).attr('href')) goToSection(parent);
  }
});

function goToSection(sectionLinkElement) {
  if (location.pathname.replace(/^\//,'') == sectionLinkElement.pathname.replace(/^\//,'') && 
        location.hostname == sectionLinkElement.hostname) {
      var target = $(sectionLinkElement.hash);
      target = target.length ? target : $('[name=' + sectionLinkElement.target.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
      }
    }
}