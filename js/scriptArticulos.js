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
        id:1,
        Dia:'01-04-23',
        Hora:'11:29 a.m.',
        Total:'$530,250.00',
        Estado:'Pagado,Entregado',
        Art:{
            Descripcion:'Harina para pizza marca pizza Napolitana '
        },
       Envio:{
            Origen:' Av. Constituyentes Ote. 7-1, Hidalgo,  Local D 76046, Colonia, San Francisquito, 76040 Santiago de Querétaro, Qro.',
            Destino: 'Praza de Jesús, 6, 47º B'
       }
       
    },
    {
        id:2,
        Dia:'02-04-23',
        Hora:'11:30 a.m.',
        Total:'$3120.00',
        Estado:'Pagado,Entregado',
        Art:{
            Descripcion:'Pepperoni Campestre por kilo'
        },
       Envio:{
            Origen:' Av. Constituyentes Ote. 7-1, Hidalgo,  Local D 76046, Colonia, San Francisquito, 76040 Santiago de Querétaro, Qro.',
            Destino: 'Praza de Jesús, 6, 47º B'
       }
       
    }
]

//Mostrar detalles de los artículos
function mostrarDetallesArticulo(Articulo)
{
    const DetallesArticulo=`
    <div class="articulos-card-item">
        <div id="DetallesArticulo">
            <h2>Id: <span>${Articulo.id}</span></h2>
            <p><strong>Día y Hora: </strong><span>${Articulo.Dia}, ${Articulo.Hora}</span></p>
            <p><strong>Total compra: </strong><span>${Articulo.Total}</span></p>
            <p><strong>Estado: </strong><span>${Articulo.Estado}</span></p>
        </div>
        <div class="Descripcio-articulo">
            <h2>Articulos</h2>
            <p><span>${Articulo.Art.Descripcion}<span></p>
        </div>
        <div id="Envio">
            <h2>Envio</h2>
            <p><strong>Origen: </strong><span>${Articulo.Envio.Origen}</p>
            <p><strong>Destino: </strong><span>${Articulo.Envio.Destino}</p>
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
                <h2>Id: <span>${articuloItem.id}</span></h2>
                <p><strong>Día y Hora: </strong><span>${articuloItem.Dia}, ${articuloItem.Hora}</span></p>
                <p><strong>Total compra: </strong><span>${articuloItem.Total}</span></p>
                <p><strong>Estado: </strong><span>${articuloItem.Estado}</span></p>
            </div>
            <div class="Descripcio-articulo">
                <h2>Articulos</h2>
                <p><span>${articuloItem.Art.Descripcion}<span></p>
            </div>
            <div id="Envio">
                <h2>Envio</h2>
                <p><strong>Origen: </strong><span>${articuloItem.Envio.Origen}</p>
                <p><strong>Destino: </strong><span>${articuloItem.Envio.Destino}</p>
            </div>
        </div>`;
        ArticuloContainer.innerHTML += detalleArticuloHtml;
    }
}


function buscarArticulo()
{
    const searchInput =document.getElementById("BuscarArticulo").value;
    const ArticuloEncontrado=Articulo.find(Articulo => Articulo.id == searchInput);

    if(ArticuloEncontrado)
    {
        mostrarDetallesArticulo(ArticuloEncontrado);
    }
    else
    {
        alert("No se encontró ningun artículo con ese id");
    } 
}