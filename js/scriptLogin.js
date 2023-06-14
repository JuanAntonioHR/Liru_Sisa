document.querySelector('.Boton-inicio').addEventListener('click', function() {
    var usuarioInput = document.querySelector('.Usuario');
    var contraseñaInput = document.querySelector('.Contraseña');
    
    var usuario = usuarioInput.value;
    var contraseña = contraseñaInput.value;
    
    if (usuario === '000001' && contraseña === '12345678') {
      var token = '1';
      localStorage.setItem('token', token);
      window.location.href = 'Menu_Inicio.html';
    } else {
      alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});