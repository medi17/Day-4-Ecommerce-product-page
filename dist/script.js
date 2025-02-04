const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const over = document.querySelector(".overlay");

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");

const add = document.getElementById("add_cart");
const cart = document.getElementById("cart");
const price = document.getElementById("price");

const shoeImages = document.querySelectorAll(".shoe-images");
const imageWrapper = document.getElementById("image_wrapper");



cart.addEventListener("click", carter);

menu.addEventListener("click", () => {
     nav.classList.toggle("active");
     over.classList.toggle("hidden");
     document.body.classList.toggle("active");
});

close.addEventListener("click", () => {
     nav.classList.remove("active");
     over.classList.add("hidden");
     document.body.classList.remove("active");
});


plus.addEventListener("click", () => {
     num.textContent = parseInt(num.textContent) + 1;
     return num.textContent;
});
minus.addEventListener("click", () => {
     if (parseInt(num.textContent) <= 0) {
          return;
     } else {
          num.textContent = parseInt(num.textContent) - 1;
          return num.textContent;
     }
     
});


let isDivCreated = false;
const cartNum = document.createElement("div") ?? null;

add.addEventListener("click", () => {
     if (parseInt(num.textContent) <= 0) {
          cart.appendChild(cartNum);
          return;
     }
     else {
          if (!isDivCreated) {
               cartNum.classList.add("cart_num");
               cartNum.textContent = num.textContent;
               cart.appendChild(cartNum);
               isDivCreated = true;
          } else {
               cartNum.textContent = num.textContent;
          }
          
     }
});

function multiplayer() {
     return (parseFloat(price.textContent) * parseInt(num.textContent)).toFixed(2);
     
};

function action() {
     cartOpen.classList.add("cart_open");
     document.body.appendChild(cartOpen);

     const cartTopic = document.createElement("h5");
     cartTopic.textContent = "Cart";
     cartTopic.classList.add("cart_topic");
     cartOpen.appendChild(cartTopic);

     const cartHoriz = document.createElement("hr");
     cartHoriz.classList.add("cart_horiz");
     cartOpen.appendChild(cartHoriz);
     return cartOpen;
};


let isCartOpen = false;
const cartOpen = document.createElement("div") ?? null;
const cartContainer = document.createElement("div");

function carter () {
     if (!isCartOpen) {
          isCartOpen = true;
          action();

          if (isDivCreated) {
               cartContainer.classList.add("cart_container");
               cartOpen.appendChild(cartContainer);
               
               const cartImage = document.createElement("img");
               cartImage.src = "../images/image-product-1-thumbnail.jpg";
               cartImage.classList.add("cart_image");
               cartContainer.appendChild(cartImage);

               const cartDescript = document.createElement("p");
               cartDescript.innerHTML = `Fall Limited Edition Sneakers $${price.textContent} x ${num.textContent} <span class="result">$${multiplayer()} </span>`;
               cartDescript.classList.add("cart_descript");
               cartContainer.appendChild(cartDescript);

               const cartDelete = document.createElement("img");
               cartDelete.src = "../images/icon-delete.svg";
               cartDelete.classList.add("cart_delete");
               cartContainer.appendChild(cartDelete);

               cartDelete.addEventListener("click", () => {
                    cartContainer.innerHTML = "";
                    buttonContainer.remove()
                    cartContainer.classList.add("empty_container");
                    cartContainer.textContent = "Your cart is empty.";
                    cartOpen.appendChild(cartContainer);
               });

               const buttonContainer = document.createElement("div");
               buttonContainer.classList.add("button_container");
               cartOpen.appendChild(buttonContainer);

               const cartButton = document.createElement("button");
               cartButton.classList.add("cart_button");
               cartButton.textContent = "Checkout";
               buttonContainer.appendChild(cartButton);

               cartButton.addEventListener("click", () => { 
                    isCartOpen = false;
                 
                    cartOpen.remove(); 

                    cartContainer.innerHTML = "";
                    cartContainer.classList.remove("empty_container");
                    cartOpen.innerHTML = "";
                    cartOpen.classList.remove("cart_open");
               });
          }
          else {
               cartContainer.classList.add("empty_container");
               cartContainer.textContent = "Your cart is empty.";
               cartOpen.appendChild(cartContainer);
          }
     }
     else {
          
          isCartOpen = false;
                 
          cartOpen.remove(); 

          cartContainer.innerHTML = "";
          cartContainer.classList.remove("empty_container");
          cartOpen.innerHTML = "";
          cartOpen.classList.remove("cart_open");
     }
};

shoeImages.forEach(shoe => {
     shoe.addEventListener("click", () => {
          const imageContain = document.createElement("div");
          imageContain.innerHTML = imageWrapper.innerHTML
          imageContain.className = "alone"
          document.body.appendChild(imageContain);
          over.classList.toggle("hidden");

          const deleteImage = document.createElement("img");
          deleteImage.src = "../images/icon-close.svg";
          deleteImage.classList.add("close_image");
          imageContain.appendChild(deleteImage);

          deleteImage.addEventListener("click", () => { 
               document.body.removeChild(imageContain);
               over.classList.add("hidden");
          });

          const carou = document.querySelector(".alone .carousel");
          const monoImg = carou.querySelectorAll("img")[0];
          const left = document.querySelector(".alone #left"); 
          const right = document.querySelector(".alone #right"); 
          mover(carou, images, monoImg, left, right);

          const imgLink = document.querySelectorAll(".alone .imgLink");
          const imageBtns = document.querySelectorAll(".alone .image-btn");

          manualHandler(carou, imgLink, imageBtns);
     });
});


const arrowIcons = document.querySelectorAll(".button");
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img"); // Get all images
const firstImg = images[0]; // Use the array index
const left = document.getElementById("left");
const right = document.getElementById("right");

function mover(car, imgs, first, prev, next) {
     let ImgWidth = first.clientWidth;
     let currentPosition = 0; 
     
     prev.addEventListener("click", () => {
        currentPosition += ImgWidth;

        if (currentPosition > 0) {
            currentPosition = 0;
        }

        car.style.transform = `translateX(${currentPosition}px)`; 
    });

     next.addEventListener("click", () => {
          currentPosition -= ImgWidth; 
          
        const maxPosition = -(imgs.length - 1) * ImgWidth; 
        if (currentPosition < maxPosition) {
            currentPosition = maxPosition;
        }

        car.style.transform = `translateX(${currentPosition}px)`;
    });
}

mover(carousel, images, firstImg, left, right);


const slides = document.querySelectorAll(".shoe-images");
const imgLink = document.querySelectorAll(".imgLink");
const imageBtns = document.querySelectorAll(".image-btn");
let currentSlide = 0;


function manualHandler(carOusel, oneImgLink, oneImgBtns) {
     function manual(manu) {

          oneImgLink.forEach((link) => {
               link.classList.remove("active");
          });
          oneImgBtns.forEach((btn) => {
               btn.classList.remove("active");
          });

          oneImgBtns[manu].classList.add("active");
          oneImgLink[manu].classList.add("active");
     }

     oneImgBtns.forEach((btn, i) => {
          btn.setAttribute("data-num", i);

          btn.addEventListener("click", e => {
               manual(i);
               currentSlide = i;

               let clickedDotNum = e.target.dataset.num;
               let ImgWidth = firstImg.clientWidth;
               let pixelsToMove = - ImgWidth * clickedDotNum;
               carOusel.style.transform = 'translateX(' + pixelsToMove + 'px)';
          })
     });
}

manualHandler(carousel, imgLink, imageBtns);



