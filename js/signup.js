$(document).ready(function() {
  /* Seleccionando elementos del DOM */ 
  var $firstName = $('#inputFirstName');
  var $lastName = $('#inputLastName');
  var $email = $('#inputEmail');
  var $checked = $('input[type="checkbox"]');
  var $submit = $('button[type="submit"]');
  
  /* funciones - validaciones  */
  var validateFirstName = false;
  var validateLastName = false; 
  var validateEmail = false;
  var validateChecked = false;  
  
  /* Expresiones regulares */
  var patternLetter = /^[A-Za-záéíóúñ]{2,}([s][A-Za-záéíóúñ]{2,})+$/;
  var patternEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  /* Funciones - Activar - Desactivar botón */ 
  function activeButton() {
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      $submit.attr('disabled', false);
      $submit.attr('background-color', 'red');
    }
  }
  
  function desactiveButton() {
    $submit.attr('disabled', true);
    $submit.attr('color', 'blue');
  } 
  
  /* Asociando eventos a los elementos seleccionados */
  $firstName.on('input', function() {
    if (patternLetter.test($(this).val())) {
      validateFirstName = true;
      firstName.css({'border': '1px solid green'});
      activeButton(); 
    } else {
      validateFirstName = false;
      firstName.css({'border': '1px solid red'});
      desactiveButton(); 
    }
  });
  
  $lastName.on('input', function() {
    if (patternLetter.test($(this).val())) {
      validateLastName = true;
      lastName.css({'border': '1px solid green'});
      activeButton(); 
    } else {
      validateLastName = false;
      lastName.css({'border': '1px solid red'});
      desactiveButton(); 
    }
  });
  
  $email.on('input', function(event) {
    if (patternEmail.test($(this).val())) {
      validateEmail = true;
      email.css({'border': '1px solid green'});
      activeButton(); 
    } else {
      validateEmail = false;
      email.css({'border': '1px solid red'});
      desactiveButton();
    }
  });

  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      validateChecked = false;
      desactiveButton();
    }
  });
 
  /* Capturando información */ 
  $submit.on('click', function(event) {
    event.preventDefault();
    localStorage.firstName = $firstName.val();
    localStorage.lastName = $lastName.val();
    localStorage.email = $email.val();
    window.location.href = 'registerexit.html';
  });
});