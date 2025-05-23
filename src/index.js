function handleSearchSubmit(event) {
  event.preventDefault();
  let searchBox = document.querySelector("#searchbox");
  cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBox.value;
}

let formTypeElement = document.querySelector("#form-type");
formTypeElement.addEventListener("submit", handleSearchSubmit);
