let iconContainer = document.querySelector("div");
let menu = document.querySelector("nav");

console.log(iconContainer);

let icon = iconContainer.querySelectorAll("img");
console.log(icon);

// Adds an event handler to the iconContainer
iconContainer.addEventListener("click", () => {
  // Toggles the class "is-active" on every icon in the container
  icon.forEach((i) => {
    i.classList.toggle("is-active");
  });
  menu.classList.toggle("show-menu");
});
