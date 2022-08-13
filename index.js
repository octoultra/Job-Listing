const vacancies = []
const main = document.querySelector(".container-for-cards")
const searchWindow = document.querySelector(".popup-search")
const searchContainer = document.querySelector(".popup-container")

const getData = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const createCard = function () {
      // creating the card container and adding innnerHTML with the layout, inserting the right names and pictures into it
      for (let i = 0; i < data.length; i++) {
        vacancies.push(data[i])
        const card = document.createElement("div")

        const divs = [...vacancies[i].languages].concat([...vacancies[i].tools])
        // console.log([...searchSet]);
        for (let j = 0; j < divs.length; j++) {
          card.classList.add("card-container")
          card.innerHTML = `
      <div class="card-left flex row">
        <div class="card-left-image-wrapper">
          <img src="${data[i].logo}" alt="" />
        </div>
        <div class="card-left-text-wrapper flex column">
          <div class="card-left-top-row flex row">
            <div class="company-name">${data[i].company}</div>
            <div class="new">new!</div>
            <div class="featured">featured</div>
          </div>

          <div class="vacancy">${data[i].position}</div>
          <div class="card-left-bottom-row flex row">
            <div class="posted bottom-row">${data[i].postedAt}</div>
            <div class="type bottom-row">${data[i].contract}</div>
            <div class="location bottom-row">${data[i].location}</div>
          </div>
        </div>
      </div>
`

          // We check if the vanancy os NEW or Featured and adding class with display none, if its not

          const cardLeft = card.querySelector(".card-left-top-row")
          const divNewText = cardLeft.querySelector(".new")
          const divFeaturedText = cardLeft.querySelector(".featured")

          if (vacancies[i].new == false) divNewText.classList.add("none")
          if (vacancies[i].featured == false) {
            divFeaturedText.classList.add("none")
          }

          // creating the right div in the card container, appending it into the card container and adding card-right class to it
          const cardRightDiv = document.createElement("div")
          card.appendChild(cardRightDiv)
          cardRightDiv.classList.add("card-right")
        }

        // making a for loop to add languages and tools buttons to the vacancy
        for (let p = 0; p < divs.length; p++) {
          const cardRightAppend = card.querySelector(".card-right")

          const cardSkillset = document.createElement("div")

          cardRightAppend.appendChild(cardSkillset)
          cardSkillset.classList.add("card-right-skillset")
          cardSkillset.innerHTML = divs[p]
        }

        main.appendChild(card)
      }
    }
    createCard()
    // creating new Set to store skills to show in the popup window
    let searchSet = new Set()

    // creating a function to add skills to the popup window on click
    const applySearch = function (e) {
      if (e.target.classList == "card-right-skillset") {
        searchContainer.innerHTML = null
        searchWindow.classList.add("visible")
        searchSet.add(e.target.innerHTML)
        const searchArray = [...searchSet]

        for (let i = 0; i < searchArray.length; i++) {
          const searchButton = document.createElement("div")
          searchContainer.appendChild(searchButton)

          searchButton.innerHTML = searchArray[i]
          searchButton.classList.add("search-option")
        }
      }
      if (e.target.classList == "clear-button") {
        searchWindow.classList.remove("visible")

        searchContainer.innerHTML = null
        searchSet = new Set()
      }
    }
    // adding event listeners
    document.addEventListener("click", (e) => {
      applySearch(e)
      main.innerHTML = ""
      createCard(e)
    })
  })
