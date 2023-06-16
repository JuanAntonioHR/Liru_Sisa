window.onload=init;

function init()
{
    if(localStorage.getItem('token') == 1) {
        mostrarProveedores();

        const searchInput=document.getElementById("BuscarProveedor");
        searchInput.addEventListener("keydown",function(event)
        {
            if(event.key == "Enter")
            {
                buscarProveedor();
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

const Proveedor=[
    {
        id:1,
        Nombre:"Pizza Napolitana",
        Direccion:"Ronda Ander,6, Entre suelo 6°",
        Correo:"pizzanapolitana@email.com",
        Telefono:"001-138-68-82",
        CompraReciente:{
            idCompra:1
        }
    },
    {
        id:2,
        Nombre:"Coca-Cola",
        Direccion:"Ronda Ander,6, Entre suelo 6°",
        Correo:"cocacola@email.com",
        Telefono:"001-138-68-82",
        CompraReciente:{
            idCompra:2
        }
    }
]

//Función para mostrar los detalles de los clientes 
function mostrarDetallesProveedor(Proveedor)
{
    const DetallesProveedor=`
    <div class="proveedores-card-item">
        <div id="DetallesProveedor">
            <h2>Id: <span>${Proveedor.id}</span></h2>
            <p><strong>Nombre: </strong><span>${Proveedor.Nombre}</span></p>
            <p><strong>Dirección: </strong><span>${Proveedor.Direccion}</span></p>
            <p><strong>Correo: </strong><span>${Proveedor.Correo}</span></p>
            <p><strong>Teléfono: </strong><span>${Proveedor.Telefono}<span></p>
        </div>
        <div id="CompraReciente">
            <h2>Compras recientes</h2>
            <p><span>${Proveedor.CompraReciente.idCompra}</p>
        </div>
    </div>`;
    const ProveedorContainer=document.getElementById("ProveedorContainer");
    ProveedorContainer.innerHTML=DetallesProveedor;
}

function mostrarProveedores()
{
    const ProveedorContainer=document.getElementById("ProveedorContainer");
    ProveedorContainer.innerHTML="";
    for(const proveedorItem of Proveedor)
    {
        const detelleProveedorHtml=`
        <div class="proveedores-card-item">
            <div id="DetallesProveedor">
                <h2>Id: <span>${proveedorItem.id}</span></h2>
                <p><strong>Nombre: </strong><span>${proveedorItem.Nombre}</span></p>
                <p><strong>Dirección: </strong><span>${proveedorItem.Direccion}</span></p>
                <p><strong>Correo: </strong><span>${proveedorItem.Correo}</span></p>
                <p><strong>Teléfono: </strong><span>${proveedorItem.Telefono}<span></p>
            </div>
            <div id="CompraReciente">
                <h2>Compras recientes</h2>
                <p><span>${proveedorItem.CompraReciente.idCompra}</p>
            </div>
        </div>`;
        ProveedorContainer.innerHTML += detelleProveedorHtml;
    }
}


function buscarProveedor()
{
    const searchInput =document.getElementById("BuscarProveedor").value;
    const proveedorEncontrado=Proveedor.find(Proveedor => Proveedor.id == searchInput);

    if(proveedorEncontrado)
    {
        mostrarDetallesProveedor(proveedorEncontrado);
    }
    else
    {
        alert("No se encontró ningun proveedor con ese id");
    }
}