const button = document.querySelector('#buttonEnviar');

function preventDefault(event) {
  event.preventDefault();
}

window.onload = function () {
    button.addEventListener ('click', preventDefault);
}
