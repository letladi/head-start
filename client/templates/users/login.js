Template.login.events({
  'keyup [name=email]': function(ev) {
    form.validationClasses('[name=email]', validations.validEmail, [form.email()]);
  },
  'keyup [name=password]': function(ev) {
    form.validationClasses('[name=password]', validations.validLength, [form.password()]);
  },
  'submit .login': function(ev) {
    ev.preventDefault();
    
    var valid = form.isValid(validations.validEmail(form.email()), validations.validLength(form.password()));
    if (!valid)  {
      toastr.error('The Form is invalid. Please try again');
      return false;
    } else {
      $('[name=login]').val('Logging In...').prop( "disabled", true );
      Meteor.loginWithPassword(form.email(), form.password(), 
        function(err) {
          if (err) {
            $('[name=login]').val('Login').prop( "disabled", false );
            toastr.error(err.reason);
          } else {
            Router.go('dashboard');
            toastr.success('Welcome Back');
          }
      });
    }
  }
}); 