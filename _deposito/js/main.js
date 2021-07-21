var valorDeposito
function gravar() {
  valorDeposito = document.getElementById('valorDeposito').value
  localStorage.valor = (
    parseFloat(valorDeposito) +
    Math.random() * (1 - 0.01)
  ).toFixed(2)
  /* window.location.href = 'itau.html'*/
}

/*parseFloat(getValorStorage()) + (Math.random() * (1 - 0.01)) = valor.toFixed(2)
function inicia() {
  if(localStorage.valor){
    document.getElementById(valor1).innerHTML="R$"+valor+"<hr>";
  }
}

window.addEventListener("load",inicia);

window.addEventListener('load',() => {
  if(localStorage.getItem('valor')){
    sayMyName()
  }else{
    whatsYourName()
  }
  function sayMyName(){
    document.body.innerHTML = '';
    // criando mensagem
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.innerText = 'R$' + localStorage.getItem("valor");
*/
