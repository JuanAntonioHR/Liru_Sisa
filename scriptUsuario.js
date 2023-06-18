window.onload = init;

function init() {
  if(localStorage.getItem('token') == 1) {
    MostrarVentas();
    
  } else {
    window.location.href = 'InicioSesion.html';
  }
}

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'InicioSesion.html';
}

function actualizarDatos() {
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;

  //Guarda los datos en el localStorage
  localStorage.setItem("correo", correo);
  localStorage.setItem("telefono", telefono);

  alert('Datos modificados.');
}

//Obtiene los datos guardados en el localStorage al recargar la pagina
window.addEventListener("load", function() {
  var correoGuardado = localStorage.getItem("correo");
  var telefonoGuardado = localStorage.getItem("telefono");

  //Verifica si hay datos guardados y actualizar los campos correspondientes
  if (correoGuardado && telefonoGuardado) {
    document.getElementById("correo").value = correoGuardado;
    document.getElementById("telefono").value = telefonoGuardado;
  }
});

const Venta=[
    {
        Id:1,
        Dia:"16-04-23",
        Hora:"11:29 a.m",
    },
    {
        Id:2,
        Dia:"16-04-23",
        Hora:"11:40 a.m",
    }
    
]

function MostrarVentas()
{
    const VentaContainer=document.getElementById("ventaContainer");
    VentaContainer.innerHTML="";
    for(const ventaItem of Venta)
    {
        const detalleVentaHtml=`
        <div class="perfil-ventas-card-item">
            <div id="DetallesVenta">
                <h2>Id: <span>${ventaItem.Id}</span></h2>
                <p><strong>Día y Hora: </strong><span>${ventaItem.Dia}, ${ventaItem.Hora}</span></p>
            </div>  
        </div>`;
        VentaContainer.innerHTML += detalleVentaHtml;
    }
   
}


