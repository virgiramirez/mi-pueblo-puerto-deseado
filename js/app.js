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