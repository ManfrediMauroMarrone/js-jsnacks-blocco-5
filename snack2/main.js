// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

// creo un array di nomi
$(document).ready(function() {
  var nomi = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone', 'minnie', 'paperina', 'qui', 'quo', 'qua']

  console.log(nomi);
  // chiedo all'utente 2 numeri

  var inizio = parseInt(prompt('inserisci il primo numero'))

  var fine = parseInt(prompt('inserisci il secondo numero'))

  // devo creare un array con in nomi nelle posizioni comprese tra i numeri che mi da l'utente

  var nomiEstratti = [];

  for (var i = inizio; i <= fine; i++) {
    var nome = nomi[i]
    console.log(nome);
    nomiEstratti.push(nome);
  }

  console.log(nomiEstratti);
  // var selected = names.slice(number1, number2)
  //
  // console.log(selected);

})
