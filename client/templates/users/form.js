form = {
  isValid() {
    return _.reduce(_.toArray(arguments), function(acc, val) {
      return acc && val;
    }, true);
  },
  email() {
    return $('#email').val().trim();
  },
  password() {
    return $('#password').val().trim();
  },
  passwordConfirmation() {
    return $('#confirm-password').val().trim();
  },
  validationClasses(elementSelector, elementValidator, validatorArgArray) {
    (!elementValidator.apply(null, validatorArgArray)) ? 
      $(elementSelector).addClass('error') : 
      $(elementSelector).removeClass('error');
  }
};