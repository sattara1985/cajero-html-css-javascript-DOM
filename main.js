//alert("hola")

const input= document.querySelector('#cantidad_deposito')
const buttonDeposito= document.querySelector('#boton_deposito')
const tagDineroEnCuenta= document.querySelector('#tag_cuenta')
const buttonRetiro= document.querySelector('#boton_retiro')

const cuentaPersonal={
    saldo :0,
    nombre: "Carlos",
    cuenta: "321123",
    password:"123"
}


console.log({
    input,
    buttonDeposito,
    tagDineroEnCuenta
})

// eventos del usuario el listener

buttonDeposito.addEventListener('click', function(e){
    console.log(e)

// tomar la cantidad que el usuario quiere depositar
const deposito = input.value
//console.log ({deposito})
const numerDeposito = +deposito // parseInt() o number(nombrevariable)convierte el valor a numero
//console.log (typeof numerDeposito)
//saber cuanto dinero tiene en su cuenta
const saldo= cuentaPersonal.saldo
// sumarlo con el deposito
const resultado= saldo+numerDeposito 
// mostrar en elemento
//tag la cantidad que el usuario tiene en su cuenta
tagDineroEnCuenta.innerText=resultado
// actualizar el saldo al objeto
cuentaPersonal.saldo=resultado

})

buttonRetiro.addEventListener('click', function(e){
    console.log(e)

// tomar la cantidad que el usuario quiere depositar
const deposito = input.value
//console.log ({deposito})
const numerDeposito = +deposito // parseInt() o number(nombrevariable)convierte el valor a numero
//console.log (typeof numerDeposito)
//saber cuanto dinero tiene en su cuenta
const saldo= cuentaPersonal.saldo
// sumarlo con el deposito
const resultado= saldo-numerDeposito 
// mostrar en elemento
//tag la cantidad que el usuario tiene en su cuenta
tagDineroEnCuenta.innerText=resultado
// actualizar el saldo al objeto
cuentaPersonal.saldo=resultado

})

// VALIDAR   QUE LA CANTIDAD NO SUPERE EL SALDO
// LIMPIAR EL INPUT AL EJECUTAR
// CONSERVAR EL DINERO EN CUENTA
// LOCAL STORAGE + EVENTO DEL DOM
