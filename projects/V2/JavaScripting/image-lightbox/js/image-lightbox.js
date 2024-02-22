let gallery = document.querySelector("#gallery");

gallery.addEventListener("click", function (e) {
  // If it's an image
  if (e.target.nodeName === "IMG") {
    console.log(e.target);

    // Creates a new div
    let fullImageContainer = document.createElement("div");

    // Gets the body element and appends the new element to the body
    let bodyElement = document.querySelector("body");
    bodyElement.appendChild(fullImageContainer);

    fullImageContainer.className = "overlay";

    // Creates a new image
    let fullImage = document.createElement("img");

    fullImage.src = "img/" + e.target.src.split("_")[1];

    fullImageContainer.appendChild(fullImage);
  }

  // Gets the overlay
  let overlayElement = document.querySelector(".overlay");
  // Adds an event listener to the overlay
  overlayElement.addEventListener("click", function (e) {
    // Removes the overlay
    console.log(e);
    overlayElement.remove();
  });
});
