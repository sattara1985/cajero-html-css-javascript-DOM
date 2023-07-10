const cuenta=document.querySelector("#cuenta")
const password=document.querySelector("#password")
const butonLogin=document.querySelector("#login")
//const cuenta=document.querySelector('cuenta')

const cuentasDeUsuario=[
    {
        saldo:0,
        nombre:"Carlos",
        cuenta:"321123",
        password:"123"
    },
    {
        saldo:98562,
        nombre:"Steven",
        cuenta:"009270",
        password:"987654321"
    },
    {
        saldo:1500,
        nombre:"Dalia",
        cuenta:"00001",
        password:"123456"
    }
]

// console.log({
//     cuenta,
//     password,
//     login
// })

butonLogin.addEventListener('click', function(){
    //alert('somos')
    const currentCuenta=cuenta.value
    const currentPassword = password.value
    // const currentPassword= password.value

    // console.log({
    //  currentPassword,         
    //  currentUser        
    //  })
    // FOR, FOReCH, FOR OF, FILTER, FIND, MAP
    for(const objeto of cuentasDeUsuario) {
        console.log(cuenta)
        if(objeto.cuenta=== currentCuenta && objeto.password=== currentPassword){
            // guardar el currentcuenta a local storgae 
            localStorage.setItem('currentCuenta', JSON.stringify(cuenta))
            //mandar al cajero
            window.location='cajero.html'
            console.log('ya entraste')
            return
        }
    }

    alert ("revisa tus credenciales")

    // buscar en el arreglo el usuario que intenta entrar
    // su existe lo dejamos netrar
    // no existe no puede entrerar revisar los accesos

})