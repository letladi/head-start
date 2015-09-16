Template.header.events({
  'click .btn': function(ev) {
    if ($('.nav').hasClass('hide-nav')) {
      $('.nav').fadeIn(300, function() {
        $('.nav').toggleClass('hide-nav');
      }); 
    } else {
      $('.nav').fadeOut(300, function() {
        $('.nav').toggleClass('hide-nav');
      });
    };
    var btnContainerClass = $(ev.target).attr('class');
   // btnContainerClass = btnContainerClass.split(' ')[0];
    //console.log(btnContainerClass);
    $('.menu-btn .btn').toggleClass('fa-bars').toggleClass('fa-times');
  },
  'click .js-show-sub-menu': function(ev, tmpl) {
    tmpl.$(ev.target)
      .removeClass('fa-angle-down')
      .addClass('fa-angle-up')
      .removeClass('js-show-sub-menu')
      .addClass('js-hide-sub-menu')
      .next()
      .fadeIn(300);
  },
  'click .js-hide-sub-menu': function(ev, tmpl) {
    tmpl.$(ev.target)
      .addClass('fa-angle-down')
      .removeClass('fa-angle-up')
      .addClass('js-show-sub-menu')
      .removeClass('js-hide-sub-menu')
      .next()
      .fadeOut(300);
  },
  'click .logout': function() {
    Meteor.logout();
    Router.go('login');
    $('.container').removeClass('dashboard');
    return false;
  }
});

Template.siteInfo.events({
  'click': function(ev) {
    console.log(ev.target);
  }
});