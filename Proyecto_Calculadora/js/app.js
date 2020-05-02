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

	//eventos

	uno.onclick = function(e){
		if(resultado.innerHTML == "0"){
			resultado.textContent = "1";
		}else{
			resultado.textContent += "1";
		}

		if(resultado.textContent.length <= 8){
			//operandoA = resultado.textContent;
			operandoA = resultado.textContent.slice(0,8); 
		}
	}
	dos.onclick = function(e){
	
		if(resultado.innerHTML == "0"){
			resultado.textContent = "2";
		}else{
			resultado.textContent += "2";
		}
	}
	tres.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "3";
		}else{
			resultado.textContent += "3";
		}
	}
	cuatro.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "4";
		}else{
			resultado.textContent += "4";
		}
	}
	cinco.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "5";
		}else{
			resultado.textContent += "5";
		}
	}
	seis.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "6";
		}else{
			resultado.textContent += "6";
		}
	}
	siete.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "7";
		}else{
			resultado.textContent += "7";
		}
	}
	ocho.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "8";
		}else{
			resultado.textContent += "8";
		}
	}
	nueve.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "9";
		}else{
			resultado.textContent += "9";
		}
	}
	cero.onclick = function(e){
		
		if(resultado.innerHTML == "0"){
			resultado.textContent = "0";
		}else{
			resultado.textContent += "0";
		}
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
		resolver();
	}

	//metodos

	function limpiar(){
		resultado.textContent = "";
	}
	function resetear(){
		resultado.textContent = 0;
		operandoA =0;
		operandoB = 0;
		operacion = "";
	}



	function resolver(){
		var res = 0;
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
		resetear();
		resultado.textContent = res;
	}

}


init();

