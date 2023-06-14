window.onload = init;

function init() {
  if(localStorage.getItem('token') == 1) {

  } else {
    window.location.href = 'InicioSesion.html';
  }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'InicioSesion.html';
}