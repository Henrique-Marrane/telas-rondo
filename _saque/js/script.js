window.addEventListener('load', getPagamento)

function getPagamento() {
  let formapag = $('#selected-pag').val()
  switch (formapag) {
    case 'tpix':
      $('#conta').css('display', 'none')
      $('#agencia').css('display', 'none')
      $('#chavepix').css('display', 'block')
      break
    case 'ted':
      $('#conta').css('display', 'block')
      $('#agencia').css('display', 'block')
      $('#chavepix').css('display', 'none')
      break
    default:
      $('#conta').css('display', 'block')
      $('#chavepix').css('display', 'block')
      $('#agencia').css('display', 'block')
  }
}
