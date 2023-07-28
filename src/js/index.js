let validation= document.getElementById("btn-enviar");
let msjAlert= document.querySelectorAll(".notificacao");
let formulario= document.querySelectorAll(".input")


function validarCampo() {
  formulario.forEach((respuesta, i) => {
    addEventListener("change", function () {
      if (respuesta.value.length > 0) {
        formulario[i].classList.remove("invalido");
        formulario[i].classList.add("valido");
        msjAlert[i].textContent = "";
      } else {
        formulario[i].classList.remove("valido");
        formulario[i].classList.add("invalido");
        msjAlert[i].textContent = "campo obrigatório";
      }
    });
  });
}
validation.addEventListener("click", function () {
  for (let i = 0; i < formulario.length; i++) {
    let validationForm = formulario[i].value;
    if (validationForm.length > 0) {
      formulario[i].classList.remove("invalido");
      formulario[i].classList.add("valido");
      msjAlert[i].textContent = "";
    } else {
      formulario[i].classList.remove("valido");
      formulario[i].classList.add("invalido");
      msjAlert[i].textContent = "campo obrigatório";
    }
  }
  validarCampo();
});
