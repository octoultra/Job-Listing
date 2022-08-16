export const createSearchHandler = ( { searchWindowSelector, searchContainerSelector, onSearch }) => {
  const searchWindow = document.querySelector(searchWindowSelector)
  const searchContainer = document.querySelector(searchContainerSelector);
  let searchSet = new Set();

  document.addEventListener('click', (e) => {
    if (e.target.classList.value === "card-right-skillset") {
      searchContainer.innerHTML = null;
      searchWindow.classList.add("visible");
      searchSet.add(e.target.innerHTML);
      const searchArray = [...searchSet]

      for (let i = 0; i < searchArray.length; i++) {
        const searchButton = document.createElement("div")
        searchContainer.appendChild(searchButton)

        searchButton.innerHTML = searchArray[i]
        searchButton.classList.add("search-option")
      }

      onSearch(searchArray);

    }

    if (e.target.classList.value === "clear-button") {
      searchWindow.classList.remove("visible");
      searchContainer.innerHTML = null;
      searchSet = new Set();
      onSearch();
    }
  })
}