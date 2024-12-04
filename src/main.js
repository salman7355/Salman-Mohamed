import "./style.css";
import arrow from "../public/arrow.png";
import whiteArrow from "../public/whiteArrow.png";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.png";
import icons1 from "../public/icons.png";
import mobileImage from "../public/mobile-Frame.png";
import icons2 from "../public/icons2.png";
import { setupModal } from "./Modal.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <!-- BANNER -->
    <div class="banner">
        <!-- MENU ICON FOR MOBILE -->
        <nav class="navbar">
          <button class="navbar-toggle" aria-label="Toggle menu" onclick="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <button class="close-button">
              <span class="close-bar"></span>
              <span class="close-bar"></span>
            </button>
          </button>
          
          <p class="navbar-brand">tisso vison</p>
          <p class="gift_txt nview">Find the ideal gift for your loved ones.</p>
          <div class="navbar-menu gift_btn nview btn">
            <p>Choose gift</p>
            <img src="${arrow}" alt="arrow" class="arrow" />
          </div>
          </nav>
          <div class="overlay">
            <p class="gift_txt">Find the ideal gift for your loved ones.</p>
            <div class="gift_btn btn">
              <p>Choose gift</p>
              <img src="${arrow}" alt="arrow" class="arrow" />
            </div>
          </div>
      


      <!-- ICONS -->
      <div class="icons">
        <img src="${icons1}" alt="icons" class="icons1Img" />
        <div class="gift-row">
          <div class="gift">
            <p class="gift-head">the gift guide</p>
            <p class="gift-text">Discover Joy: Your Ultimate Holiday Gift Destination. Explore our curated selection and find the perfect gifts to delight your loved ones this holiday season.</p>
            <p class="mobile-text">Discover Joy: Your Ultimate Holiday Gift Destination.</p>
            <div class="shop-btn btn">
              <p class="btn-text">Shop Now</p>
              <img src="${whiteArrow}" alt="vite" class="gift-arrow" />
            </div>
          </div>
          <div>
            <img src="${icons2}" alt="icons" class="icons2Img"  />
          </div>
        </div>
        <!-- New Image for Mobile -->
        <img src="${mobileImage}" alt="mobile icons" class="mobileImg" />
      </div>

      <!-- BANNER Footer -->
      <div class="footer">
        <p class="footer_txt">SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL</p>
      </div>
    </div>

    <!-- PRODUCT GRID -->
    <div class="products">
    <p class="head">Tisso Vison in the Wild</p>
    <div class="items">
      ${[img1, img2, img3, img4, img5, img6]
        .map(
          (img, index) => `
          <div class="item" data-index="${index}">
            <img src="${img}" alt="Product ${index + 1}" class="image" />
            <div class="pop" data-index="${index}">
              <p class="pop-txt">+</p>
            </div>
          </div>`
        )
        .join("")}
    </div>
  </div>
  <div id="modal" class="modal hidden">
    <div class="modal-content">
      <p class="close-btn">&times;</p>
    
      <div class="modal-row">
        <img id="modal-image" src="" alt="Product Image" class="modal-image" />
        <div class='item-desc'>
          <p class="modal-title">Orange Wide Leg</p>
          <p class="modal-price">980,00€</p>
          <p class="modal-description">This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.</p>
        </div>
      </div>


      <div class="item-cust"> 
        <div class="color">
          <p>Color</p>
          <div class="colors">
            <div class="first color-txt">
              <div class="color-pr"></div>
              <p class="color-txt1">White</p>
            </div>
            <div class="second">
              <div class="color2-pr"></div>
              <p class="color-txt2">Black</p>
            </div>
          </div>
        </div>
        <div class="color-select">
          <label for="modal-color">Size</label>
          <select id="modal-color">
          <option value="" disabled hidden selected >Select a Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>

      
      <div class="cart btn">
        <p>add to cart</p>
        <img src="${whiteArrow}" alt="arrow" class="arrow" />
      </div>
  </div>

</div>


`;

setupModal();
document.addEventListener("DOMContentLoaded", () => {
  const firstColor = document.querySelector(".first");
  const secondColor = document.querySelector(".second");

  firstColor.addEventListener("click", () => {
    firstColor.classList.add("active");
    secondColor.classList.remove("active");
  });

  secondColor.addEventListener("click", () => {
    secondColor.classList.add("active");
    firstColor.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".navbar-toggle");
  const closeBtn = document.querySelector(".close-button");
  const overlay = document.querySelector(".overlay");

  function checkScreenSize() {
    if (window.innerWidth >= 768) {
      hamburger.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      hamburger.style.display = "flex";
      closeBtn.style.display = "none";
    }
  }
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
    overlay.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    hamburger.style.display = "flex";
    overlay.classList.toggle("show");
  });
});
