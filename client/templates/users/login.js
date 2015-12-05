Template.login.events({
  'keyup #email': (ev)=> {
    form.validationClasses('#email', validations.validEmail, [form.email()]);
  },
  'keyup #password': (ev)=> {
    form.validationClasses('#password', validations.validLength, [form.password()]);
  },
  'submit .login': (ev)=> {
    ev.preventDefault();
    
    const valid = form.isValid(validations.validEmail(form.email()), validations.validLength(form.password()));
    if (!valid)  {
      Materialize.toast('The Form is invalid. Please try again', 3000);
      return false;
    } else {
      $('[name=login]').val('Logging In...').prop( "disabled", true );
      Meteor.loginWithPassword(form.email(), form.password(), 
        (err)=> {
          if (err) {
            $('[name=login]').val('Login').prop( "disabled", false );
            Materialize.toast(err.reason, 3000);
          } else {
            Router.go('dashboard');
          }
      });
    }
  }
}); 