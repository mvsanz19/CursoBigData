// Variables Globales
var Display    =  document.getElementById("display"); // Variable del ElementoID Display
var OperandoA; // Captura el primer valor en Display para al Operacion
var OperandoB; //  captura el ultimo valor en Display para realizar la operacion
var OperandoR; //  captura el Valor resultado al cambiarse de Operacion 
var Operacion=""; // Captura el tipo de Operacion + - * /
var AcumSum =0;  // Acumlador de operacion Suma
var AcumRes =0; // Acumulador de Operacion Resta
var AcumMul =1; // Acumulador de Operacion Multiplicar
var AcumDiv = 1; //Acumulador de Operacion Division
var Result = 0;  // Valor de Result de Operacion
var cadena = ""; // captura cadena del Display
var OperAnt =""; // Captura la Operacion Anterior 
var cad ; // Captura Cadena Display
var res;  // Calcula valor resultado
var StrCad; // Valida Cadena Resultado

// Funciones Globales

// Funcion Valida Caracter punto
function validarPunto (cadena) 
{	
  var val = false ;
  for (var i = 0; i < cadena.length; i++) 
  {	
    var caracter = cadena.charAt(i);
	if (caracter == ".") 
	  {
		val = true 
	  }    
   }
   if (val == false) 
     {
       cadena = cadena + "."; 
     } 
   return cadena;
}

//Funcion Valida Tamaño en la Cadena display
function ValidarTamañoCadena (cadena) 
{
  var val = false;
  if (cadena.length > 8)
  {
    val = true; 
  }else 
  {
    val = false
  }
  return val;
}

//Funcion Valida Cadena en Resultado
function ValidarTamañoRes (cadena) {
  var cad ;
  if (cadena.length > 8)
  {
    cad = cadena.substring(0,9);
  }else 
  {
    cad = cadena
  }
  return cad;
}

//  Funcion que muestra los caracteres del 0 al 9 y el carcater punto en el Display 
function MostrarDisplay (elemento)
{  var CadVal;
   var Val;
  // Valida Tamaño de la Cadena en Display
   CadVal             = Display.innerHTML;
   Val                = ValidarTamañoCadena(CadVal);
   //  Si la Cadena es mayor a 9 no se sumara mas numero a la cadena
   if (Val == false) 
   {
     //Validacion cero Inicial.  No se acumula mas 0 Iniciales a la Cadena
     if (Display.innerHTML == "0") 
	 {
	   Display.innerHTML = "";
     }    
     // Se evalua si el Caracter elegido es 0 al Nueve o el Caracter punto para acumularse y mostrarse en el Display
     switch(elemento.id) 
	 {
	   case "1": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "2": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "3": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "4": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "5": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "6": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "6": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "7": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "8": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "9": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   case "0": 
	     Display.innerHTML =  display.innerHTML + elemento.id;
	     break;
	   // Validacion de Punto.  Se evalua si ya existe un punto dentro del cadena del Display
	   case "punto" :
	     Display.innerHTML =  validarPunto(Display.innerHTML);   
	     break;
    }
   }  
}

function validarMenosMas(cadena) 
{	
  var val = false ;
   if (cadena != "0") 
   {
    for (var i = 0; i < cadena.length; i++) 
    {	
	  if (cadena.charAt(0) == "-") 
	  {
		cadena = cadena.substring(1,cadena.length);
		 val = true;
	  }    
    }
  
   if (val == false) 
     {
       cadena = "-"+ cadena ; 
     } 
   }
    asignar(cadena);
}

//  Funciones de las Operaciones Sumar, Restar, Multiplicar y Dividir
function Sumar(){
  OperandoA =  display.innerHTML ;
  AcumSum = AcumSum + parseFloat(OperandoA); 
  
  if ((Operacion == "") || (Operacion== '+')){
  limpiar();
  }else {
	  OperAnt = Operacion;
  }
  Operacion= "+"
  
}

function Restar(){
 OperandoA =  display.innerHTML ;
 AcumRes = parseFloat(OperandoA) - AcumRes;	
 
  if ((Operacion == "") || (Operacion== '-')){
  limpiar();
  }else {
	  OperAnt = Operacion;
  }
  Operacion= "-";
} 

function Multiplicar(){
 OperandoA =  display.innerHTML ;
 AcumMul   = parseFloat(OperandoA) * AcumMul;	
 
  if ((Operacion == "") || (Operacion== '*')){
  limpiar();
  }else {
	  OperAnt = Operacion;
  }
  Operacion= "*";
} 

function Division(){
 OperandoA =  display.innerHTML ;
 AcumDiv   = parseFloat(OperandoA) / AcumDiv;	
 
  if ((Operacion == "") || (Operacion== '/')){
  limpiar();
  }else {
	  OperAnt = Operacion;
  }
  Operacion= "/";
} 

// Funcion de la Validacion Division entre Cero
function ValidacionCero (numVal)
{
   if (numVal == 0) {
    Display.innerHTML ="ERROR";
  }
}

// funciones para Limpiar, Resetear los Valores de Display y de las Variables Globales
function limpiar(){
  Display.innerHTML =""; 	  
}

function resetear (){
	
Display.innerHTML ="0";
OperandoA = 0;
OperandoB = 0;
Operacion = "";
AcumSum = 0;
AcumRes = 0;
AcumMul =1;
AcumDiv = 1;
OperAnt ="="; 
}

// Funcion para asignar los valores de Resultados en el Display
function asignar (Res){
	Display.innerHTML = Res;
}

// funcion Resultado operacion Igual
function resolver(){
  res = 0;
  StrCad = '';
   switch(Operacion) {
	 case "+" :
	  res =  AcumSum + parseFloat(OperandoB) ;
	   break;
	 case "-" :
	  res = AcumRes  - parseFloat(OperandoB);
	   break;
	 case "*" :
	   res = AcumMul * parseFloat(OperandoB);
	   break;   
     case "/" :
	   res = AcumDiv / parseFloat(OperandoB);
	   break;     	   
  }
	resetear();
	StrCad = res.toString();
    Display.innerHTML = ValidarTamañoRes(StrCad);
}

// Resultado de Operacion Previa
function resolver2(){
   OperandoR = display.innerHTML;
   res = 0;
   StrCad = '';
   switch(Operacion) { 
	 case "+" :
	   res =  AcumSum + parseFloat(OperandoR) ;
	   break;
	 case "-" :
	   res = AcumRes  - parseFloat(OperandoR);
	  // res = AcumRes;
	   break;
	 case "*" :
	   res = AcumMul * parseFloat(OperandoR);
	   break;   
     case "/" :
	   ValidacionCero(parseFloat(OperandoR));
	   res = AcumDiv / parseFloat(OperandoR);
	   break;     	   
  }
      StrCad = res.toString();
      cadena  = ValidarTamañoRes(StrCad);;
       limpiar();
	   OperandoR =0;
	   asignar(cadena); 	  
}

// BEGIIIIIIN////
// Inicializacion del Programa
var Calculadora = {
init: function (){

// Comenzamos asignado al evento Asignar Botones el valor del clase tecla ya que todos los botones estan asociados a esta clase
// manejar todos los eventos de cada Boton de la Calculadora al realizar el evento onclick
 this.asignarEventosBotones('tecla');

},

// Eventos

/*  Evento Mostrar Display : este evento evaluara primeramente si existe alguna Operacion Anterior de +  - * y limpia el display /
     luego llama la funcion MostrarDisplay  enviando target del Evento*/
 eventoMostrarDisplay: function(event){
	 var val = OperAnt; 
	 switch (val) {
	   case "+":
	   limpiar();
	   OperAnt="";
	   break;
	   case "-":
	   limpiar();
	   OperAnt="";
	   break;
	   case "*":
	   limpiar();
	   OperAnt="";
	   break;
	   case "/":
	   limpiar();
	   OperAnt="";
	   break;
	   case "=":
	   limpiar();
	   OperAnt="";
	   break;
	 } 
	   
    MostrarDisplay(event.target);
  },
  // Evento Sumar :  Evalua si ya existe una operacion anterior de ser Asi llama la funcion resolver2, sino llama la funcion Sumar
 eventoSumar : function(event){	
    if (Operacion != '+' ){
		 if(Operacion!="") {
	     OperAnt = Operacion;		 
		 resolver2(); }
	 } 
	Sumar();	
 },
   // Evento Restar :  Evalua si ya existe una operacion anterior de ser Asi llama la funcion resolver2, sino llama la funcion Restar
  eventoRestar : function(event){
     if (Operacion != ""){
		 OperAnt = Operacion;
		 resolver2(); }
	 else {
     if (Operacion =="") {
	 Restar();
	 }
	 }
 },
   // Evento Multiplicar:  Evalua si ya existe una operacion anterior de ser Asi llama la funcion resolver2, sino llama la funcion Multiplicar
 eventoMultiplicar : function(event){
     if (Operacion != ""){
		 OperAnt = Operacion;
		 resolver2(); }
	 else {
     if (Operacion =="") {
	 Multiplicar();
	 }
	 }
 },
   // Evento Division:  Evalua si ya existe una operacion anterior de ser Asi llama la funcion resolver2, sino llama la funcion Division
  eventoDivision: function(event){
     if (Operacion != ""){
		 OperAnt = Operacion;
		 resolver2(); }
	 else {
     if (Operacion =="") {
	 Division();
	 }
	 }
 },
 
   // Evento Igual :  toma el ultimo valor que muestra el display si existe algun valor llama la funcion resolver
 eventoIgual : function(event){
	 
     OperandoB = display.innerHTML;
	   if (OperandoB =="") {
		alert("Ingrese Numero"); 
	   }else {
		resolver();
		
	   }
},

// Evento Resetear :  Evento inicializa las variables globales y limpia el valor del display
 eventoResetear : function(event){	 
	 resetear();
 },
 
  eventoMasMenos : function(event){	 
     cad = display.innerHTML;
	 validarMenosMas(cad);
 },
 
 
/* Evento Asignar Eventos Botones:  ubica todos los elementos asociados a la clase tecla y recorre cada elemento validando los valores del mismo por su Id
   mas, menos, por, division, igual, on, 
*/
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onclick = this.eventoMostrarDisplay;
	  if (botonesPagina[i].id  == 'mas') {
		 botonesPagina[i].onclick = this.eventoSumar; 
	  }
	  if (botonesPagina[i].id  == 'menos'){
	    botonesPagina[i].onclick = this.eventoRestar;  
	  }
	   if (botonesPagina[i].id  == 'por'){
	    botonesPagina[i].onclick = this.eventoMultiplicar;  
	  }
	  if (botonesPagina[i].id  == 'dividido'){
	    botonesPagina[i].onclick = this.eventoDivision;  
	  }
	  if (botonesPagina[i].id  == 'igual'){
	    botonesPagina[i].onclick = this.eventoIgual ;  
	  }
	  if (botonesPagina[i].id  == 'on'){
	    botonesPagina[i].onclick = this.eventoResetear;  
	  }
	   if (botonesPagina[i].id  == 'sign'){
	    botonesPagina[i].onclick = this.eventoMasMenos;  
	  }
    }
  }
  

}

Calculadora.init();