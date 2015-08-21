Template.register.events({
  'keyup [name=username]': function(ev) {
    form.validationClasses('[name=username]', validations.usernameAvailable, [form.username()]);
  },
  'keyup [name=email]': function(ev) {
    form.validationClasses('[name=email]', validations.validEmail, [form.email()]);
  },
  'keyup [name=password]': function(ev) {
    form.validationClasses('[name=password]', validations.validLength, [form.password()]);
  },
  'submit .register': function(ev) {
    ev.preventDefault();
    
    var valid = form.isValid(validations.usernameAvailable(form.username()), 
                             validations.validEmail(form.email()), validations.validLength(form.password()));
    
    if (!valid) {
      toastr.error('The form is invalid, please try again.');
    } else {
      $('[name=register]').val('Registering...').prop( "disabled", true );
      Accounts.createUser({
        username: form.username(),
        email: form.email(),
        password: form.password()
      }, function(err) {
        if (err) {
          $('[name=register]').val('Register').prop( "disabled", false );
          toastr.error(err.reason);
        } else {
          Meteor.call('verifyUserEmail');
          Router.go('dashboard');
        }
      }); 
    }
  }
});

Accounts.onEmailVerificationLink(function(token, done) {
  done();
  Accounts.verifyEmail(token, function(err) {
    if (err) {
      toastr.error(err.reason);
    }
  }); 
  Router.go('dashboard');
});