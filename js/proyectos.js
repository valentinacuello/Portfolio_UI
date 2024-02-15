// const proyecto = (proyectoDetalles) => {
//     var params = new URLSearchParams(location.search);
//     var nameURL = params.get('proyecto');

//     let htmlContentToAppend = "";

//     for (let i = 0; i < proyectoDetalle.length; i++) {

//         if (nameURL == animalDetalles[i].nombre) {
//             htmlContentToAppend = `
//                 <img src="img/${proyectoDetalle[i].img}.jpg" class="detalle-img" alt="Foto de ${animalDetalles[i].nombre}, ${animalDetalles[i].especie} ${animalDetalles[i].sexo} de ${animalDetalles[i].edad} años"> 
//                 <div class="info-body">
//                     <div class="titulo">
//                         <h1 class="nombre">¡Hola! Soy ${proyectoDetalle[i].nombre}</h1>
//                         <img src="../img/seperador.svg" class="separador">
//                     </div>
//                 </div>
//             `;

//             document.getElementById("animalActual").innerText = animalDetalles[i].nombre;
//         }

//     };

//     document.querySelector(".detalle-content").innerHTML = htmlContentToAppend;
// };


let backBtn = document.getElementsByClassName("back");

backBtn.addEventListener('click', event => {
    if (event.target.matches(".ver-proyecto")) {
        event.preventDefault();

        let btnTarget = event.target.dataset.id;

        location.href = `proyecto.html?proyecto=${galeriaArray[btnTarget - 1].name}`;
    }
});