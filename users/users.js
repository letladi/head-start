validEmail = function validEmail(email) {
  // from jquery validation plugin https://github.com/jzaefferer/jquery-validation
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email );
};
formValid = function formValid() {
  return _.reduce(_.toArray(arguments), function(acc, val) {
    return acc && val;
  }, true);
};
email = function email() {
  return $('[name=email]').val().trim();
};
username = function username() {
  return $('[name=username]').val().trim();
};
password = function password() {
  return $('[name=password]').val().trim();
};
passwordConfirmation = function passwordConfirmation() {
  return $('[name=confirm-password]').val().trim();
};
validPasswordConfirmation = function(password, passwordConfirmation) {
  return passwordConfirmation === password;
};
validLength = function validLength(val, len) {
  var ValLength = len || 6;
  return val.length >= ValLength;
};
usernameAvailable = function usernameAvailable(username) {
  if (Meteor.users.findOne({ username: username })) {
    return false; 
  } else  {
    return true;
  }
}
validationClasses = function validationClasses(elementSelector, elementValidator, validatorArgArray) {
  (!elementValidator.apply(null, validatorArgArray)) ? 
      $(elementSelector).addClass('error') : 
      $(elementSelector).removeClass('error');
};