$(document).ready(function() {
  var mobile = $('.mobile-input');
  var next = $('.next');
  var maxDigits = 10;

  /* Función de validación de sólo números*/
  mobile.on('input', function() {
    this.value = (this.value + '').replace(/[^0-9]/g, '');
  });

  /* Función validación cantidad de caracteres*/ 
  mobile.keyup(function() {
    if ($(this).val().length === maxDigits) {
      next.attr('disabled', false);
    } else {
      next.attr('disabled', true);
    }
  });

  /* Probando código aleatorio */ 
  next.on('click', function(event) {
    event.preventDefault();
    var numberRandom = Math.floor(Math.random() * 600);
    var codeRandom = 'LAB-' + numberRandom;
    alert('Tu código: ' + codeRandom);
    localStorage.labCode = numberRandom;
    window.location.href = 'verifycode.html';
  });
});