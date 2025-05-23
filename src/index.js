function handleSubmitSearch(event) {
  event.preventDefault();
}

formTypeEElement = document.querySelector("#form-type");
formTypeEElement.addeventlistener("submit", handleSubmitSearch);
