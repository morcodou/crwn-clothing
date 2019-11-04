$(document).ready(function() {
    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: '#toolbar-container'
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
    
    // Enable all tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Can control programmatically too
    $('.ql-italic').mouseover();
    setTimeout(function() {
      $('.ql-italic').mouseout();
    }, 2500);
  });
  