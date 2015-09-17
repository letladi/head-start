Meteor.startup(function() {
  process.env.MAIL_URL = Meteor.settings.MAIL_URL;

  Accounts.emailTemplates.from = 'Head Start <' + Meteor.settings.myEmailAddress + '>';
  Accounts.emailTemplates.siteName = 'Head Start';

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address';
  };
  Accounts.emailTemplates.resetPassword.subject = function(user) {
    return 'Reset Password';
  };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  Accounts.emailTemplates.verifyEmail.html = function(user, url) {
    return '<h2>Welcome to Head Start</h2><p>Please click the following link to complete your registration</p>' 
      + "<a href='"+ url + "'>Verify Email</a>";
  };
  Accounts.emailTemplates.resetPassword.html = function(user, url) {
    return '<h2>Reset Password</h2><p>Please click the following link to reset your password </p>' 
      + "<a href='"+ url + "'>Reset Password</a>";
  }
});