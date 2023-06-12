//Datos de ejemplo
window.onload=init;

function init()
{
    mostrarClientes();

    const searchInput=document.getElementById("BuscarCliente");
    searchInput.addEventListener("keydown",function(event)
    {
        if(event.key =="Enter")
        {
            buscarCliente();
        }
    });
}

const venta=[
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

//función para mostrar los detalles de los clientes 
function mostrarDetallesVenta(venta)
{
    const detallesVentaHtml=`
    <div id="DetalleClientes">
        <h2>Id: <span>${venta.id}</span></h2>
        <p><strong>Nombre: </strong><span>${venta.Nombre}</span></p>
        <p><strong>Apellido: </strong><span>${venta.Apellido}</span></p>
        <p><strong>Dirección: </strong><span>${venta.Direccion}</span></p>
        <p><strong>Correo: </strong><span>${venta.Correo}</span></p>
        <p><strong>Teléfono: </strong><span>${venta.Telefono}</span></p>
    </div>
    <div id="VentaReciente">
        <h2>Ventas recientes</h2>
        <p><span>${venta.VentaReciente.idV}</span></p>
    </div>`;
    const ventasContainer=document.getElementById("ClientesContainer");
    ventasContainer.innerHTML=detallesVentaHtml;
}

//Funcion para mostrar todos los clientes
function mostrarClientes()
{
    const ventasContainer=document.getElementById("ClientesContainer");
    ventasContainer.innerHTML="";
    for(const clienteItem of venta)
    {
        const detalleClienteHtml=`
        <div id="DetalleClientes">
            <h2>Id:<br> <span>${clienteItem.id}</span></h2>
            <p><strong>Nombre: </strong><span>${clienteItem.Nombre}</span></p>
            <p><strong>Apellido: </strong><span>${clienteItem.Apellido}</span></p>
            <p><strong>Dirección: </strong><span>${clienteItem.Direccion}</span></p>
            <p><strong>Correo: </strong><span>${clienteItem.Correo}</span></p>
            <p><strong>Teléfono: </strong><span>${clienteItem.Telefono}</span></p>
         </div>
        <div id="VentaReciente">
            <h2>Ventas recientes</h2>
            <p><span>${clienteItem.VentaReciente.idV}</span></p>
        </div>`;
        ventasContainer.innerHTML += detalleClienteHtml;
    }
}
    

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