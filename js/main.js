window.addEventListener('load', function(){

	var name = document.getElementById("name");
	var lastName = document.getElementById("lastname");
	var email = document.getElementById("input-email");
	var password = document.getElementById("password");
	var mensaje = document.getElementById("mensaje");
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

	    var textoMasyuscula = function(){

	    	if(this.getAttribute("type") == "text"){

	          var arrDato = this.value.split(" ");
	          var datoConMayusculas = "";
	          for(var i = 0; i<arrDato.length; i++){
	            datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
	          }
	          this.value=datoConMayusculas;
	          
	        }
	    }

	    name.onkeypress = soloLetras;
		lastname.onkeypress = soloLetras;
})

	function validateForm(){

		var name = document.getElementById("name");
		var lastName = document.getElementById("lastname");
		var email = document.getElementById("input-email");
		var password = document.getElementById("password");
		var mensaje = document.getElementById("mensaje");
		var select = document.getElementsByClassName("form-group input-box");
		
	
	    if(name != ""){

	    	for(var i = 0; i< name.length; i++){
	        name[i].onblur = textoMasyuscula;
	      }

	    } else{

	    	mensaje.innerText = "Llenar campo nombre";
	    }

	    if(lastName != ""){

	    	for(var i = 0; i< lastName.length; i++){
	        lastName[i].onblur = textoMasyuscula;
	      	}  

	    } else{

	    	mensaje.innerText = "Llenar campo apellido";
	    }


		function validarEmail( email ) {
		    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if ( !expr.test(email) )
		        mensaje.innerText = "El correo debe tener un @ y .";
		}

		validarEmail( email.value );


}




