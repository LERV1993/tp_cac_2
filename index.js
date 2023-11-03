const formTicket = document.getElementById("formTicket");
const nombre = document.getElementById("nombre");
const nombreErr = document.getElementById("nombreErr");
const apellido = document.getElementById("apellido");
const apellidoErr = document.getElementById("apellidoErr");
const email = document.getElementById("email");
const emailErr = document.getElementById("emailErr");
const cantidad = document.getElementById("cantidad");
const cantidadErr = document.getElementById("cantidadErr");
const categoria = document.getElementById("categoria");
const categoriaErr = document.getElementById("categoriaErr");
const btnBorrar = document.getElementById("btnBorrar");
const btnResumen = document.getElementById("btnResumen");
const totPagar = document.getElementById("totPagar");

let validForm = [false, false, false, false, false];


btnBorrar.addEventListener("click", () => {

    reiniciarFormulario();

})


btnResumen.addEventListener("click", () => {

    const esValido = validForm.filter(element => element == true);

    if (esValido.length == 5) {

        let categoriaSelected = Number(categoria.value);

        let cantidadSelected = cantidad.value;

        monto = cantidadSelected * 200;

        montoDesc = aplicarDescuento(monto, categoriaSelected);

        totPagar.textContent = montoDesc;

    } else {

        alert("Algo salió mal en el envío del formulario.");

        btnResumen.disabled = true;

        formTicket.reset();

        totPagar.textContent = "";

    }

})

function aplicarDescuento(monto, categoria) {

    switch (categoria) {
        case 1:
            return monto * 0.2;
        case 2:
            return monto * 0.6;
        case 3:
            return monto * 0.8;
    }

}

function validarNombre() {

    let valor = nombre.value;

    if (typeof valor == "string" && valor.length > 0 && valor.length <= 20) {

        validForm[0] = true;
        nombre.className = "form-control is-valid";
        nombreErr.style.display = "none";

    } else {

        validForm[0] = false;
        nombre.className = "form-control is-invalid";
        nombreErr.style.display = "block";

    }

    validarForm();

}

function validarApellido() {

    let valor = apellido.value;

    if (typeof valor == "string" && valor.length > 0 && valor.length <= 20) {

        validForm[1] = true;
        apellido.className = "form-control is-valid";
        apellidoErr.style.display = "none";

    } else {

        validForm[1] = false;
        apellido.className = "form-control is-invalid";
        apellidoErr.style.display = "block";

    }

    validarForm();

}

function validarEmail() {

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email.value)) {

        validForm[2] = true;
        email.className = "form-control is-valid";
        emailErr.style.display = "none";

    } else {

        validForm[2] = false;
        email.className = "form-control is-invalid";
        emailErr.style.display = "block";

    }

    validarForm();

}

function validarCantidad() {

    let valor = Number(cantidad.value);

    if (valor > 0 && valor <= 100) {

        validForm[3] = true;
        cantidad.className = "form-control is-valid";
        cantidadErr.style.display = "none";

    } else {

        validForm[3] = false;
        cantidad.className = "form-control is-invalid";
        cantidadErr.style.display = "block";

    }

    validarForm();

}

function validaCategoria() {

    let valor = categoria.value;
    let valores = ["1", "2", "3"];

    const existe = valores.filter(element => element == valor);

    if (existe.length > 0) {

        validForm[4] = true;
        categoria.className = "form-control is-valid";
        categoriaErr.style.display = "none";

    } else {

        validForm[4] = false;
        categoria.className = "form-control is-invalid";
        categoriaErr.style.display = "block";

    }

    validarForm();

}

function validarForm() {

    const esValido = validForm.filter(element => element == true);

    if (esValido.length == 5) {

        btnResumen.disabled = false;

    } else {

        btnResumen.disabled = true;

    }
}

function reiniciarFormulario() {

    formTicket.reset();

    totPagar.textContent = "";

    nombre.className = "form-control";

    nombreErr.style.display = "none";

    apellido.className = "form-control";

    apellidoErr.style.display = "none";

    email.className = "form-control";

    emailErr.style.display = "none";

    cantidad.className = "form-control";

    cantidadErr.style.display = "none";

    categoria.className = "form-control";

    categoriaErr.style.display = "none";

    btnResumen.disabled = true;

    validForm = [false, false, false, false, false];

}