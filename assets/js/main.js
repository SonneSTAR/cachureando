var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})


let contenedor = document.getElementById('contenedor');

const date = new Date();
const time = `${date.getHours()}:${date.getMinutes()}`
const dateset = ('0' + date.getDate()).slice(-2);
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const year = date.getFullYear();

const dateModified = `${dateset}/${month}/${year}`;

contenedor.innerHTML = `<p><strong>La fecha actual es ${dateModified} con ${time} minutos<strong/></p>`;


let evento = document.getElementsByClassName('evento');
let carrito = document.getElementById('carrito');
let card1 = document.getElementsByClassName('card-text1').value;
let calificacion = document.getElementById('calificacion');

calificacion.addEventListener('click', ()=>{
  console.log('a')
  if(calificacion >= 0 && calificacion <= 3){
    console.log(nota)
    alert('Deficiente')
  }
})

evento[0].addEventListener('click', () =>{
  console.log(card1)
  carrito.innerHTML = `<tr>
  <td>${card1}</td>
  <td>1.000</td>
  </tr>`
})
evento[1].addEventListener('click', () =>{
  console.log('asd')
  alert('hola')
})
evento[2].addEventListener('click', () =>{
  console.log('asd')
  alert('hola')
})

$(document).ready( function () {
  $('#table_id').DataTable();
} ); 



