/* //Responsive Menu
const responsiveMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navBarLinks = document.getElementsByClassName("nav-links")[0];
    const burgerMenu = document.getElementById("burgerMenu")

    menuToggle.addEventListener("click", () => {
        navBarLinks.classList.toggle("active");
        burgerMenu.classList.toggle("burger-open");
    });
};

responsiveMenu(); */

//Galería

let galeriaArray = [];

const portfolioContainer = document.getElementById("gallery");


const crearGaleria = (array) => {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        htmlContentToAppend += `
        <div class="card-container">
        <div class="details">
            <p class="tag">${array[i].type1}</p>
            <div class="txt">
                <h3>${array[i].name}</h3>
                <p>${array[i].detail}</p>
            </div>
            <div class="btn">
                <button class="ver-proyecto" data-id=${array[i].id}>Ver Proyecto</button>
            </div>
        </div>
        <div class="img-proyecto">
            <img src="img/${array[i].img}.png" alt="">
        </div>
    </div>
        `
    }

    portfolioContainer.innerHTML = htmlContentToAppend;
};

/*Evento para que los botones vayan a la página de cada proyecto*/
const galeria = document.querySelector(".gallery");

galeria.addEventListener('click', event => {
    if (event.target.matches(".ver-proyecto")) {
        event.preventDefault();

        let btnTarget = event.target.dataset.id;

        location.href = `proyecto.html?proyecto=${galeriaArray[btnTarget - 1].name}`;
    }
});






//Filtro
// let galeriaFiltros = [...galeriaArray];

// const filtrarProyectos = (proyecto) => {

//     if (proyecto == "todos") {
//         galeriaFiltros = [...galeriaArray];        
//     } else {
//         let filtrarProyectos = galeriaFiltros.filter((item) => {
//             if (item.type == proyecto) {
//                 return item;
//             }
//         });
//         galeriaFiltros = filtrarProyectos;
//     }

//     crearGaleria(galeriaFiltros)
// };


// document.querySelectorAll('.filter-btn').forEach(btn => {
//     btn.addEventListener('click', event => {
//         let galeriaFiltroBtn = event.target.dataset.filtro;
//         galeriaFiltros = [...galeriaArray];
//         filtrarProyectos(galeriaFiltroBtn);
//     })
// });

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (window.pageYOffset > 100) {
        topBtn.style.opacity = "1";
    }

    if (window.pageYOffset < 100) {
        topBtn.style.opacity = "0";
    }
};

topBtn.addEventListener("click", function () {

    window.scrollTo(0, 0, "smooth")
});



document.addEventListener("DOMContentLoaded", () => {
    const galeriaData = () => {
        $.get('js/portfolio.json', (response) => {
            galeriaArray = response;
            crearGaleria(galeriaArray);
            document.querySelector(".todos").classList.add("active");

        })
    }

    galeriaData();
    var topBtn = document.getElementById("topBtn");


}); 