Template.contact.onRendered(function() {
  $('.container').addClass('contact');
});

Template.contact.onDestroyed(function() {
  $('.container').removeClass('contact');
});

Template.contact.events({
  'blur [name=name]': function(ev, tmpl) {
    if (tmpl.$(ev.target).val().trim() === "") {
      tmpl.$(ev.target).addClass('input-error');
    } else {
       tmpl.$(ev.target).removeClass('input-error');
    }
    return false;
  },
  'blur [name=email]': function(ev, tmpl) {
    if (validations.validEmail($(ev.target).val().trim())) {
      tmpl.$(ev.target).removeClass('input-error');
    } else {
      tmpl.$(ev.target).addClass('input-error'); 
    }
    return false;
  },
  'blur textarea': function(ev, tmpl) {
    if (tmpl.$(ev.target).val().trim() === "") {
      tmpl.$(ev.target).addClass('message-error');
    } else {
       tmpl.$(ev.target).removeClass('message-error');
    }
    return false;
  },
  'submit form': function(ev, tmpl) {
    ev.preventDefault();
    var name = $('[name=name]').val().trim(),
        email = $('[name=email]').val().trim(),
        message = $('textarea').val().trim();
    if (name && message && validations.validEmail(email)) {
      $('[name=submit]').val('Sending Message...').prop( 'disabled', true );
      Meteor.call('contactMessage', name, email, message, function(err, result) {
        $('[name=submit]').val('Send Message').prop( 'disabled', false );
        if (err) {
          toastr.error(err.reason);
        } else {
          toastr.success("Email Received. Thank you for getting in touch with us.");
        }
      });
      toastr.info('Sending Email...');
    } else {
      toastr.error('Form is invalid. Please try again.');
    }
  }
});

