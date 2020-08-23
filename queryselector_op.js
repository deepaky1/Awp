  function handleMouseOver() {
  var Element = document.querySelector("div").children[0];
  Element.style.background = "green";
  Element.style.color = "black";

  Element.innerHTML = "You want see magic ?";
}

function handleMouseOut() {
  let newElement = document.querySelector("div").children[0];
  newElement.style.background = "Red";
  newElement.style.color = "white";

  newElement.innerHTML = "This is not a magic";
}
