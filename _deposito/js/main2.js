function getValorStorage() {
  return localStorage.getItem('valor')
}
//Debug no console
console.log(getValorStorage())
//Titulo pagina 2
$('#titulo').html(getValorStorage())
