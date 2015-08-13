Template.register.events({
  'keyup [name=username]': function(ev) {
    validationClasses('[name=username]', usernameAvailable, [username()]);
  },
  'keyup [name=email]': function(ev) {
    validationClasses('[name=email]', validEmail, [email()]);
  },
  'keyup [name=password]': function(ev) {
    validationClasses('[name=password]', validLength, [password()]);
  },
  'submit .register': function(ev) {
    ev.preventDefault();
    
    var valid = formValid(usernameAvailable(username()), validEmail(email()), validLength(password()));
    if (!valid) {
      toastr.error('The form is invalid, please try again.');
    } else {
      $('[name=register]').val('Registering...').attr('disabled', 'true');
      Accounts.createUser({
        username: username(),
        email: email(),
        password: password()
      }, function(err) {
        if (err) {
          $('[name=register]').val('Register').removeAttr('disabled');
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
  Router.go('dashboard');
});