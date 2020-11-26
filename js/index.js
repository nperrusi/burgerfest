//ACTIVA JQUERY DSP DE CARGAR HTML
$(document).ready( () => {
  //EVENTO SOBRE BOTÓN INICIAR PEDIDO
  $("#iniciarPedido").click(iniciarPedido);
  //EVENTO SOBRE BOTÓN CONFIRMAR PEDIDO
  $("#confirmarPedido").click(confirmarPedido);
  //EVENTO SOBRE INPUT DÍAS Y HORARIOS DE ATENCIÓN
  $("#diasYhorarios").click(diasYhorarios);
  //EVENTO SOBRE INPUT PROMOCIONES SEMANALES
  $("#contactoPromos").click(contactoPromos);
  //EVENTO SOBRE INPUT COSTO ENVÍO
  $("#datosUsuario").click(datosUsuario);
  //EVENTO SOBRE REDES SOCIALES
  $("ul li").mousedown(muestraMensaje);
     
})

//SE EJECUTA SOBRE BOTÓN DE INICIAR PEDIDO
function iniciarPedido(){
  $("#formularioPedido").fadeIn();
}
//SE EJECUTA SOBRE BOTÓN DE CONFIRMAR PEDIDO
function confirmarPedido(){
  $("#formularioPedido").fadeOut();

  var Nombre = $('#nombre').val();
  var Direccion = $('#direccion').val();
  var Hamburguesa = $('input:radio[name=opcion1]:checked').val();
  var Ingredientes = $('select[id=ingredientes]').val();
  var Aderezos = $('select[id=aderezos]').val();
  var Pan = $('input:radio[name=opcion2]:checked').val();
  var Papas = $('input:radio[name=opcion3]:checked').val();
  var Bebidas = $('input:radio[name=opcion4]:checked').val();
  var Efectivo = $('input:checkbox[name=opcion5]:checked').val();
  
  //OBJETO CONSTRUCTOR
  function Cliente(elNombre,laCalleAltura,laDemora){
    this.Nombre = elNombre
    this.Direccion = laCalleAltura
    this.Tiempo = laDemora
  
    this.Confirmacion = function Confirmar () {alert(`¡Gracias por tu compra, ${this.Nombre}!. Estamos llevando tu pedido hacia ${this.Direccion}, lo vas a recibir en ${this.Tiempo} minutos aproximadamente.`)}
  }
  var Pedido1 = new Cliente(Nombre,Direccion,50)
  Pedido1.Confirmacion()
  
  //CREA ELEMENTO, ASIGNA TEXTO Y AGREGA A PÁGINA
  var mensaje = document.createElement('p')

  mensaje.innerHTML = "Detalle de tu orden: Hamburguesa "+Hamburguesa+" "+Ingredientes+", "+Aderezos+" en pan artesanal "+Pan+". Acompañás con papas "+Papas+" y "+Bebidas+" "+Efectivo
  
  $("#mensajeSobrePedido").append(mensaje)
}

//ACCEDE A NODO, OBTIENE DATOS, CREA ELEMENTO, ASIGNA TEXTO Y AGREGA A PÁGINA  
function datosUsuario(){
  var direccion = $('#direccionUsuario').val();
  var barrio = $('#barrioUsuario').val();
  var telefono = $('#telefonoUsuario').val();
  var mensaje = document.createElement('p')

  mensaje.innerHTML = "El envío a " + direccion + " en " + barrio + " tiene un costo de $150. Una vez realizado tu pedido, te confirmamos la demora al " + telefono

  $("#mensajeSobreEnvio").append(mensaje)
}

//SE EJECUTA MEDIANTE EVENTO JQ - FUNCIÓN MUESTRA/OCULTA DÍAS Y HORARIOS DE ATENCIÓN
function diasYhorarios(){
  $("#mostrarDyH").slideToggle(300);
}  

//SE REEMPLAZÓ POR FUNCIÓN SLIDETOGGLE
//  var dias = ["martes a jueves de 19 a 23hs", "viernes a domingo de 19 a 01hs","lunes CERRADO"];

//  for(var i=0; i<3; i++) {
//    alert("Días y horarios de atención: " + dias[i]);
//  }
//}

//SE EJECUTA MEDIANTE EVENTO JQ - ALERTA SALIR DE NUESTRA PÁGINA
function muestraMensaje(){
  alert("Este botón te redirige a una página externa")
}

//SE EJECUTA MEDIANTE EVENTO JQ SOBRE INPUT - ALMACENAMIENTO LOCAL DE DATOS PARA ENVÍO DE PROMOCIONES
function contactoPromos(){
  localStorage.setItem('Correo',prompt('Ingresá tu correo electrónico'))
  localStorage.setItem('Telefono',prompt('Ingresá tu número de WhatsApp'))
}

console.log(localStorage.getItem('Correo'))
console.log(localStorage.getItem('Telefono'))

//LISTA DE PRODUCTOS
var listaProductos = ["burgerSimple","burgerDoble","pan","ingredientes","aderezos","papas","bebidas"];
//INCORPORA NUEVO PRODUCTO AL LISTADO Y CONVIERTE A MAYÚSCULAS
listaProductos.push("postre");
  console.log("Nuestros productos: " + listaProductos.join("/**/").toUpperCase());

//LISTA DE PRECIOS
var burgerSimple = 250;
var burgerDoble = 450;
var pan = 150;
var ingredientes = 100;
var aderezos = 50;
var ninguno = 0;
var papas = 200;
var bebidas = 150;
var postre = 200;

//SUMA PRODUCTOS PARA COSTEAR PEDIDOS
function ingresarPedido(producto1,producto2,producto3,producto4,producto5,producto6){
  var resultado = producto1 + producto2 + producto3 + producto4 + producto5 + producto6;
    console.log("El total de tu compra es $" + resultado);
}

ingresarPedido(burgerDoble,pan,ingredientes,aderezos,papas,bebidas);
ingresarPedido(burgerSimple,pan,aderezos,ninguno,papas,postre);
ingresarPedido(burgerDoble,pan,burgerDoble,pan,papas,papas);

//OBJETO CONSTRUCTOR PARA BASE DE DATOS SOBRE FACTURACIÓN
function Pedido(nombreCompleto,direccionEntrega,telefonoContacto,ventaTotal,medioPago,fechaOperacion){
  this.Nombre = nombreCompleto;
  this.Direccion = direccionEntrega;
  this.Telefono = telefonoContacto;
  this.Venta = ventaTotal;
  this.Medio = medioPago;
  this.Fecha = fechaOperacion;

  this.envioFactura = function Facturar () {console.log(`Señor/a ${this.Nombre}, hacemos envio de su factura correspondiente a la compra con fecha ${this.Fecha} por el importe total de ${this.Venta} abonados con ${this.Medio} en el domicilio sito en ${this.Direccion}`)}
}

var Cliente1 = new Pedido("Norberto Migueles","Colombres 123","1522334455","$1100","Efectivo","07.11.2020")
var Cliente2 = new Pedido("Sandro Morales","Camarones 345","1566335522","$850","Debito","07.11.2020")
var Cliente3 = new Pedido("Javier Pirelli","Av. Pueyrredon 1150","1588217743","$1600","Credito","07.11.2020")

Cliente1.envioFactura()
Cliente2.envioFactura()
Cliente3.envioFactura()

//CONVERSIÓN A JSON
var Cliente1JSON = JSON.stringify(Cliente1)
var Cliente2JSON = JSON.stringify(Cliente2)
var Cliente3JSON = JSON.stringify(Cliente3)

console.log(Cliente1JSON)
console.log(Cliente2JSON)
console.log(Cliente3JSON)