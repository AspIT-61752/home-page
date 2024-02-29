// Klar til at se noget rigtig Italiensk spaghetti?

let menuIconContainer = document.querySelector("#menu-icon");
menuIconContainer.classList.add("toggle-pos");

let menuIconOpen = document.createElement("img");
let menuIconClose = document.createElement("img");

let navigation = document.querySelector("#navigation");
navigation.classList.toggle("nav-menu-pos");

let isOpen = true;

// Shows the variables
console.log("menuIcon: " + menuIconOpen);
console.log("menuIconClose: " + menuIconClose);
console.log("menuIconContainer: " + menuIconContainer);
console.log("navigation: " + navigation);

// Set the attributes
menuIconOpen.setAttribute("src", "icons/bars-solid.svg");
menuIconClose.setAttribute("src", "icons/times-solid.svg");

menuIconClose.classList.add("is-hidden");

menuIconContainer.appendChild(menuIconOpen);
menuIconContainer.appendChild(menuIconClose);

// Event listener on the menuIconContainer
menuIconContainer.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (isOpen == true) {
    // console.log("Is checked");
    isOpen = false;
    setClose();
  } else {
    isOpen = true;
    // console.log("Is not checked");
    setOpen();
  }
}

function setOpen() {
  menuIconClose.classList.toggle("is-hidden");
  menuIconOpen.classList.toggle("is-hidden");
  navigation.classList.toggle("nav-menu-pos");
  menuIconContainer.classList.toggle("toggle-pos");
}

function setClose() {
  menuIconClose.classList.toggle("is-hidden");
  menuIconOpen.classList.toggle("is-hidden");
  navigation.classList.toggle("nav-menu-pos");
  menuIconContainer.classList.toggle("toggle-pos");
}

function setup() {}
