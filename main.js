$('form').on('submit', function(e) {
    e.preventDefault()
    const novaTarefa = $('#nova-tarefa').val();
    console.log(novaTarefa);
    const novoItem = $(`<li>${novaTarefa}</li>`);
    $(novoItem).appendTo('ul')
})
$('ul').on('click', 'li', function() {
    $(this).addClass('feito');
  });