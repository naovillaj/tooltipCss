window.addEventListener('load', function(){

	var name = document.getElementById("name");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var mensaje = document.getElementById("mensaje");
	var inputs = document.getElementsByClassName("form-control");
	var select = document.getElementsByClassName("form-group input-box");
	var todosLosCamposLlenos = document.getElementById("todosLosCamposLlenos");


	var soloLetras = function(e){
		var codigoTecla = e.keyCode;
        if((codigoTecla>=97 && codigoTecla<=122) || codigoTecla == 241 || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 209
            || codigoTecla == 42 || codigoTecla == 250 || codigoTecla == 225 || codigoTecla == 233 || codigoTecla == 237
            || codigoTecla == 243 || codigoTecla == 32){
          return true;
        }else{
          return false;
        }
    }

    name.onkeypress = soloLetras;
    lastName.onkeypress = soloLetras;

	var comentario = function(){
			 

		 if(this.getAttribute("type") == "text"){

		 	if(this.value.trim().length==0){
			 this.value="";
			 this.nextElementSibling.style.display="block" ;
			 this.nextElementSibling.innerText="*Este elemento es obligatorio y debe cumplir con el formato establecido" ;
		 	} else {
		 	 this.nextElementSibling.style.display="none" ;
			 this.nextElementSibling.innerText="" ;

			 var arrDato = this.value.split(" ");
			 console.log(arrDato);
			 var datoConMayusculas = "";
			 for(var i = 0; i<arrDato.length; i++){
				 datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
				 console.log(datoConMayusculas);
			 }
			 this.value=datoConMayusculas;

		 	}

		 }


		 if(this.getAttribute("type") == "email"){
		 	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if ( !expr.test(this.value) ){

				this.nextElementSibling.style.display="block" ;
			 	this.nextElementSibling.innerText="*No coincide con el formato establecido (nombre@domain.com)" ;
		 	} else {
				this.nextElementSibling.style.display="none" ;
				this.nextElementSibling.innerText="" ;
				         
			}
		 }

		 if(this.getAttribute("type") == "password"){
		 	if((this.value.length<6 || this.value.length>30) || (this.value == "password" || this.value  == "123456" || this.value == "098754")){

		 		this.nextElementSibling.style.display="block" ;
			 	this.nextElementSibling.innerText="*No coincide con el formato establecido (>6 && <30 caracteres)" ;
		 	} else {
				this.nextElementSibling.style.display="none" ;
				this.nextElementSibling.innerText="" ;
				         
			}
		 }

		 if(this.getAttribute("name") == "opciones"){
		 	if(this.value == "0"){
			 	this.nextElementSibling.style.display="block" ;
				this.nextElementSibling.innerText="*Seleccionar un tipo de bicicleta" ;
				
			} else {
				this.nextElementSibling.style.display="none" ;
				this.nextElementSibling.innerText="" ;
					         
			}
		 }


}

	for(var i = 0; i< inputs.length; i++){
	        	inputs[i].onblur = comentario;
	}




});	

function validateForm(){

	var name = document.getElementById("name");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var mensaje = document.getElementById("mensaje");
	var inputs = document.getElementsByClassName("form-control");
	var select = document.getElementById("opcion");
	var todosLosCamposLlenos = document.getElementById("todosLosCamposLlenos");

	console.log(select.value);


	if(name.value == "" || lastName.value == "" || email.value == "" || password.value == "" || select.value == "0" ){
		todosLosCamposLlenos.innerText = "";
	}else{
		todosLosCamposLlenos.innerText = "Todos los campos obligatorios están llenos, revisar si están en el formato correcto";

	}


}

		
