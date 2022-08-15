export const createCardElement = ({
                             logo,
                             company,
                             position,
                             contract,
                             location,
                             postedAt,
                             isNew,
                             featured,
                             skills
                           }) => {
  const template = document.createElement('template');

  template.innerHTML = `
    <div class="card-container">
      <div class="card-left flex row">
        <div class="card-left-image-wrapper">
          <img src="${logo}" alt="" />
        </div>
        <div class="card-left-text-wrapper flex column">
          <div class="card-left-top-row flex row">
            <div class="company-name">${company}</div>
            
            ${isNew ? '<div class="new">new!</div>' : ''}
            
            ${featured ? '<div class="featured">featured</div>' : ''}
            
          </div>

          <div class="vacancy">${position}</div>
          <div class="card-left-bottom-row flex row">
            <div class="posted bottom-row">${postedAt}</div>
            <div class="type bottom-row">${contract}</div>
            <div class="location bottom-row">${location}</div>
          </div>
        </div>
      </div>
      
      ${skills.length ? '<div class="card-right"></div>' : ''}
      
    </div>
  `;

  const templateElement = template.content.firstElementChild;

  if (skills.length) {
    const cardRight = templateElement.querySelector(".card-right");
    for (let skill of skills) {
      cardRight.innerHTML += `<div class="card-right-skillset">${skill}</div>`;
    }
  }

  return templateElement;
}