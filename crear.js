// Obtener una referencia al formulario
const formulario = document.querySelector('#formulario');

// Manejar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const title = document.querySelector('#titulo').value;
  const image1 = document.querySelector('#imagen1').value;
  const subTitle = document.querySelector('#subtitulo').value;
  const article = document.querySelector('#articulo').value;
  const image2 = document.querySelector('#imagen2').value;

  // Llamar a la función de creación de materia con los valores del formulario
  createData(title, image1, subTitle, article, image2);
});

// Función para realizar una solicitud POST a la API y crear una nueva materia
function createData(title, image1, subTitle, article, image2) {
  fetch('https://60e4fd845bcbca001749ec13.mockapi.io/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, image1, subTitle, article, image2 })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Hacer algo con la respuesta de creación
      showAlert('¡Materia creada exitosamente! Você sera redireccionado em 10 seg', 'confirm'); // Mostrar alerta de confirmación
      setTimeout(() => {
        window.location.href = 'index.html'; // Redireccionar a index.html después de 20 segundos
      }, 5000);
    })
    .catch(error => {
      console.error('Error:', error);
      showAlert('¡Error al crear la materia!', 'error'); // Mostrar alerta de error
    });
}

// Función para mostrar una alerta de confirmación o error
function showAlert(message, type) {
  if (type === 'confirm') {
    alert(message);
  } else if (type === 'error') {
    alert(message);
  }
}

// Obtén una referencia al elemento <textarea>
const textarea = document.querySelector('#articulo');

// Asigna un manejador de eventos al evento 'input' del <textarea>
textarea.addEventListener('input', function() {
  // Ajusta la altura del <textarea> según su contenido
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});