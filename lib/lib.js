lib = {
  isImage: function(type) {
    var types = {
        'image/jpeg': true,
        'image/jpg': true,
        'image/png': true,
        'image/gif': true,
        'image/tiff': true
      };
      return !!types[type];
  },
  loginToken: function() {
    return Accounts._storedLoginToken();
  },
  isAudio: function(type) {
    var types = {
      'audio/mpeg3': true,
      'audio/x-mpeg-3': true,
      'audio/wav': true
    };
    return !!types[type];
  },
  isVideo: function(type) {
    var types = {
      'video/mpeg': true,
      'video/mpeg': true,
      'video/quicktime': true,
      'video/avi': true,
      'video/x-msvideo': true,
      'video/msvideo': true     
    };
    return !!types[type];
  }
}