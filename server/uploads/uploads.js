Meteor.startup(function() {
  Meteor.publish('myFiles', function(userId) {
    if (this.userId === userId) {
      return files.find({
        'metadata._Resumable': { $exists: false }, // don't include files being uploaded
        'metadata._auth.owner': this.userId
      });
    } else {
      return [];
    }
  });
  
  files.allow({
    insert: function(userId, file) {
      file.metadata = file.metadata || {};
      file.metadata._auth = {
        owner: userId
      }
      return true;
    },
    remove: function(userId, file) {
      if ( !isFileOwner(userId, file) ) {
        return false;
      }
      return true;
    },
    read: function(userId, file) {
      if ( !isFileOwner(userId, file) ) {
        return false;
      }
      return true;
    },
    write: function(userId, file, fields) {
      if ( !isFileOwner(userId, file) ) {
        return false;
      }
      return true;
    }
  });
  
});

function isFileOwner(userId, file) {
  return userId === fileOwner(file);
}

function fileOwner(file) {
  if (hasOwner(file)) {
    return file.metadata._auth.owner;
  }
}

function hasOwner(file) {
  return file && file.metadata && file.metadata._auth && file.metadata._auth.owner;
}