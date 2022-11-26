/*no funciona

function article() {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((res) => {
        const article = document.getElementById("project-title");
        const content = document.getElementsById("art-descrp");
        article.innerHTML = res.name;
        content.innerHTML = res.description;
    });
}

article();

*/