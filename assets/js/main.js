var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


let contenedor = document.getElementById('contenedor')

const date = new Date();
const time = `${date.getHours()}:${date.getMinutes()}`
const dateset = ('0' + date.getDate()).slice(-2);
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const year = date.getFullYear();

const dateModified = `${dateset}/${month}/${year}`;

contenedor.innerHTML = `<p><strong>La fecha actual es ${dateModified} con ${time} minutos<strong/></p>`
