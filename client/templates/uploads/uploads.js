/* Original code by Vaughn Iverson; see this sample; https://github.com/vsivsi/meteor-file-sample-app */
Meteor.startup(function() {
  
  files.resumable.on('fileAdded', function(file) {
    
    files.insert({
      _id: file.uniqueIdentifier,
      filename: file.fileName,
      contentType: file.file.type
    }, function(err, fileId) {
      if (err) {
        return toastr.error('File creation failed:');
      }
      files.resumable.upload();
    });
  });
  
  files.resumable.on('fileProgress', function(file) {
    Session.set(file.uniqueIdentifier, Math.floor(100 * file.progress()));
  });
  
  files.resumable.on('fileSuccess', function(file) {
    toastr.success('File Uploaded Successfully');
    Session.set(file.uniqueIdentifier, undefined);
  });
  
  files.resumable.on('fileError', function(file) {
    $('.uploading').val('Error Uploading');
    Session.set(file.uniqueIdentifier, undefined);
  });
  
});


Template.uploads.onRendered(function() {
  
  files.resumable.assignDrop($('.fileDrop'));
  
  Tracker.autorun(function() {
    var userId = Meteor.userId();
    Meteor.subscribe('myFiles', userId);
    $.cookie('X-Auth-Token', Accounts._storedLoginToken());
  });
  
});

Template.files.helpers({
  myFiles: function() {
    return files.find({});
  }
});

Template.file.helpers({
  fileName: function() {
    return (this.filename) ? this.filename : "Uploading...";
  },
  link: function() {
    return files.baseURL + '/md5/' + this.md5;
  },
  fileSize: function() {
    var fileSize = numeral(this.length).format('0.0b');
    if (this.length) {
      return fileSize;
    } else {
      return "Uploading...";
    }  
  },
  fileReady: function() {
    return !!this.length;
  }
});

Template.file.events({
  'load': function(_, _) {
    $('.file-list-heading').fadeIn(500);
  },
  'click .js-delete': function(ev, tmpl) {
      var fileId = this._id;
    tmpl.$('.file').addClass('deleted');
    files.remove({ _id: fileId });
    toastr.success('File Deleted.');
  }
})