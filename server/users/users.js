Meteor.methods({
  verifyUserEmail: function() {
    Accounts.sendVerificationEmail(Meteor.userId());
  }
});

