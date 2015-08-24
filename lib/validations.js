validations = {
  validEmail: function(email) {
    // https://github.com/jzaefferer/jquery-validation
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email );
  },
  usernameAvailable: function(username) {
    var self = this;
    Meteor.call('usernameAvailable', username, function(_, result) {
       self.usernameAvailable = result;
    });
    console.log('Username:', self.usernameAvailable);
    return self.usernameAvailable;
  },
  validPasswordConfirmation: function(password, passwordConfirmation) {
    return passwordConfirmation === password;
  },
  validLength: function(val, len) {
    var ValLength = len || 6;
    return val.length >= ValLength;
  }
};