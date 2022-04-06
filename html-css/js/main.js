"use strict";

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector(".js-new-form");
const listElement = document.querySelector(".js-list");
const searchButton = document.querySelector(".js-button-search");
const buttonAdd = document.querySelector(".js-btn-add");
const buttonCancelForm = document.querySelector(".js-btn-cancel");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const linkNewFormElememt = document.querySelector(".js-button-new-form");
const labelMesageError = document.querySelector(".js-label-error");
const input_search_desc = document.querySelector(".js_in_search_desc");
const input_search_race = document.querySelector(".js_in_search_race");

//Objetos con cada gatito
const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_2 = {
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Fiona",
  desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_3 = {
  image:
    "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
  name: "Cielo",
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};

let kittenDataList = [];

//Funciones
function renderKitten(kittenData) {
  // const kitten = `<li class="card">
  //   <article>
  //     <img
  //       class="card_img"
  //       src=${kittenData.url}
  //       alt="gatito"
  //     />
  //     <h3 class="card_title">${kittenData.name}</h3>
  //     <h3 class="card_race">${kittenData.race}</h3>
  //     <p class="card_description">
  //     ${kittenData.desc}
  //     </p>
  //   </article>
  //   </li>`;

  const liElement = document.createElement("li");
  liElement.classList.add("card");
  const article = document.createElement("article");
  const img = document.createElement("img");
  img.setAttribute("class", "card_img");
  img.setAttribute("src", kittenData.url);
  img.setAttribute("alt", "gatito");
  article.appendChild(img);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card_title");
  const titleText = document.createTextNode(kittenData.name);
  cardTitle.appendChild(titleText);

  const cardRace = document.createElement("h3");
  cardRace.classList.add("card_race");
  const raceText = document.createTextNode(kittenData.race);
  cardRace.appendChild(raceText);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card_description");
  const descriptionText = document.createTextNode(kittenData.desc);
  cardDescription.appendChild(descriptionText);

  article.appendChild(cardTitle);
  article.appendChild(cardRace);
  article.appendChild(cardDescription);
  liElement.appendChild(article);
  const kitten = liElement;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = "";
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove("collapsed");
}
function hideNewCatForm() {
  newFormElement.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
// Adicionar nuevo gatito
// function addNewKitten(event) {
//   event.preventDefault();
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;
//   if (valueDesc === "" && valuePhoto === "" && valueName === "") {
//     labelMesageError.innerHTML = "Debe rellenar todos los valores";
//   } else {
//     if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
//       labelMesageError.innerHTML = "";
//     }
//   }
// }
//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add("collapsed");
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value.toLowerCase();
  const descrSearchTextRace = input_search_race.value.toLowerCase();
  listElement.innerHTML = "";
  const kittenItem = kittenDataList
    .filter((kittenItem) =>
      kittenItem.desc.toLowerCase().includes(descrSearchText),
    )
    .filter((kittenItem) =>
      kittenItem.race.toLowerCase().includes(descrSearchTextRace),
    );

  // for (const kittenItem of kittenDataList) {
  //   if (kittenItem.desc.includes(descrSearchText)) {
  //     listElement.innerHTML += renderKitten(kittenItem);
  //   }
  // }
  renderKittenList(kittenItem);
}

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);

// function addNewKitten(event) {
//   event.preventDefault();
//   const newKittenDataObject = {
//     image: inputPhoto.value,
//     name: inputName.value,
//     desc: inputDesc.value,
//     race: inputRace.value,
//   };

//   kittenDataList.push(newKittenDataObject);
//   labelMesageError.innerHTML = "Mola! Un nuevo gatito en Adalab!";
//   renderKittenList(kittenDataList);
// }

buttonAdd.addEventListener("click", addNewKitten);

// function getKitten() {
//   const GITHUB_USER = "lorenaggs";
//   const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
//   `;`;

//   fetch(SERVER_URL, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       kittenDataList = data.results;
//       renderKittenList(kittenDataList);
//       console.log(kittenDataList);
//       return kittenDataList;
//     });
// }
// getKitten();
const kittenListStored = JSON.parse(localStorage.getItem("kittensList"));

if (kittenListStored === "") {
  renderKitten(kittenListStored);
} else {
  //sino existe el listado de gatitos en el local storage
  //haz la petición al servidor
  const GITHUB_USER = "gloria";
  const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      //guarda el listado obtenido en el local storage.
      //vuelve a pintar el listado de gatitos
      //completa el código...
      kittenDataList = data.results;
      renderKittenList(kittenDataList);
      // console.log(kittenDataList);
      const cache = localStorage.setItem(
        "kittenDataList",
        JSON.stringify(kittenDataList),
      );
      return cache;
    })
    .catch((error) => {
      console.error(error);
    });
}

function addNewKitten(event) {
  event.preventDefault();

  //obtener la información de los gatitos del formulario
  const newURL = inputPhoto.value;
  const newDescription = inputDesc.value;
  const newName = inputName.value;
  const newRace = inputRace.value;
  //nuevo objeto con la info del gatito
  const newKittenDataObject = {
    url: newURL,
    name: newName,
    desc: newDescription,
    race: newRace,
  };

  const GITHUB_USER = "lorenaggs";
  fetch(`https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newKittenDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        //Completa y/o modifica el código:
        //Agrega el nuevo gatito al listado push a la lista
        // kittenDataList.push(newKittenDataObject);
        //Guarda el listado actualizado en el local stoarge
        //Visualiza nuevamente el listado de gatitos llamar a la funcion que pint alos gatitos
        //Limpia los valores de cada input
      } else {
        //muestra un mensaje de error.
      }
      console.log(data);
    });

  labelMesageError.innerHTML = "Mola! Un nuevo gatito en Adalab!";
  renderKittenList(kittenDataList);
}
