Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', 'landing');
Router.route('/login', {
  name: 'login',
  template: 'login'
});
Router.route('/register', {
  name: 'register',
  template: 'register'
});
Router.route('/user-terms', {
  name: 'user-terms',
  template: 'userTerms'
});
Router.route('/contact', {
  name: 'contact',
  template: 'contact'
});
Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard'
});
Router.route('/forgot-password', {
  name: 'forgotPassword',
  template: 'forgotPassword'
});
Router.route('/reset-password', {
  name:'resetPassword',
  template: 'resetPassword'
});

// Upload routes
Router.route('/image-uploads', {
  name: 'image-uploads',
  template: 'imageUploads'
});
Router.route('/audio-uploads', {
  name: 'audio-uploads',
  template: 'audioUploads'
});
Router.route('/video-uploads', {
  name: 'video-uploads',
  template: 'videoUploads'
});
OnBeforeActions = {
  loginRequired: function() {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      this.next();
    }
  }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['dashboard']
});