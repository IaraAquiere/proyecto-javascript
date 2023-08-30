function saludar() {
    alert("Bienvenidos al cajero automatico!!")
}


function ingresarnombre() {
    let nombreUsuario = prompt("ingrese su nombre")

    if (nombreUsuario == "") {
        alert("no ingresaste tu nombre aun");
        nombreUsuario = prompt("ingrese su Nombre")
        alert("Bienvenido/a, " + nombreUsuario)
    }
    else {
        alert("Bienvenido, " + nombreUsuario);
    }

    console.log("nombre:" + nombreUsuario);

    return nombreUsuario;
}

function ddocumento() {
    let documento = parseFloat(prompt("ingrese su DNI:"))
    console.log("documento:" + documento);

    return documento;
}

function elegirtransaccion() {
    let elegiropcion = prompt("ingrese el tipo de transaccion a realizar \n- Extraccion de dinero \n- otro")
    console.log("opcion elegida" + elegiropcion);

    return elegiropcion;
}

function extraccion() {
    let dinero = parseFloat(prompt("ingrese el monto a extraer: (Max: $" + extraccionmax + ")"));
    if (elegiropcion = "Extraccion de dinero") {
        opcionelegida = "extraccion de dinero"

        while (dinero > extraccionmax) {
            alert("Excede el monto maximo de extraccion")
            dinero = parseFloat(prompt("ingrese el monto a extraer: (Max: $" + extraccionmax + ")"));
        }
        console.log("El monto ingresado a extraer es:" + dinero);
    }
    else if (elegiropcion = "otro") {
    }

    console.log("Usted eligio la opcion:" + opcionelegida);

    return dinero;
}

function saldoquehay() {
    let saldo = prompt("ingrese su saldo actual")

    console.log("el saldo actual es de:" + saldo);

    return saldo;
}
