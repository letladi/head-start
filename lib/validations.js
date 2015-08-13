validations = {
  validEmail: function(email) {
    // from jquery validation plugin https://github.com/jzaefferer/jquery-validation
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email );
  },
  usernameAvailable: function(username) {
    if (Meteor.users.findOne({ username: username })) {
      return false; 
    } else  {
      return true;
    }
  },
  validPasswordConfirmation: function(password, passwordConfirmation) {
    return passwordConfirmation === password;
  },
  validLength: function(val, len) {
    var ValLength = len || 6;
    return val.length >= ValLength;
  }
};