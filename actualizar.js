// Obtener los datos almacenados en el almacenamiento local
const data = JSON.parse(localStorage.getItem("updateData"));

// Establecer los valores en los campos del formulario
document.querySelector("#itemId").value = data.id;
document.querySelector("#titulo").value = decodeURIComponent(data.title);
document.querySelector("#imagen1").value = data.image1;
document.querySelector("#subtitulo").value = decodeURIComponent(data.subTitle);
document.querySelector("#articulo").value = decodeURIComponent(data.article);
document.querySelector("#imagen2").value = data.image2;

// Resto del código para manejar la actualización de datos, etc.

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const itemId = document.querySelector("#itemId").value;
  const title = document.querySelector("#titulo").value;
  const image1 = document.querySelector("#imagen1").value;
  const subTitle = document.querySelector("#subtitulo").value;
  const article = document.querySelector("#articulo").value;
  const image2 = document.querySelector("#imagen2").value;

  // Llamar a la función de actualización de datos con el ID y los nuevos valores
  updateData(itemId, title, image1, subTitle, article, image2);
}

// Asignar el manejador de eventos al botón de "Actualizar"
document.querySelector("#submit").addEventListener("click", handleSubmit);

// Función para realizar una solicitud PUT a la API y actualizar el elemento
function updateData(itemId, title, image1, subTitle, article, image2) {
  fetch(`https://60e4fd845bcbca001749ec13.mockapi.io/api/articles/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, image1, subTitle, article, image2 }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Hacer algo con la respuesta de actualización
      window.location.href = "index.html"; // Redireccionar a la página principal después de la actualización
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Obtener una referencia al botón de eliminar
const botonEliminar = document.querySelector("#eliminar");

// Manejar el evento de clic del botón de eliminar
botonEliminar.addEventListener("click", function () {
  // Llamar a la función de eliminación de datos con el ID del elemento
  deleteData(data.id);
});

// Función para realizar una solicitud DELETE a la API y eliminar el elemento
function deleteData(itemId) {
  fetch(`https://60e4fd845bcbca001749ec13.mockapi.io/api/articles/${itemId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Hacer algo con la respuesta de eliminación
      window.location.href = "index.html"; // Redireccionar a la página principal después de la eliminación
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Función para ajustar la altura del <textarea>
function adjustTextareaHeight() {
  const textarea = document.querySelector("#articulo");
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

// Ajustar la altura del <textarea> después de establecer el valor
adjustTextareaHeight();

// Obtén una referencia al elemento <textarea>
const textarea = document.querySelector("#articulo");

// Asigna un manejador de eventos al evento 'input' del <textarea>
textarea.addEventListener("input", function () {
  // Ajusta la altura del <textarea> según su contenido
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
