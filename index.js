const formTicket = document.getElementById("formTicket");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const btnBorrar = document.getElementById("btnBorrar");
const btnResumen = document.getElementById("btnResumen");
const totPagar = document.getElementById("totPagar");


btnBorrar.addEventListener("click", ()=>{
    formTicket.reset();
    totPagar.textContent = "";
})


btnResumen.addEventListener("click",()=>{
    let categoriaSelected = Number(categoria.value);
    let cantidadSelected = cantidad.value;
    monto = cantidadSelected * 200;
    montoDesc = aplicarDescuento(monto,categoriaSelected);
    totPagar.textContent = montoDesc;
})

function aplicarDescuento(monto, categoria){
    switch (categoria){
        case 1:
            return monto * 0.2;
        case 2:
            return monto * 0.6;
        case 3:
            return monto * 0.8;
    }

}