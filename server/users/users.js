Meteor.methods({
  verifyUserEmail: function() {
    console.log(this.userId());
    Accounts.sendVerificationEmail(this.userId());
  }
});
