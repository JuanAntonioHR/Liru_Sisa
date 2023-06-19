window.onload=init;

function init()
{
    if(localStorage.getItem('token') == 1) {
        MostrarVentas();

        const searchInput=document.getElementById("BuscarVenta");
        searchInput.addEventListener("keydown",function(event)
        {
            if(event.key == "Enter")
            {
                buscarVenta();
            }
        })
    } else {
        window.location.href = 'InicioSesion.html';
    }

}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'InicioSesion.html';
}


// Base de datos de la informacion que se va a mostrar
var datosVentas = [
    {
      id: 1,
      cliente: "Pancracio López",
      totalPagar: 10000,
      deuda: 5000,
      saldo: 3500,
      fecha: "2023-04-16",
      hora: "18:34"
    },
    {
      id: 2,
      cliente: "Juan Pérez",
      totalPagar: 8000,
      deuda: 0,
      saldo: 8000,
      fecha: "2023-04-17",
      hora: "10:12"
    },
];

// Convertir el arreglo a una cadena JSON
var datosVentasJSON = JSON.stringify(datosVentas);

// Guardar la cadena JSON en el localStorage
localStorage.setItem("datosVentas", datosVentasJSON);


// Crea la tabla monto-pagar con el arreglo de datos ventas
function mostrardatosVentas()
 {
    const montoVentaContainer = document.getElementById("tabla-monto-pagar"); // Este es el id de la tabla
    montoVentaContainer.innerHTML = "";
  
    for (const clienteItem of datosVentas) {
      if (clienteItem.id === 1) {
        const detalleVentaHtml = 
        `   
          <tr>
              <th><b>Gameplanet ${clienteItem.id}</b></th>
              <th></th>
          </tr>
          <tr>
              <td>Cliente:</td>
              <td>${clienteItem.cliente}</td>
          </tr>
          <tr>
              <td>Total a pagar:</td>
              <td>${clienteItem.totalPagar}</td>
          </tr>
          <tr>
              <td>Deuda:</td>
              <td>${clienteItem.deuda}</td>
          </tr>
          <tr>
              <td>Saldo:</td>
              <td>${clienteItem.saldo}</td>
          </tr>
          <tr>
              <td>Fecha:</td>
              <td>${clienteItem.fecha}</td>
          </tr>
          <tr>
              <td>Hora:</td>
              <td>${clienteItem.hora}</td>
          </tr>`;
        montoVentaContainer.innerHTML += detalleVentaHtml;
      }
    }
  }
  

  //Base de datos de ventas
  const Venta=[
    {
        Id:1,
        Dia:"16-04-23",
        Hora:"11:29 a.m",
        Total:"$250.00",
        Estado:"Pagado,entregado",
        Articulos:{
            Art1:"Pizza de peperoni grande",
            Art2:"Refresco de Cola",
            Art3:"Crazy breads"
       
        },
        Envio:{
            Destino:"Praza de Jesús, 6, 47° B"
        }
    },
    {
        Id:2,
        Dia:"16-04-23",
        Hora:"11:40 a.m",
        Total:"$200.00",
        Estado:"Pagado,entregado",
        Articulos:
        {
            Art1:"Pizza de peperoni  Grande",
            Art2:"Refresco de Cola",
            Art3:""
        },
        Envio:{
            Destino:"Praza de Jesús, 6, 47° B"
        }
    }
    
]


// Funcion que crea la tabla de ventas
function MostrarVentas()
{
    const VentaContainer=document.getElementById("ventaContainer"); // Este es el id de la tabla
    VentaContainer.innerHTML="";
    for(const ventaItem of Venta)
    {
        const detalleVentaHtml=`
                <tr>
                    <th></th>
                    <th><b>Nombre</b></th>
                    <th><b>Cantidad</b></th>
                    <th><b>Precio</b></th>
                    <th><b>Importe</b></th>
                    </tr>
                <tr>
                    <td></td>
                    <td>${ventaItem.Articulos.Art1}</td>
                    <td>1</td>
                    <td>${ventaItem.Total}</td>
                    <td>${ventaItem.Total}</</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pizza de peperoni Mediana</td>
                    td>1</td>
                    <td>${ventaItem.Articulos.Art2}</td>
                    <td>${ventaItem.Total}</td>
                    <td>${ventaItem.Total}</td>
                </tr>
                    `;
        VentaContainer.innerHTML += detalleVentaHtml;
    }
   
}

// Base de datos de clientes
const clientes=[
    {
        id:1,
        Nombre:"Pancracio",
        Apellido:"López",
        Direccion:"Ronda Ander,6, Entre suelo 6°",
        Correo:"pancracio@email.com",
        Telefono:"442-138-68-82",
        VentaReciente: {
            idV:1
        }
    },
    {
        id:2,
        Nombre:"Saul",
        Apellido:"Hernández",
        Direccion:"Ronda Ander,6, Entre suelo 6°",
        Correo:"eldejaguares@email.com",
        Telefono:"447-138-67-82",
        VentaReciente: {
            idV:2
        }
    }
];

//Funcion para mostrar los clientes
function mostrarClientes()
{
    const ventasContainer=document.getElementById("ClientesContainer"); // Este es el id de la tabla
    ventasContainer.innerHTML="";
    for(const clienteItem of clientes)
    {
        const detalleClienteHtml=`
            <tr>
                <th></th>
                <th><b>Nombre</b></th>
                <th><b>Email</b></th>
                <th><b>Teléfono</b></th>
                <th><b>Saldo</b></th>
            </tr>
            <tr>
                <td></td>
                <td>${clientes.Nombre} ${clientes.Apellido}</td>
                <td>${clientes.Correo}</td>
                <td>${clientes.Telefono}</td>
                <td>${datosVentas.saldo}</td>
            </tr>
            `;
        ventasContainer.innerHTML += detalleClienteHtml;
    }
}


// Funcion para buscar clientes
function buscarCliente()
{
    const searchInput =document.getElementById("BuscarCliente").value;
    const clienteEncontrado=venta.find(venta => venta.id == searchInput);

    if(clienteEncontrado)
    {
        mostrarDetallesVenta(clienteEncontrado);
    }
    else
    {
        alert("No se encontró ningún cliente con ese id");
    }
}