function validateForm(){
	//Nombre
	valnom = document.getElementById("name").value;
	if( valnom == null || valnom.length == 0 || /^\s+$/.test(valnom) ) {
		alert("¡¡No olvide ingresar su nombre!!");
	}	
	else if (/^[A-Za-z]*$/.test(valnom) == false || valnom.substring(0,1) ==valnom.substring(0,1).toUpperCase() == false )  {  
		alert ("Su nombre no puede tener numeros y debe comenzar con mayuscula");  
	} 
	else { }


	//Apellido
	valape = document.getElementById("lastname").value;
	if( valape == null || valape.length == 0 || /^\s+$/.test(valape) ) {
		alert("¡¡No olvide ingresar su apellido!!");
	}
	else if (/^[A-Za-z]*$/.test(valape) == false || valape.substring(0,1) == valape.substring(0,1).toUpperCase() == false )  {  
		alert ("Su apellido no puede tener numeros y debe comenzar con mayuscula");  
	} 
	else { }


	//Email
	valemail = document.getElementById("input-email").value;
	if( !(/\S+@\S+\.\S+/.test(valemail)) ) {
		alert("Correo no valido");
	}

	//Password
	valpass = document.getElementById("input-password").value;
	if( valpass == null || valpass.length < 6 || /^\s+$/.test(valpass)) {
		alert("Su password debe tener minimo 6 caracteres");
	}
	if (valpass==="password" || valpass==="123456" || valpass==="098754") {
		alert("Su password no puede ser 'password', '123456' ni '098754'")
	}

	//Tipo de Bici
	valbici= document.querySelector("select").value;
	if ( valbici == null||valbici == 0) {
        alert("Elija su tipo de bici");
    }


}
