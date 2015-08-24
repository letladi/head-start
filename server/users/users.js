Meteor.methods({
  verifyUserEmail: function() {
    Accounts.sendVerificationEmail(Meteor.userId());
  },
  usernameAvailable: function(username) {
    check(username, String);
    var user = Meteor.users.findOne({ username: username });
    if ( user && user.username && 
        (user.username.toLowerCase() === username.toLowerCase()) ) {
      return false; 
    } else  {
      return true;
    }
  }
});

