import { createCardsList } from "./cardsList.js";
import { Enums } from "./enums.js";

export const getData = (apiUrl = "../data.json") => fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    window.globalDataStorage = data;
    createCardsList(Enums.Container, window.globalDataStorage);
  })