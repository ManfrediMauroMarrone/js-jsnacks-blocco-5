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
  creo una variabile
  var ultimoPesoMinore = bikes[0].peso;

  for (i = 0;i < bikes.length;i++) {
    var bike = bikes[i];

    if (bike.peso < ultimoPesoMinore) {
      ultimoPesoMinore = bike.peso;

      biciclettaConPesoMinore2 = bike;
    }
  }

  console.log(biciclettaConPesoMinore2);

})
