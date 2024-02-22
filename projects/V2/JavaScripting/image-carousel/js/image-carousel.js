// Image Carousel
let imgContainer = document.querySelector("#img-container");
let images = imgContainer.querySelectorAll("img");
let buttonContainer = imgContainer.querySelector("#button-container");

SlideShowButton();
SlideShow();

function SlideShow() {
  let index = 0;
  images[index].classList.add("current-slide");

  setInterval(() => {
    images[index].classList.remove("current-slide");
    if (index + 1 >= images.length) {
      index = 0;
      console.log(index);
    } else {
      index = index + 1;
      console.log(index);
    }
    images[index].classList.add("current-slide");
  }, 3000);
}

function SlideShowButton() {
  for (let i = 0; i < images.length; i++) {
    let spanButton = document.createElement("span");
    spanButton.classList.add("span-button");

    buttonContainer.appendChild(spanButton);
  }

  let spanButtons = buttonContainer.querySelectorAll(".span-button");

  spanButtons.forEach((spanButton, index) => {
    spanButton.addEventListener("click", () => {
      images.forEach((image) => {
        image.classList.remove("current-slide");
      });
      images[index].classList.add("current-slide");
    });
  });
}
