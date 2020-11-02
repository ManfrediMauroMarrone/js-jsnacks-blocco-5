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

  // console.log(bikes);
  var bikesWeight = []

  for (var i = 0; i < bikes.length; i++) {
    bike = bikes[i]
    weight = bike.peso

    bikesWeight.push(weight)

  }

  console.log(bikesWeight);

  min = Math.min(bikesWeight)

  console.log(min);

})
