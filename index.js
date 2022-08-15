import { getData } from "./js/api.js";
import { createSearchHandler } from "./js/createSearchHandler.js";
import { refreshCardsList } from "./js/cardsList.js"

const initApp = async () => {
  await getData();

  createSearchHandler({
    searchWindowSelector: ".popup-search",
    searchContainerSelector: ".popup-container",
    onSearch: refreshCardsList,
  });
};

initApp();

