//Datos de ejemplo
window.onload=init;

function init()
{
    mostrarDetallesVenta()
}

const venta=[
    {
        id:1,
        Nombre:"Pancracio",
        Apellido:"López",
        Direccion:"Ronda Ander,6, Entre suelo 6°",
        Telefono:"442-138-68-82",
        VentaReciente: {
            idV:1
        }
    }
];

function mostrarDetallesVenta(venta)
{
    const detallesVentaHtml=`
    <div id="DetalleClientes">
        <h2>Id:<br> <span>${venta.id}</span></h2>
        <p><strong>Nombre: </strong><span>${venta.Nombre}</span></p>
        <p><strong>Apellido: </strong><span>${venta.Apellido}</span></p>
        <p><strong>Dirección: </strong></p>
        <p><strong>Correo: </strong></p>
        <p><strong>Teléfono: </strong></p>
    </div>
    <div id="VentaReciente">
        <h2>Ventas recientes</h2>
        <p>00000000001</p>
    </div>`
}
    