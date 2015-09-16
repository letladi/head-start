files = new FileCollection( 'files' , {
  resumable: true,
  resumableIndexName: 'files',
  http: [{
    method: 'get',
    path: '/md5/:md5',
    lookup: function(params, query) {
      return  { md5: params.md5 };
    }
  }]
});