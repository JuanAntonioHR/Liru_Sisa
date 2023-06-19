window.onload=init;

function init()
{
    if(localStorage.getItem('token') == 1) {
        MostrarVentas();
        verificarVentas();

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

function verificarVentas() {
    // Verificar si hay ventas guardadas en el localStorage
    const ventasGuardadas = localStorage.getItem('ventas');
    
    if (ventasGuardadas) {
        try {
            // Intentar parsear el contenido del localStorage como un array de objetos
            const ventasArray = JSON.parse(ventasGuardadas);
            
            // Verificar si el parseo fue exitoso y el resultado es un array
            if (Array.isArray(ventasArray)) {
                // Agregar las ventas guardadas al array Venta
                Venta.push(...ventasArray);
            }
        } catch (error) {
            console.error('Error al parsear las ventas guardadas en el localStorage:', error);
        }
    }
}



//Mostrar detalles de los artículos
function MostrarDetallesVenta(Venta)
{
    const DetallesVenta=`
    <div class="ventas-card-item">
        <div id="DetallesVenta">
            <h2>Id: <span>${Venta.Id}</span></h2>
            <p><strong>Día y Hora: </strong><span>${Venta.Dia}, ${Venta.Hora}</span></p>
            <p><strong>Total venta: </strong><span>${Venta.Total}</span></p>
            <p><strong>Estado: </strong><span>${Venta.Estado}</span></p>
        </div>
        <div id="Articulos">
            <h2>Articulos</h2>
            <p><span>${Venta.Articulos.Art1}</span></p>
            <p><span>${Venta.Articulos.Art2}</span></p>
            <p><span>${Venta.Articulos.Art3}</span></p>
        </div>
        <div id="Envio">
            <h2>Envío</h2>
            <p><Strong>Destino: </Strong><span>${Venta.Envio.Destino}<span></p>
        </div>
        
    </div>`;
    const VentaContainer=document.getElementById("ventaContainer");
    VentaContainer.innerHTML=DetallesVenta;
}

function MostrarVentas()
{
    const VentaContainer=document.getElementById("ventaContainer");
    VentaContainer.innerHTML="";
    for(const ventaItem of Venta)
    {
        const detalleVentaHtml=`
        <div class="ventas-card-item">
            <div id="DetallesVenta">
                <h2>Id: <span>${ventaItem.Id}</span></h2>
                <p><strong>Día y Hora: </strong><span>${ventaItem.Dia}, ${ventaItem.Hora}</span></p>
                <p><strong>Total venta: </strong><span>${ventaItem.Total}</span></p>
                <p><strong>Estado: </strong><span>${ventaItem.Estado}</span></p>
            </div>
            <div id="Articulos">
                <h2>Articulos</h2>
                <p><span>${ventaItem.Articulos.Art1}</span></p>
                <p><span>${ventaItem.Articulos.Art2}</span></p>
                <p><span>${ventaItem.Articulos.Art3}</span></p>
            </div>
            <div id="Envio">
                <h2>Envío</h2>
                <p><Strong>Destino: </Strong><span>${ventaItem.Envio.Destino}<span></p>
            </div>
            
        </div>`;
        VentaContainer.innerHTML += detalleVentaHtml;
    }
   
}

function buscarVenta()
{
    const searchInput=document.getElementById("BuscarVenta").value;
    const VentaEncontrada=Venta.find(Venta=>Venta.Id == searchInput);

    if(VentaEncontrada)
    {
        MostrarDetallesVenta(VentaEncontrada);
    }
    else
    {
        alert("No se encontro ninguna venta con ese id")
    }
}