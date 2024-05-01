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
    let qs = document.getElementById("quienes_somos");
    let text1 = "";
    for (let i in data.quienes_somos) {
      let tag1 = data.quienes_somos[i].textspan;
      let tag2 = data.quienes_somos[i].textp;
      let dato = "<div><h3>" + tag1 + "</h3><p>" + tag2 + "</p></div><div><br></div>";
      text1 += dato
    }
    qs.innerHTML = text1
  }