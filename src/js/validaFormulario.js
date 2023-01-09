const inputCampo = document.querySelectorAll(".campo-formulario")

// const nome = inputCampo.

// console.log(inputCampo[1])

function validaFormulario() {
    inputCampo.forEach(function (input) {
        if (input.childNodes[1].nodeName === "INPUT") {
            if (input.childNodes[1].value === "") {
                input.classList.add('campo-invalido')
                input.classList.remove('campo-valido')
            } else {
                input.classList.remove('campo-invalido')
                input.classList.add('campo-valido')
            }
        } else if (input.childNodes[3].nodeName === "TEXTAREA") {
            if (input.childNodes[3].value === "") {
                input.classList.add('campo-invalido')
                input.classList.remove('campo-valido')
            } else {
                input.classList.remove('campo-invalido')
                input.classList.add('campo-valido')
            }
        }
    })
}