window.onload=init;

function init()
{
    if(localStorage.getItem('token') == 1) {
        actualizarHorario();

        const inputPagar = document.getElementById("Input-pagar");
        inputPagar.onchange = function() {
            const pagar = parseFloat(inputPagar.value);
            actualizarDeuda(pagar);
        };

    } else {
        window.location.href = 'InicioSesion.html';
    }

}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'InicioSesion.html';
}

// Base de datos de articulos
const articulos = [
    {
        Id: 1,
        Nombre: "Pepperoni clásica",
        Precio: 300
    },
    {
        Id: 2,
        Nombre: "Hawaiana clásica",
        Precio: 400
    }
]


// Base de datos de clientes
const clientes = [
    {
        id:1,
        Nombre:"Pancracio Lopez",
        Correo:"pancracio@email.com",
        Telefono:"442-138-68-82",
        Saldo:35487.98,
    },
    {
        id:2,
        Nombre:"Natanael Cano",
        Correo:"nata@email.com",
        Telefono:"443-123-43-00",
        Saldo:1000.00,
    }
];

function actualizarHorario() {
    const fecha = new Date();
    const fechaTicket = document.getElementById("fecha");
    const horaTicket = document.getElementById("hora");

    fechaTicket.textContent = fecha.toLocaleDateString();
    horaTicket.textContent = fecha.toLocaleTimeString();
}

function actualizarArticulos(articulo) {
    const tablaArticulos = document.getElementById("tabla-articulos");

    // Verificar si el artículo ya existe en la tabla
    const rows = tablaArticulos.rows;
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const nombre = row.cells[0].textContent;
        const cantidad = parseInt(row.cells[1].textContent);

        if (nombre == articulo.Nombre) {
            // El artículo ya existe, aumentar la cantidad y actualizar el importe
            const nuevaCantidad = cantidad + 1;
            const nuevoImporte = (nuevaCantidad * articulo.Precio).toFixed(2);

            row.cells[1].textContent = nuevaCantidad.toString();
            row.cells[3].textContent = "$" + nuevoImporte.toString();
        
            actualizarTotal();

            return; // Terminar la función ya que el artículo se actualizó
        }
    }

    // El artículo no existe en la tabla, agregarlo al final
    const nuevaFila = tablaArticulos.insertRow();
    const celdaNombre = nuevaFila.insertCell();
    const celdaCantidad = nuevaFila.insertCell();
    const celdaPrecio = nuevaFila.insertCell();
    const celdaImporte = nuevaFila.insertCell();

    celdaNombre.textContent = articulo.Nombre;
    celdaCantidad.textContent = "1";
    celdaPrecio.textContent = "$" + articulo.Precio.toFixed(2);
    celdaImporte.textContent = "$" + articulo.Precio.toFixed(2);

    // Actualizar el total
    actualizarTotal();
}

function actualizarClientes(cliente) {
    const tablaClientes = document.getElementById("tabla-clientes");

    const tablaClientesHTML = `
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Email</b></th>
            <th><b>Teléfono</b></th>
            <th><b>Saldo</b></th>
        </tr>
        <tr>
            <td>${cliente.Nombre}</td>
            <td>${cliente.Correo}</td>
            <td>${cliente.Telefono}</td>
            <td>$${cliente.Saldo.toFixed(2)}</td>
        </tr>
    `;

    tablaClientes.innerHTML = tablaClientesHTML;

    // Actualizar el ticket y el cliente
    document.getElementById("cliente-ticket").textContent = cliente.Nombre;
    document.getElementById("cliente").textContent = cliente.Nombre;
    document.getElementById("saldo").textContent = "$" + cliente.Saldo.toFixed(2);
}


function buscarCliente() {
    const searchInput = document.getElementById("BuscarCliente").value;
    const clienteEncontrado = clientes.find(clientes => clientes.id == searchInput);

    if(clienteEncontrado)
    {
        actualizarClientes(clienteEncontrado);
    }
    else
    {
        alert("No se encontró ningun cliente con ese id");
    } 
}

function buscarArticulo() {
    const searchInput = document.getElementById("BuscarArticulo").value;
    const articuloEncontrado = articulos.find(articulos => articulos.Nombre == searchInput);

    if(articuloEncontrado)
    {
        actualizarArticulos(articuloEncontrado);
    }
    else
    {
        alert("No se encontró ningun artículo con ese id");
    } 
}

function actualizarTotal() {
    const tablaArticulos = document.getElementById("tabla-articulos");
    const tableTotal = document.getElementById("monto-total");
    const ticketTotal = document.getElementById("total-pago");

    // Verificar si existen artículos en la tabla
    if (tablaArticulos.rows.length > 1) {
        let total = 0;

        // Sumar los importes de los artículos
        for (let i = 1; i < tablaArticulos.rows.length; i++) {
            const importe = parseFloat(tablaArticulos.rows[i].cells[3].textContent.slice(1));
            total += importe;
        }

        // Actualizar los valores del total
        tableTotal.textContent = "$" + total.toFixed(2);
        ticketTotal.textContent = "$" + total.toFixed(2);
    } else {
        // No hay artículos, establecer los valores en 0
        tableTotal.textContent = "$0.00";
        ticketTotal.textContent = "$0.00";
    }

    // Actualizar deuda
    const inputPagar = document.getElementById("Input-pagar");
    const pagar = parseFloat(inputPagar.value) || 0;
    actualizarDeuda(pagar);
}

function actualizarDeuda(pagar) {
    const tableDeuda = document.getElementById("deuda");
    const ticketDeuda = document.getElementById("deuda-ticket");
    const tableTotal = document.getElementById("monto-total");

    const total = parseFloat(tableTotal.textContent.slice(1));
    const deuda = total - pagar;

    tableDeuda.textContent = "$" + deuda.toFixed(2);
    ticketDeuda.textContent = "$" + deuda.toFixed(2);
}

function finalizarVenta() {
    const tableTotal = document.getElementById("monto-total").textContent;
    const fecha = document.getElementById("fecha").textContent;
    const hora = document.getElementById("hora").textContent;

    const venta = {
        Dia: fecha,
        Hora: hora,
        Total: tableTotal,
        Estado: "Pagado, entregado",
        Articulos: {},
        Envio: {
            Destino: "Entrega en sucursal"
        }
    };

    const tablaArticulos = document.getElementById("tabla-articulos");
    const rows = tablaArticulos.rows;

    // Recorrer las filas de la tabla de artículos
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const nombre = row.cells[0].textContent;
        const cantidad = row.cells[1].textContent;

        // Agregar el artículo y cantidad al objeto de artículos
        venta.Articulos["Art" + i] = nombre + " " + cantidad;
    }

    let ventasArray = [];

    // Verificar si ya existe un array de ventas en el localStorage
    if (localStorage.getItem("ventasArray")) {
        ventasArray = JSON.parse(localStorage.getItem("ventasArray"));
    }

    // Agregar la venta al final del array
    ventasArray.push(venta);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("ventasArray", JSON.stringify(ventasArray));

    // Mostrar el mensaje de éxito
    alert("Venta finalizada correctamente");

    location.reload()
}

function verificarVenta() {
    const tablaArticulos = document.getElementById("tabla-articulos");
    const rows = tablaArticulos.rows;

    // Verificar si existen artículos en la tabla
    if (rows.length > 1) {
        const clienteSaldo = parseFloat(document.getElementById("saldo").textContent.replace("$", ""));
        const deuda = parseFloat(document.getElementById("deuda").textContent.replace("$", ""));

        // Verificar si el saldo del cliente es mayor o igual a la deuda
        if (clienteSaldo >= deuda) {
            finalizarVenta();
        } else {
            alert("El saldo del cliente no es suficiente para realizar la venta.");
        }
    } else {
        alert("No hay artículos en la venta.");
    }
}
