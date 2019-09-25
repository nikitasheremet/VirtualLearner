$("#profileImage").click(function(e) {
  $("#imageUpload").click();
  });

  function fasterPreview( upload) {
  if ( upload.files && upload.files[0] ){
  $('#profileImage').attr('src',
  window.URL.createObjectURL(upload.files[0]) );
  }
  }

  $("#imageUpload").change(function(){
  fasterPreview( this );
  });
