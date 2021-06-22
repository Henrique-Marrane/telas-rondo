let password = document.getElementById('password');
let passwordR = document.getElementById('passwordR');

function validarSenha() {
  if (password.value != passwordR.value) {
    passwordR.setCustomValidity("Senhas diferentes!");
    passwordR.reportValidity();
    return false;
  } else {
    passwordR.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
passwordR.addEventListener('input', validarSenha);
