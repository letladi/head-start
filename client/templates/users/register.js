
Template.register.events({
  'keyup #email': (ev)=> {
    form.validationClasses('[name=email]', validations.validEmail, [form.email()]);
  },
  'keyup #password': (ev)=> {
    form.validationClasses('[name=password]', validations.validLength, [form.password()]);
  },
  'submit .register': (ev)=> {
    ev.preventDefault();
    
    const valid = form.isValid(validations.validEmail(form.email())
      , validations.validLength(form.password())
      , $('.accept-user-terms').is(":checked"));
    
    if (!valid) {
      Materialize.toast('The form is invalid, please try again.');
    } else {
      $('[name=register]').val('Registering...').prop( "disabled" , true );
      Accounts.createUser({
        email: form.email(),
        password: form.password()
      }, (err)=> {
        if (err) {
          $('[name=register]').val('Register').prop( "disabled" , false );
          Materialize.toast(err.reason);
        } else {
          Meteor.call('verifyUserEmail');
          Router.go('dashboard');
        }
      }); 
    }
  }
});

Accounts.onEmailVerificationLink((token, done)=> {
  done();
  Accounts.verifyEmail(token, (err)=> {
    if (err) {
      Materialize.toast(err.reason);
    }
  }); 
  Router.go('dashboard');
});