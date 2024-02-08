let menu = {
  home: "home.html",
  products: "products.html",
  pricing: "pricing.html",
  vision: "vision.html",
  about: "about.html",
  contact: "contact.html",
};

// Create all the elements for the menu

let text; // = document.createTextNode(menu.home);
// element.appendChild(text);
// document.body.appendChild(element);

function createNavMenu() {
  // Creates the first part of navigation menu
  let elementNav = document.createElement("nav");
  let elementUl = document.createElement("ul");

  elementNav.classList.add("nav-menu");
  elementUl.classList.add("nav-menu-list");

  for (let menuItem in menu) {
    // Creates the rest of the elements for the menu
    let elementLi = document.createElement("li");
    let elementA = document.createElement("a");

    elementLi.classList.add("nav-menu-item");

    // Adds the text and link to the appropriate element
    elementA.textContent = menuItem;
    elementA.href = menu[menuItem];

    // Adds the link and li element to the ul element
    elementLi.appendChild(elementA);
    elementUl.appendChild(elementLi);
  }

  // Adds the entire ul element to the nav element, and then the nav element to the body
  elementNav.appendChild(elementUl);
  document.body.appendChild(elementNav);
}

createNavMenu();
