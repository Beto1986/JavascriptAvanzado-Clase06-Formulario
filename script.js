//////////////////////////// Inicio Ejemplo realizado en clase //////////////////////////// 

// const pass1 = document.querySelector("#pass1");
// const pass2 = document.querySelector("#pass2");
// const formulario = document.querySelector("#form")

// const validar = (event) => {
//     console.log(event.timeStamp) // Momento de tiempo donde se hizo click
//     console.log(event.target) // Elemento completo al que se le aplico el evento
//     if (event.target.value === pass1.value) {
//         pass2.classList.add("valido");
//         pass2.classList.remove("invalido")
//     } else {
//         pass2.classList.add("invalido");
//         pass2.classList.remove("valido")
//     }
// }

// const enviar = (event) => {
//     event.preventDefault();
//     if (pass2.classList.contains("valido")) { //Validamos si el dato es valido
//         console.log("Enviado!")
//         formulario.reset() //Limpia los input
//     } else {
//         pass2.focus() // Hace foco en un input en particular
//     }

// }
// pass2.addEventListener("keyup", validar) // pass2.addEventListener("keyup",validar) Valida en simultaneo al tipeo, al soltar cada tecla ​
// form.addEventListener("submit", enviar) // Cuando apretamos el boton de enviar se ejecuta

//////////////////////////// Fin Ejemplo realizado en clase ////////////////////////////

// b) Generar desde javascript el código correspondiente para validar lo indicado en la cuarta columna.
// Las validaciones deben surgir en base a alguno de los siguientes eventos:
// * Cuando el usuario suelta la tecla al escribir (keyup).
// * Cuando el usuario saca el foco del input (blur).
// c) Se debe dar un formato condicional en base a si es correcto o no el contenido. 

// La contraseña debe tener al menos un número.
const pass = document.querySelector("#password");

// Utilizo una expresión regular.
const validarPassword = (event) => {
    // La expresion regular /\d/ sirve para validar si contiene al menos un numero el metodo test.(si es true, es válido)
    //console.log(/\d/.test(pass.value));
    if (/\d/.test(pass.value)) {
        console.log("La contraseña es válida porque contiene al menos un número")
        pass.classList.add("validoPass");
        pass.classList.remove("invalidoPass");
    } else {
        console.log("La contraseña es inválida porque debe contener al menos un número")
        pass.classList.add("invalidoPass");
        pass.classList.remove("validoPass");
    }
}

pass.addEventListener('blur', validarPassword);

// La contraseña que se repita debe coincidir con la primer contraseña.
const passRepetida = document.querySelector("#repetirPassword");

const validarPasswordRepetida = event => {

    // La contraseña repetida tiene que ser igual a la 1 y contener un número
    if (event.target.value === pass.value && (/\d/.test(passRepetida.value))) {
        console.log(`La constraseña es correcta ya que la password ${pass.value} es = a la password repetida ${event.target.value}`);
        passRepetida.classList.add("validoPassRepetida");
        passRepetida.classList.remove("invalidoPassRepetida");
    } else {
        console.log(`La constraseña es incorrecta ya que la password ${pass.value} y la password repetida ${event.target.value} deben ser iguales`);
        passRepetida.classList.add("invalidoPassRepetida");
        passRepetida.classList.remove("validoPassRepetida");
    }

}

passRepetida.addEventListener("keyup", validarPasswordRepetida);

// Debe empezar con 1,2,3 o 4
const telefono = document.querySelector("#telefono");

// Si la primer posicion está comprendida entre 1 y 4.
const validarTelefono = (event) => {
    if (event.target.value.charAt() >= 1 && event.target.value.charAt() <= 4) {
        console.log(`Es correcto, el teléfono comienza con el número ${event.target.value.charAt()}`);
        telefono.classList.add("validoTelefono");
        telefono.classList.remove("invalidoTelefono");
    } else {
        console.log(`Es incorrecto, el teléfono debe comenzar con el número 1,2,3 o 4`);
        telefono.classList.add("invalidoTelefono");
        telefono.classList.remove("validoTelefono");
    }
}

telefono.addEventListener("keyup", validarTelefono)

// Pondremos alguna imagen aleatoria de “captcha”. Validaremos que esté correcto.


/* d) Al final, al enviar el formulario, se debe evaluar que todo cumpla con las validaciones. De no ser así, le mostraremos al usuario un mensaje de error y luego, posicionaremos el cursor en el primer elemento que tenga error para que el usuario pueda corregirlo. (Por ejemplo: las contraseñas no coinciden, posicionaremos el cursor en la primera contraseña). */
/* e) En caso de que se cumplan, quedarse dentro de la página, mostrar un mensaje al usuario indicando que se envió el formulario y resetear los campos del mismo.*/


const enviar = (event) => {
    event.preventDefault();

    // Muestro un mensaje de error debajo de cada input para aquellos que su validacion es inválida
    if (pass.classList.contains("invalidoPass")) {
        pass.focus(); // Hace foco en el input de password
        const spanpass = document.querySelector("#spanpass");
        spanpass.innerHTML = "La constraseña debe tener al menos un número";
    } else {
        spanpass.innerHTML = "";
    }

    if (passRepetida.classList.contains("invalidoPassRepetida")) {
        //passRepetida.focus(); // Hace foco en el input de pass repetida
        const spanpassrepetida = document.querySelector("#spanpassrepetida");
        spanpassrepetida.innerHTML = "Ambas contraseñas deben ser iguales y deben contener un número";
    } else {
        spanpassrepetida.innerHTML = "";
    }

    if (telefono.classList.contains("invalidoTelefono")) {
        telefono.focus(); // hace foco en el input del telefono
        const spantelefono = document.querySelector("#spantelefono");
        spantelefono.innerHTML = "El teléfono debe empezar con 1,2,3 o 4";
    } else {
        spantelefono.innerHTML = "";
    }

    // Si las validaciones están OK, envio el formulario, informo al usuario y limpio los inputs.
    if (pass.classList.contains("validoPass") && passRepetida.classList.contains("validoPassRepetida") && telefono.classList.contains("validoTelefono")) { //Validamos si el dato es valido
        alert("El formulario se envió correctamente")
        form.reset() //Limpia los input
            // Limpio las propiedades para que no me queden los background-color marcados.        
        pass.classList.remove("validoPass");
        passRepetida.classList.remove("validoPassRepetida");
        telefono.classList.remove("validoTelefono");
    }

}

form.addEventListener("submit", enviar) // Cuando apretamos el boton de enviar se ejecuta