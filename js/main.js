window.addEventListener('load', function(){

	var name = document.getElementById("name");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("input-password");
	var mensaje = document.getElementById("mensaje");
	var inputs = document.getElementsByClassName("form-control");
	var select = document.getElementsByClassName("form-group input-box");


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

		var comentario = function(){
			 if(this.value.trim().length==0){
				 this.value="";
				 this.nextElementSibling.innerText="*Este elemento es obligatorio" ;
			 } else {
				 this.nextElementSibling.innerText="" ;
			 }

			 if(this.getAttribute("type") == "text"){

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

		 for(var i = 0; i< inputs.length; i++){
			 console.log(inputs[i]);
			  if(i == 0 || i == 1){
					inputs[0].onblur = comentario;
					inputs[1].onblur = comentario;
				} else if(i == 2){

					 function validarEmail( email ) {
					     var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					     if ( !expr.test(email) )
					         inputs[2].onblur = comentario ;
					 }

					 validarEmail( email.value );

				}

		 }
})

	function validateForm(){}

		// var name = document.getElementById("name");
		// var lastName = document.getElementById("lastname");
		// var email = document.getElementById("input-email");
		// var password = document.getElementById("password");
		// var mensaje = document.getElementById("mensaje");
		// var select = document.getElementsByClassName("form-group input-box");
		//
		//
	  //   if(name != ""){
		//
	  //   	for(var i = 0; i< name.length; i++){
	  //       name[i].onblur = textoMasyuscula;
	  //     }
		//
	  //   } else{
		//
	  //   	mensaje.innerText = "Llenar campo nombre";
	  //   }
		//
	  //   if(lastName != ""){
		//
	  //   	for(var i = 0; i< lastName.length; i++){
	  //       lastName[i].onblur = textoMasyuscula;
	  //     	}
		//
	  //   } else{
		//
	  //   	mensaje.innerText = "Llenar campo apellido";
	  //   }
		//
		//
		// function validarEmail( email ) {
		//     var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		//     if ( !expr.test(email) )
		//         mensaje.innerText = "El correo debe tener un @ y .";
		// }
		//
		// validarEmail( email.value );
