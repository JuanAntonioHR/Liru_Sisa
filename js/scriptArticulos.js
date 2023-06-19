window.onload=init;

function init()
{
    if(localStorage.getItem('token') == 1) {
        mostrarArticulos();

        const searchInput=document.getElementById("BuscarArticulo");
        searchInput.addEventListener("keydown",function(event)
        {
            if(event.key == "Enter")
            {
                buscarArticulo();
            }
        })
    } else {
        window.location.href = 'InicioSesion.html';
    }
}

function logout()
{
    localStorage.removeItem('token');
    window.location.href='InicioSesion.html';
}

const Articulo=
[
    {
        Id:1,
        Nombre:"Pepperoni clásica",
        Descripcion:"Pizza de peperoni clásica",
        Precioventa: 300,
        Preciocompra: 100,
        Proveedor:"Sucursal avenida de la luz",
        Cantidad: 2,
        Inventario:{
            cantidad:100
        }
    },
    {
        Id:2,
        Nombre:"Hawaiana clásica",
        Descripcion:"Pizza hawaiana clásica",
        Precioventa: 400,
        Preciocompra: 200,
        Proveedor:"Sucursal Pirineos",
        Cantidad: 1,
        Inventario:{
            cantidad:100
        }
    }
]

//Mostrar detalles de los artículos
function mostrarDetallesArticulo(Articulo)
{
    const DetallesArticulo=`
    <div class="articulos-card-item">
        <div id="DetallesArticulo">
            <h2>Id: <span>${Articulo.Id}</span></h2>
            <p><strong>Nombre: </strong><span>${Articulo.Nombre}</span></p>
            <p><strong>Descripción: </strong><span>${Articulo.Descripcion}</span></p>
            <p><strong>Precio de venta: </strong><span>${Articulo.Precioventa}</span></p>
            <p><strong>Precio de compra: </strong><span>${Articulo.Preciocompra}</span></p>
            <p><strong>Proveedor: </strong><span>${Articulo.Proveedor}</span></p>
            <p><strong>Cantidad: </strong><span>${Articulo.Cantidad}</span></p>
        </div>
        <div id="cantidad-inventario">
            <h2>Cantidad en Inventario</h2>
            <p><span>${Articulo.Inventario.cantidad}<span></p>
        </div>
        
    </div>`;
    const ArticuloContainer=document.getElementById("ArticuloContainer");
    ArticuloContainer.innerHTML=DetallesArticulo;
}

function mostrarArticulos()
{
    const ArticuloContainer=document.getElementById("ArticuloContainer");
    ArticuloContainer.innerHTML="";
    for(const articuloItem of Articulo)
    {
        const detalleArticuloHtml= `
        <div class="articulos-card-item">
            <div id="DetallesArticulo">
                <h2>Id: <span>${articuloItem.Id}</span></h2>
                <p><strong>Nombre: </strong><span>${articuloItem.Nombre}</span></p>
                <p><strong>Descripción: </strong><span>${articuloItem.Descripcion}</span></p>
                <p><strong>Precio de venta: </strong><span>${articuloItem.Precioventa}</span></p>
                <p><strong>Precio de compra: </strong><span>${articuloItem.Preciocompra}</span></p>
                <p><strong>Proveedor: </strong><span>${articuloItem.Proveedor}</span></p>
                <p><strong>Cantidad: </strong><span>${articuloItem.Cantidad}</span></p>
            </div>
            <div id="cantidad-inventario">
                <h2>Cantidad en Inventario</h2>
                <p><span>${articuloItem.Inventario.cantidad}<span></p>
            </div>
        </div>`;
        ArticuloContainer.innerHTML += detalleArticuloHtml;
    }
}


function buscarArticulo()
{
    const searchInput =document.getElementById("BuscarArticulo").value;
    const ArticuloEncontrado=Articulo.find(Articulo => Articulo.Id == searchInput);

    if(ArticuloEncontrado)
    {
        mostrarDetallesArticulo(ArticuloEncontrado);
    }
    else
    {
        alert("No se encontró ningun artículo con ese id");
    } 
}