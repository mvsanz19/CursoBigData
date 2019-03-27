// Variables Globales
var Display    =  document.getElementById("display"); // Variable del ElementoID Display
var cadena = ""; // Captura cadena del Display
var cad ; // Captura Cadena Display
var res;  // Calcula valor resultado
var StrCad; // Valida Cadena Resultado
var Operaciones = new Array();//Array de Operaciones 
var Operandos = new Array();//Array de Operandos
var cont = 0; // varibale contador

// Funciones Globales

// Funcion Valida Caracter Punto : Valida que si existe algun punto en la cadena no se ingrese nuevamente
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

//Funcion Valida Tamaño en la Cadena display:  Verifica que el tamaño del Display no supere los 8 caracteres
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

//Funcion Valida Cadena en Resultado : Verifica que el tamaño del resultado no supere los 8 caracteres
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

// funcion boton - o + :  verifica si ya existe en la cadena el signo -, si existe se agrega al principio sino se elimina. Verifica que no sea numero 0 el inicial
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

//  Funciones Operacion : se agrega al array Operando los numero de la Operacion y al array Operaciones la operacion aritmetica 

function AsginarOpe(Oper){
   Operandos[cont] = display.innerHTML;
   Operaciones[cont]= Oper
   limpiar();
   cont++;
}


// funciones para Limpiar, Resetear los Valores de Display  
function limpiar(){
  Display.innerHTML =""; 	  
}

// funciones para resetear los Valores iniciales y variable globales

function resetear (){
	
Display.innerHTML ="0";
Operandos= [];
Operaciones = []
cont = 0;
}

// Funcion para asignar los valores de Resultados en el Display
function asignar (Resul){
	Display.innerHTML = Resul;
}

// Funcion Resolver:  Se encarga de recorrer los array de Operaciones y Operando para realizar las operaciones artimeticas deseadas
function resolver(){
  res = 0;
  StrCad = '';
  Operandos[cont] =   display.innerHTML; 
  j = 2;
  for (var i = 0; i <  Operaciones.length; i++) 
  {
       if ((i == 0 ) && (Operaciones[0] == "+" )){
		   
		   res =   parseFloat(Operandos[0]) +   parseFloat(Operandos[1]);
	   }  
	    if ((i == 0 )&& (Operaciones[0] == "-" )){
		   
		   res =  parseFloat(Operandos[0]) - parseFloat(Operandos[1]);
		  
	   }
       if ((i == 0 )&& (Operaciones[0] == "*" )){
		   
		   res =  parseFloat(Operandos[0]) * parseFloat(Operandos[1]);
	   } 	   
	   if ((i == 0 )&& (Operaciones[0] == "/" )){
		   
		   res =  parseFloat(Operandos[0]) / parseFloat(Operandos[1]);
	   } 	
	   if (i>=1){
		 
         if (Operaciones[i] == "+" ){
			 res = res  +  parseFloat(Operandos[j]) 
			 j++;
		 }		 
		 if (Operaciones[i] == "-" ){
			 res = res  -   parseFloat(Operandos[j]) ;
			 j++;
		 }	 
		 if (Operaciones[i] == "*" ){
			 res = res  *   parseFloat(Operandos[j]) ;
			 j++;
		 }
		 if (Operaciones[i] == "/" ){
			 res = res  /  parseFloat(Operandos[j]) ;
			 j++;
		 }
		   
	   }
       
	}

	resetear();
	StrCad = res.toString();
    Display.innerHTML =ValidarTamañoRes(StrCad);
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

/*Evento Mostrar Display : se llama la funcion MostrarDisplay  enviando target del Evento*/
 eventoMostrarDisplay: function(event){
	   
    MostrarDisplay(event.target);
  },
  // Evento Sumar :  se llama a la funcion AsiganrOpe con el valor +  para llenar el array Operaciones y Operando a ejecutar
 eventoSumar : function(event){	
   AsginarOpe("+");
 },
   // Evento Restar :   se llama a la funcion AsiganrOpe con el valor - para llenar el array Operaciones y Operando a ejecutar
  eventoRestar : function(event){

    AsginarOpe("-");
 },
   // Evento Multiplicar:  se llama a la funcion AsiganrOpe con el valor * para llenar el array Operaciones y Operando a ejecutar
 eventoMultiplicar : function(event){
      AsginarOpe("*");
 },
   // Evento Division:   se llama a la funcion AsiganrOpe con el valor / para llenar el array Operaciones y Operando a ejecutar
  eventoDivision: function(event){
     AsginarOpe("/");
 },
   // Evento Igual : Se verifica si en display se tiene el numero de la ultima operacion y se llama la funcion Resolver
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
 // Evento Resetear :  Evento inicializa las variables globales y limpia el valor del display
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
	 // botonesPagina[i].onclick = this.eventoCambiaTamaño; 
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
// Instancia del objeto calculadora.
Calculadora.init();