document.getElementById('imageInput').addEventListener('change', function(e) {
  // REcoge los archivos seleccionados
    var files = e.target.files;
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      formData.append('images[]', file);
  }

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});