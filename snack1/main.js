$(document).ready(function() {
  creo un array di oggetti
  var bikes = [
    {
      nome : 'pippo',
      peso : '7'
    },

    {
      nome : 'pluto',
      peso : '8'
    },

    {
      nome : 'paperino',
      peso : '5'
    },

    {
      nome : 'franco',
      peso : '9'
    }
  ]

  var biciclettaConPesoMinore2 = {};
  // creo una variabile d'appoggio per registrare il peso delle biciclette
  var ultimoPesoMinore = bikes[0].peso;

  for (i = 0;i < bikes.length;i++) {
    var bike = bikes[i];
    // se il peso di una delle biciclette è minore di ultimoPesoMinore allora modifico il valore di ultimoPesoMinore con quello della bicicletta attualmente presa in esame
    if (bike.peso < ultimoPesoMinore) {
      ultimoPesoMinore = bike.peso;
      // inserisco i valori della bicicletta in esame dentro l'oggetto vuoto biciclettaConPesoMinore2
      biciclettaConPesoMinore2 = bike;
    }
  }

  console.log(biciclettaConPesoMinore2);

})
