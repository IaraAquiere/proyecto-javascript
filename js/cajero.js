//SIMULADOR DE CAJERO AUTOMATICO

const extraccionmax = 45000
const extraccionmin = 2000
let opcionelegida;

//definir nombre del usuario
let nombreUsuario = ingresarnombre();

//colocar DNI
let documento = ddocumento();

//elegir transaccion a realizar
let elegiropcion = elegirtransaccion();
let dinero = extraccion();

//saldo que tenia antes de la transaccion 
let saldo = saldoquehay();

//calculo para ver cuanto saldo queda
let saldoqueda = saldo - dinero;
alert("su saldo actual ahora es de:" + "" + saldoqueda)

console.log("Saldo:" + saldoqueda);
