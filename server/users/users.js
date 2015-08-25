Meteor.methods({
  verifyUserEmail: function() {
    Accounts.sendVerificationEmail(this.userId);
  }
});
