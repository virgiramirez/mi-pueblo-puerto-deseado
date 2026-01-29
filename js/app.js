const form = document.getElementById("reclamoForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;

    document.getElementById("mensaje").textContent =
      `Gracias ${nombre}, tu reclamo fue registrado.`;

    form.reset();
  });
}

// CARGA DE DATOS DESDE JSON (PUERTO DESEADO)
fetch("../data/ciudad.json")
    .then(response => response.json())
    .then(data => {
        const nombreCiudad = document.getElementById("nombreCiudad");
        const descripcionCiudad = document.getElementById("descripcionCiudad");
        const institucionalList = document.getElementById("institucionalList");
        const telefonosList = document.getElementById("telefonosList");

        if (nombreCiudad && descripcionCiudad) {
            nombreCiudad.textContent = data.ciudad;
            descripcionCiudad.textContent = data.descripcion;
        }   

        if (institucionalList) {
            data.institucional.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                institucionalList.appendChild(li);
            });
        }

        if (telefonosList) {
            data.telefonos_utiles.forEach(tel => {
                const li = document.createElement("li");
                li.textContent = `${tel.nombre}: ${tel.telefono}`;
                telefonosList.appendChild(li);
            });
        }
    })
.catch(error => {
    console.error("Error cargando datos:", error);
});

const turismoContainer = document.getElementById("turismo-container");

if (turismoContainer) {
    fetch("data/turismo.json")
        .then(response => response.json())
        .then(data => {
            data.lugares.forEach(lugar => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <img src="${lugar.imagen}" alt="${lugar.nombre}">
                    <h3>${lugar.nombre}</h3>
                    <p>${lugar.descripcion}</p>
                `;
                turismoContainer.appendChild(card);
            });
        })
    .catch(error => {
        console.error("Error cargando turismo:", error);
    });
}
