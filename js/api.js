export const getData = (apiUrl = "../data.json") => fetch(apiUrl)
  .then((response) => response.json())