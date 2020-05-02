//variables globales
var operandoA;
var operandoB;
var operacion;

function init(){
	
	//variables

	var resultado = document.getElementById('display');
	var reset = document.getElementById('on');
	var suma = document.getElementById('mas');
	var resta = document.getElementById('menos');
	var multiplicacion = document.getElementById('por');
	var division = document.getElementById('dividido');
	var igual = document.getElementById('igual');
	var signo = document.getElementById('sign');/-----///
	var punto = document.getElementById('punto');
	var cero = document.getElementById('0');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');

	//EVENTOS

	uno.onclick = function(e){
		if(resultado.innerHTML == "0"){
			resultado.textContent = "1";
		}else{
			resultado.textContent += "1";
		}

		mostrar("1");
	}
	dos.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "2";
		}else{
			resultado.textContent += "2";
		}
		mostrar("2");
	
	}
	tres.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "3";
		}else{
			resultado.textContent += "3";
		}
		mostrar("3");
	}
	cuatro.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "4";
		}else{
			resultado.textContent += "4";
		}
		mostrar("4");
	}
	cinco.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "5";
		}else{
			resultado.textContent += "5";
		}
		mostrar("5");
	}
	seis.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "6";
		}else{
			resultado.textContent += "6";
		}
		mostrar("6");
	}
	siete.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "7";
		}else{
			resultado.textContent += "7";
		}
		mostrar("7");
	}
	ocho.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "8";
		}else{
			resultado.textContent += "8";
		}
		mostrar("8");
	}
	nueve.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "9";
		}else{
			resultado.textContent += "9";
		}
		mostrar("9");
	}
	cero.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "0";
		}else{
			resultado.textContent += "0";
		}
		mostrar("0");
	}

	reset.onclick= function(e){
		resetear();
	}

	punto.onclick= function(e){
		
		if(resultado.innerHTML.indexOf(".") == -1){
			resultado.textContent += ".";
		}
	}

	signo.onclick= function(e){

		if(resultado.textContent.indexOf("-") == -1){
			operandoA = resultado.textContent;
			resultado.textContent = "-" + operandoA;
		}else{
			resultado.textContent = operandoA;
		}
	}

//eventos de "onclick" que escucha cada vez que se da click al icono del teclado de la calculadora
	suma.onclick= function(e){
		operandoA = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick= function(e){
		operandoA = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick= function(e){
		operandoA = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick= function(e){
		operandoA = resultado.textContent;
		operacion = "%";
		limpiar();
	}
	igual.onclick= function(e){
		operandoB = resultado.textContent;
		//mostrarResultado();
		resolver();
	}


	//-----------metodos------------------//

//Funciones que permiten eliminar todo el contenido de la pantalla
// y reiniciar la calculadora

	function limpiar(){
		resultado.textContent = "";
	}

	function resetear(){
		resultado.textContent = 0;
		operandoA =0;
		operandoB = 0;
		operacion = "";
	}
/*---------------------------------------------*/

//funcion que permite contar el numeros de digitos 
//que esten en la pantalla  y borrar si llega a "8"

	function mostrar(num){
		if(resultado.textContent.length < 8){
			if(resultado.innerHTML =="0"){
				resultado.textContent = num;
			}
		}else{
			resultado.textContent = "0";
		}
	}
//---------------------------------------------------------//


//Funcion que permite efectuar todas las operaciones basicas de la calculadora

	function resolver(){
		var res = 0;//variable que me guarda los resultados

		switch(operacion){
			case "+":
			res = parseFloat(operandoA) + parseFloat(operandoB);
			break;
			case "-":
			res = parseFloat(operandoA) - parseFloat(operandoB);
			break;
			case "*":
			res = parseFloat(operandoA) * parseFloat(operandoB);
			break;
			case "%":
			res = parseFloat(operandoA) % parseFloat(operandoB);
			break;
		}
		resetear();//esta linea invoca la funcion de reiniciar la calculadora
		resultado.textContent = res.toString().substring(0,8);//esta linea realiza una conversion del resultado a texto para mostralo en pantalla hasta max 8 num.
	}

}


init();

