//querySelector
const heading = document.querySelector('.header__texto h2') // 1 o 0 elemento
//heading.textContent = 'nuevo heading';
console.log(heading);

//querySelectorAll
const enlaces =  document.querySelectorAll('.navegacion a')
//enlaces[0].textContent = 'si lees esto eres mmgvo';
//enlaces[0].href = 'https://i.kym-cdn.com/entries/icons/original/000/045/498/mamaguevo_glo_glo_glo.jpg';


//generar codigo html en js

//generar nuevo enlace

const nuevoenlace = document.createElement('A')

//agregar el href 
nuevoenlace.href = 'nuevoenlace.html';

//agregar texto
nuevoenlace.textContent = 'Carrito';

//agregar la clase
nuevoenlace.classList.add('navegacion__enlace');

//agregar al html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoenlace);//appendchild es para agg al html



//eventos

// console.log(1);

// window.addEventListener('load', function() { // load espera que cague todo el js, html, css todo
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3); 
// } // es lo mismo que el otro solo que directamente llama al atributo de la ventana

// document.addEventListener('DOMContentLoaded',function() {//este solo espera a que el html cargue, osea cunado escuhe que ya html cargo se ejecutara el evento de la funcion

//     console.log(4);
// } );

//pregunta para entrevista 
//el window.addevenlistener('load) va a esperar que todo cargue y despues va  a escuchar que ya cargo y se va a ejecutar el evento
//el document.addevenlistener('DOMContentLoaded') solo espera al html


window.addEventListener('scroll', scroll)

let scrolling = "scrolling";

function scroll(){
    
    console.log(scrolling)
   
    
}




//seleccionar elementos y asociarles evenetos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();


//     console.log('enviando formulario');
// } )


//eventos de los inputs y texarea
const datos = {
    Name : '',
    Email: '',
    mensaje: ''

}

const Name = document.querySelector('#Name');
const Email  = document.querySelector('#Email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.form');


Name.addEventListener('input',leertexto);
Email.addEventListener('input',leertexto);
mensaje.addEventListener('input',leertexto);
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //validar formulario
    if(datos.Name != '' && datos.Email != '' && datos.mensaje != '')
    {
        mostrarError('MENSAJE ENVIADO');
       
    }
    else{
        mostrarError('todos los campos son obligatorios')
         return; // corta el code
    }
})

function leertexto(e) {
   // console.log(e.target.value);

   datos[e.target.id] = e.target.value;
    //console.log(datos);
}

function mostrarError(mensaje) {
    const mensaje1 = document.createElement('P') 
    
    mensaje1.textContent = mensaje;

    if(mensaje === 'todos los campos son obligatorios')
        {
            mensaje1.classList.add('error');
            
        } 
   else {
        mensaje1.classList.add('noerror');
        }
    formulario.appendChild(mensaje1);

    setTimeout(() => {
        mensaje1.remove();
    }, 3000);
    
}