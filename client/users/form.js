form = {
  isValid: function() {
    return _.reduce(_.toArray(arguments), function(acc, val) {
      return acc && val;
    }, true);
  },
  email: function() {
    return $('[name=email]').val().trim();
  },
  password: function() {
    return $('[name=password]').val().trim();
  },
  passwordConfirmation: function() {
    return $('[name=confirm-password]').val().trim();
  },
  validationClasses: function(elementSelector, elementValidator, validatorArgArray) {
    (!elementValidator.apply(null, validatorArgArray)) ? 
      $(elementSelector).addClass('error') : 
      $(elementSelector).removeClass('error');
  }
};