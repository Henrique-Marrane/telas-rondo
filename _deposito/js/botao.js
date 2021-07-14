window.addEventListener('load', getDeposito)

function getDeposito() {
  let formapag = $('#selected-pag').val()
  switch (formapag) {
    case '1':
      $('#itau').css('display', 'block')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'none')
      break
    case '2':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'block')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'none')
      break
    case '3':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'block')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'none')
      break
    case '4':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'block')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'none')
      break
    case '5':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'block')
      $('#bbrasil').css('display', 'none')
      break
    case '6':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'block')
      break
    case '0':
      $('#itau').css('display', 'none')
      $('#caixa').css('display', 'none')
      $('#bradesco').css('display', 'none')
      $('#sicoob').css('display', 'none')
      $('#nubank').css('display', 'none')
      $('#bbrasil').css('display', 'none')
  }
}
