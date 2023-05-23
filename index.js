// Función para mostrar los elementos en la página
function showItems(data) {
  var contenido = document.querySelector("#contenido");
  contenido.innerHTML = "";

  data.forEach((obj) => {
    const escapedTitle = escapeQuotes(obj.title);
    const escapedSubTitle = escapeQuotes(obj.subTitle);
    contenido.innerHTML += `
        <div class="card-list">
          <p>Titulo: ${escapedTitle}</p>
          <img src="${obj.image1}" width="100px">
          <button onclick="redirectToUpdateForm('${obj.id}', '${encodeURIComponent(escapedTitle)}', '${obj.image1}', '${encodeURIComponent(escapedSubTitle)}', '${encodeURIComponent(obj.article)}', '${obj.image2}')">Editar</button>
        </div>
        <hr>
      `;
  });
}

// Función para escapar comillas simples y dobles
function escapeQuotes(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Función para guardar los datos en el almacenamiento local
function saveDataToLocalStorage(id, title, image1, subTitle, article, image2) {
  const data = {
    id: id,
    title: title,
    image1: image1,
    subTitle: subTitle,
    article: article,
    image2: image2
  };
  localStorage.setItem('updateData', JSON.stringify(data));
}

// Función para redirigir a la página de actualización
function redirectToUpdateForm(id, title, image1, subTitle, article, image2) {
  // Guardar los valores en el almacenamiento local
  saveDataToLocalStorage(id, title, image1, subTitle, article, image2);
  
  // Redirigir a la página de actualización
  window.location.href = 'actualizar.html';
}

// Obtener los elementos del JSON y mostrarlos en la página
fetch("https://60e4fd845bcbca001749ec13.mockapi.io/api/articles")
  .then((response) => response.json())
  .then((data) => {
    showItems(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Obtener una referencia al botón de "Crear"
const botonCrear = document.querySelector("#crear");

// Manejar el evento de clic del botón de "Crear"
botonCrear.addEventListener("click", function () {
  // Redirigir a la página de crear
  window.location.href = "crear.html";
});
