// Datos de ejemplo
const compra = {
  id: 1,
  fecha: new Date(2023,3,23,11,29,0),
  total: 530250.00,
  estado: "Pagado, Entregado",
  articulo: {
    nombre: "Harina para pizza marca pizza Napolitana",
    cantidad: 101
  },
  direccionEnvio: {
    origen: "Av. Constituyentes Ote. 7-1, Hidalgo, Local D 76046, Coloniam San Francisquito, 76040 Santiago de Queretaro, Qro",
    destino: "Praza de Jesus, 6, 47-B"
  }
};

// Función para mostrar los detalles de la compra
function mostrarDetallesCompra() {
  document.getElementById("id").textContent = compra.id;
  document.getElementById("fecha").textContent = compra.fecha;
  document.getElementById("total").textContent = "$" + compra.total;
  document.getElementById("estado").textContent = compra.estado;

  const listaArticulo = document.getElementById("listaArticulo");
  const item = document.createElement("li");
  item.textContent = compra.articulo.nombre + " x" + compra.articulo.cantidad;
  listaArticulo.appendChild(item);

  document.getElementById("origen").textContent = compra.direccionEnvio.origen;
  document.getElementById("destino").textContent = compra.direccionEnvio.destino;
}

// Función para buscar un producto por ID
function buscarProducto() {
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput == compra.id) {
    mostrarDetallesCompra();
  } else {
    alert("No se encontró ningun producto con ese ID.");
  }
}