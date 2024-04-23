fetch('./assets/json/term_cond.json')
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
  var parent = document.getElementById("term_cond2");
  text1 = "";
  for (var i in data.term_cond) {
    tag1 = data.term_cond[i].textspan;
    tag2 = data.term_cond[i].textp;
    dato = "<div><span>" + tag1 + "</span><p>" + tag2 + "</p></div><div><br></div>";
    text1 += dato
  }
  parent.innerHTML = text1
}