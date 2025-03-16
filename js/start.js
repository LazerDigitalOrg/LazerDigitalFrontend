let link;
if (window.location.pathname.split("/")[1] == 'index.html') {
    link = document.getElementById("1");
    link.style.setProperty("color", "#fff200");
} else if (window.location.pathname.split("/")[1] == 'equipment.html') {
    link = document.getElementById("2");
    link.style.setProperty("color", "#fff200");
} else if (window.location.pathname.split("/")[1] == 'makeorder.html') {
    link = document.getElementById("3");
    link.style.setProperty("color", "#fff200");
} else if (window.location.pathname.split("/")[1] == 'account.html') {
    link = document.getElementById("4");
    link.style.setProperty("color", "#fff200");
}

axios.get(`https://swapi.dev/api/people/1`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  