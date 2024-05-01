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
    let parent = document.getElementById("term_cond2");
    let text1 = "";
    for (let i in data.term_cond) {
      let tag1 = data.term_cond[i].textspan;
      let tag2 = data.term_cond[i].textp;
      let dato = "<div><span>" + tag1 + "</span><p>" + tag2 + "</p></div><div><br></div>";
      text1 += dato
    }
    parent.innerHTML = text1
  }