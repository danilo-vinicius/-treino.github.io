function exibirExercicios(dia) {
  var elementosExercicios = document.getElementsByClassName('exercicios');
  for (var i = 0; i < elementosExercicios.length; i++) {
    elementosExercicios[i].style.display = 'none';
  }

  var elementoExercicios = document.getElementById('exercicios-' + dia);
  if (elementoExercicios) {
    elementoExercicios.style.display = 'table-row';
  }
}
