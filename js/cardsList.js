import { createCardElement } from "./createCardElement.js";
import { filterDataBySkills } from "./filterData.js";
import { Enums } from "./enums.js";

export const createCardsList = function (target, data) {
  const container = document.querySelector(target);
  container.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const skillsRequired = [...data[i].languages, ...data[i].tools];
    const card = createCardElement({
      ...data[i],
      isNew: data[i].new,
      skills: skillsRequired,
    });

    container.appendChild(card);
  }
};

export const refreshCardsList = (searchArray) => {
  if (!searchArray?.length) {
    createCardsList(Enums.Container, window.globalDataStorage);
    return;
  }
  createCardsList(Enums.Container, filterDataBySkills(searchArray, window.globalDataStorage));
}