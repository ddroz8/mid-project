// Api para inyectar info en los bloques de Recent Projects
function recentProjects() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((res) => {
        
        const card = document.getElementsByClassName("card-text");
        const image = document.getElementsByClassName("card-image");
        
        for (let i = 0; i < 3; i++) {
            card[i].children[0].innerHTML = res[i].name.slice(0,1).toUpperCase() + res[i].name.slice(1,30);
            card[i].children[1].innerHTML = res[i].description.slice(0,1)+res[i].description.slice(1,150) + "...";
        }});
    };

recentProjects();