fetch('./assets/json/quienes_somos.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayData(data);
  })
  .catch(function (error) {
    console.log('Ocurrió un error:', error);
  });

function displayData(data) {
  var qs = document.getElementById("quienes_somos");
  text1 = "";
  for (var i in data.quienes_somos) {
    tag1 = data.quienes_somos[i].textspan;
    tag2 = data.quienes_somos[i].textp;
    dato = "<div><h4>" + tag1 + "</h4><p>" + tag2 + "</p></div><div><br></div>";
    text1 += dato
  }
  qs.innerHTML = text1
}