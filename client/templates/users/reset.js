Template.forgotPassword.events({
  'keyup [name=email]': function(ev) {
    form.validationClasses('[name=email]', validations.validEmail, [form.email()]);
  },
  'submit .reset': function(ev) {
    ev.preventDefault();
    
    var valid = form.isValid(validations.validEmail(form.email()));
    if (!valid) {
      toastr.error('The form is invalid, please try again.');
    } else {
      $('[name=reset]').val('Sending Link...').prop( "disabled", true );
      Accounts.forgotPassword({email: form.email() }, function(err) {
        if (err) {
          toastr.error(err.reason);
          $('[name=reset]').val('Send Email Link').prop( "disabled", false );
        } else {
          $('[name=reset]').val('Reset Link Sent');
          toastr.success('Please check your email to reset password');
        }
      });
    }
  }
});

Template.resetPassword.events({
  'keyup [name=password]': function(ev) {
    form.validationClasses('[name=password]', validations.validLength, [form.password()]);
  },
  'keyup [name=confirm-password]': function(ev) {
    form.validationClasses('[name=confirm-password]', validations.validPasswordConfirmation, 
                      [form.password(), form.passwordConfirmation()]);
  },
  'submit .reset': function(ev) {
    ev.preventDefault();
    
    var valid = form.isValid(validations.validLength(form.password()), 
                          validations.validPasswordConfirmation(form.password(), form.passwordConfirmation()));
    
    if (!valid)  {
      toastr.error('The Form is invalid. Please try again');
      return false;
    } else {
      $('[name=reset]').val('Resetting Password...').attr('disabled', 'true');
      Accounts.resetPassword(Session.get('reset-token'), form.password(), function(err) {
        if (err) {
          toastr.error(err.reason);
        } else {
          $('[name=reset]').val('Password Reset...');
          toastr.success('Password reset. You can now login');
          Router.go('login');
        }
      })
    }
  }
});

Accounts.onResetPasswordLink(function(token, _) {
  Session.set('reset-token', token);
  Router.go('resetPassword');
});