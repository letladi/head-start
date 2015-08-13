Email = Match.Where(function(email) {
  check(email, String);
  return validations.validEmail(email);
});