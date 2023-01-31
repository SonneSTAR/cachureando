$(document).ready(function () {
  



  let contenedor = $('#contenedor');

  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`
  const dateset = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const dateModified = `${dateset}/${month}/${year}`;

  contenedor.html(`}<p><strong>La fecha actual es ${dateModified} con ${time} minutos<strong/></p>`);

  let calificacion_change = $('#calificacion_change');

  let MiVariable = $('#notaPagina');
  

  MiVariable.change(function () {
    if (MiVariable.val() >= 0 && MiVariable.val() <= 3) {
      calificacion_change.html('Muy Deficiente');
    }
    if (MiVariable.val() > 3 && MiVariable.val() < 5) {
      calificacion_change.html('Insuficiente');
    }
    if (MiVariable.val() >= 5 && MiVariable.val() <= 6) {
      calificacion_change.html('Suficiente');
    }
    if (MiVariable.val() > 6 && MiVariable.val() < 7) {
      calificacion_change.html('Bien');
    }
    if (MiVariable.val() > 7 && MiVariable.val() < 9) {
      calificacion_change.html('Notable');
    }
    if (MiVariable.val() >= 9 && MiVariable.val() <= 10) {
      calificacion_change.html('Sobresaliente');
    }
  });


});




