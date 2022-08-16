import { getData } from "./js/api.js";
import { createSearchHandler } from "./js/createSearchHandler.js";
import { refreshCardsList, createCardsList } from "./js/cardsList.js"
import { Enums } from "./js/enums.js";


const initApp = async () => {
  const vacanciesList = await getData();
  window.globalDataStorage = vacanciesList;
  createCardsList(Enums.Container, vacanciesList);

  createSearchHandler({
    searchWindowSelector: ".popup-search",
    searchContainerSelector: ".popup-container",
    onSearch: refreshCardsList,
  });
};

initApp();

