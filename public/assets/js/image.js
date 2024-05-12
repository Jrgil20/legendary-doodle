document.getElementById('imageInput').addEventListener('change', function(e) {
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      // Ahora puedes hacer algo con el archivo, como leerlo o subirlo a un servidor
      
    }
  });