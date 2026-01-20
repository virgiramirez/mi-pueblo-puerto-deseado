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