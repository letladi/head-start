Template.login.events({
  'keyup [name=email]': function(ev) {
    validationClasses('[name=email]', validEmail, [email()]);
  },
  'keyup [name=password]': function(ev) {
    validationClasses('[name=password]', validLength, [password()]);
  },
  'submit .login': function(ev) {
    ev.preventDefault();
    
    var valid = formValid(validEmail(email()), validLength(password()));
    if (!valid)  {
      toastr.error('The Form is invalid. Please try again');
      return false;
    } else {
      $('[name=login]').val('Logging In...').attr('disabled', 'true');
      Meteor.loginWithPassword(email(), password(), 
        function(err) {
          if (err) {
            $('[name=login]').val('Login').removeAttr('disabled');
            toastr.error(err.reason);
          } else {
            Router.go('dashboard');
            toastr.success('Welcome Back');
          }
      });
    }
  }
}); 