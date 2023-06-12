window.onload = init;

function init() {
  // if(!localStorage.getItem('token')) {
  //   mostrarDetallesCompra(1);
  // } else {
  //   window.location.href = '#';
  // }
  mostrarDetallesCompra(compra[0]);
}

// Datos de ejemplo
const compra = [
  {
    id: 1,
    fecha: new Date(2023, 3, 23, 11, 29, 0),
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
  },
  {
    id: 2,
    fecha: new Date(2023, 5, 11, 14, 45, 0),
    total: 980.00,
    estado: "Pagado, Pendiente de entrega",
    articulo: {
      nombre: "Leche descremada",
      cantidad: 4
    },
    direccionEnvio: {
      origen: "Calle del Sol, 123",
      destino: "Avenida de la Luna, 456"
    }
  }
];

// Función para mostrar los detalles de la compra
function mostrarDetallesCompra(compra) {
  document.getElementById("id").textContent = compra.id;
  document.getElementById("fecha").textContent = compra.fecha;
  document.getElementById("total").textContent = "$" + compra.total;
  document.getElementById("estado").textContent = compra.estado;
  document.getElementById("listaArticulo").textContent = compra.articulo.nombre + " x" + compra.articulo.cantidad;
  document.getElementById("origen").textContent = compra.direccionEnvio.origen;
  document.getElementById("destino").textContent = compra.direccionEnvio.destino;
}

// Función para buscar un producto por ID
function buscarProducto() {
  const searchInput = document.getElementById("searchInput").value;
  const productoEncontrado = compra.find(producto => producto.id == searchInput);

  if (productoEncontrado) {
    mostrarDetallesCompra(productoEncontrado);
  } else {
    alert("No se encontró ningún producto con ese ID.");
  }
}

