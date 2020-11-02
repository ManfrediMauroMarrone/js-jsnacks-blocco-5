$(document).ready(function() {
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

  let biciclettaConPesoMinore2 = {};
  let ultimoPesoMinore = bikes[0].peso;

  for (i = 0;i < bikes.length;i++) {
    const bike = bikes[i];

    if (bike.peso < ultimoPesoMinore) {
      ultimoPesoMinore = bike.peso;

      biciclettaConPesoMinore2 = bike;
    }
  }

  console.log(biciclettaConPesoMinore2);

})
