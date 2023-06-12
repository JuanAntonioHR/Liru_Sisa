HTwindow.onload = init;

function init() {
  // if(!localStorage.getItem('token')) {
  //   mostrarDetallesCompra(1);
  // } else {
  //   window.location.href = '#';
  // }

  mostrarCompras();

  // Agregar evento keydown al campo de entrada searchInput
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      buscarProducto();
    }
  });
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
  const detallesCompraHtml = `
    <div class="compra-card-item">
      <div class="detalles-compra">
        <h2>Información de la Compra</h2>
        <p><strong>ID:</strong> <span>${compra.id}</span></p>
        <p><strong>Día y Hora:</strong> <span>${compra.fecha}</span></p>
        <p><strong>Total de Compra:</strong> <span>$${compra.total}</span></p>
        <p><strong>Estado:</strong> <span>${compra.estado}</span></p>
      </div>
      <div class="articulo">
        <h2>Artículo</h2>
        <ul>
          <li>${compra.articulo.nombre} x${compra.articulo.cantidad}</li>
        </ul>
      </div>
      <div class="direccion-envio">
        <h2>Dirección de Envío</h2>
        <p><strong>Origen:</strong> <span>${compra.direccionEnvio.origen}</span></p>
        <p><strong>Destino:</strong> <span>${compra.direccionEnvio.destino}</span></p>
      </div>
    </div>
  `;
  
  const comprasContainer = document.getElementById("comprasContainer");
  comprasContainer.innerHTML = detallesCompraHtml;
}

// Función para mostrar todas las compras
function mostrarCompras() {
  const comprasContainer = document.getElementById("comprasContainer");
  comprasContainer.innerHTML = ""; // Vaciar el contenedor antes de agregar las compras

  for (const compraItem of compra) {
    const detallesCompraHtml = `
      <div class="compra-card-item">
        <div class="detalles-compra">
          <h2>Información de la Compra</h2>
          <p><strong>ID:</strong> <span>${compraItem.id}</span></p>
          <p><strong>Día y Hora:</strong> <span>${compraItem.fecha}</span></p>
          <p><strong>Total de Compra:</strong> <span>$${compraItem.total}</span></p>
          <p><strong>Estado:</strong> <span>${compraItem.estado}</span></p>
        </div>
        <div class="articulo">
          <h2>Artículos</h2>
          <ul>
            <li>${compraItem.articulo.nombre} x${compraItem.articulo.cantidad}</li>
          </ul>
        </div>
        <div class="direccion-envio">
          <h2>Envío</h2>
          <p><strong>Origen:</strong> <span>${compraItem.direccionEnvio.origen}</span></p>
          <p><strong>Destino:</strong> <span>${compraItem.direccionEnvio.destino}</span></p>
        </div>
      </div>
    `;

    comprasContainer.innerHTML += detallesCompraHtml; // Agregar el detalle de la compra al contenedor
  }
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