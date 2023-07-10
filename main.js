//alert("hola")

const input= document.querySelector('#cantidad_deposito')
const buttonDeposito= document.querySelector('#boton_deposito')
const tagDineroEnCuenta= document.querySelector('#tag_cuenta')
const buttonRetiro= document.querySelector('#boton_retiro')
// div completo
const notification= document.querySelector('#notification')
// se ve el dato
const notificationSpan= document.querySelector('#notification span')
const saludo = document.querySelector("#saludo")
const cerrar = document.querySelector("#cerrar")


let cuentaPersonal= null

// const cuentaPersonal={
//     saldo :0,
//     nombre: "Carlos",
//     cuenta: "321123",
//     password:"123"
// }


console.log({
    input,
    buttonDeposito,
    tagDineroEnCuenta
})

//console.log({saldo:cuentaPersonal.saldo})
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
localStorage.setItem('saldo',resultado)

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

if (numerDeposito>saldo){
    notification.classList.remove('hidden')
    notificationSpan.innerHTML="<h3>saldo insuficiente</h3>"
    resetNotification()
    return
}
// sumarlo con el deposito
const resultado= saldo-numerDeposito 
// mostrar en elemento
//tag la cantidad que el usuario tiene en su cuenta
tagDineroEnCuenta.innerText=resultado
// actualizar el saldo al objeto
cuentaPersonal.saldo=resultado
localStorage.setItem('saldo',resultado)

})

function resetNotification(){
    setTimeout(()=>{
        //notification.classList.add('hidden') // la adiciona
        notification.classList.toggle('hidden') // si existe la quita si no la pone
    },3000)
}
// se ejecuta cuando se cargo todo el DOM
// this.sessionStorage
addEventListener('DOMContentLoaded',function(){
    // hidratar el estado
    const currentCuenta= localStorage.getItem('currentCuenta')
    const cuentaParse = JSON.parse(currentCuenta)
    cuentaPersonal = cuentaParse
    saludo.innerHTML="<h1>"+cuentaParse.nombre+" </h1>"

    const saldoGuardado= localStorage.getItem('saldo')
    // guardarlo en el objeto de la cuenta
    cuentaPersonal.saldo = Number(saldoGuardado)
    // reflejarlo en el tag del dinero
    tagDineroEnCuenta.innerHTML=saldoGuardado
   
} )

cerrar.addEventListener('click', function(){
    localStorage.clear()
    window.location="index.html"
})

// VALIDAR   QUE LA CANTIDAD NO SUPERE EL SALDO
// LIMPIAR EL INPUT AL EJECUTAR
// CONSERVAR EL DINERO EN CUENTA
// LOCAL STORAGE + EVENTO DEL DOM
