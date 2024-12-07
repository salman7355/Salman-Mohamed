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
          <button class="navbar-toggle" aria-label="Toggle menu">
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
    <div class="cart-icon">
      <p class="head">Tisso Vison in the Wild</p>
      <i class="fa-2xl fa-solid fa-cart-shopping cartt" id="cart-icon">
        <div class="cart-items" >
        <p class="number" id="cart-number">1</p>
        </div>
      </i>
    </div>
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
  <div class="cart-overlay">
    <div class="cart-header">
    <h1>Cart</h1>
    <p class="clear" id="clear-cart">
        Clear all
    </p>
    </div>
    <div id="cart-items-container"></div>
  </div>


`;

setupModal();
console.log("main.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
  const firstColor = document.querySelector(".first");
  const secondColor = document.querySelector(".second");
  const cartOverlay = document.querySelector(".cart-overlay");
  const cartItemsContainer = document.getElementById("cart-items-container");
  const clearCartBtn = document.getElementById("clear-cart");

  clearCartBtn.addEventListener("click", clearCart);

  firstColor.addEventListener("click", () => {
    firstColor.classList.add("active");
    secondColor.classList.remove("active");
  });

  secondColor.addEventListener("click", () => {
    secondColor.classList.add("active");
    firstColor.classList.remove("active");
  });

  document.querySelector(".cart.btn").addEventListener("click", () => {
    const modalImage = document.getElementById("modal-image").src;
    const title = document.querySelector(".modal-title").textContent;
    const price = document.querySelector(".modal-price").textContent;
    const description =
      document.querySelector(".modal-description").textContent;

    // console.log(colorName[0].innerText);

    let selectedColor = null;
    let color = null;
    if (firstColor.classList.contains("active")) {
      // selectedColor = window.getComputedStyle(
      //   document.querySelector(".color-pr")
      // ).backgroundColor;
      color = document.querySelectorAll(".color-txt1");
      selectedColor = color[0].innerText;
    } else if (secondColor.classList.contains("active")) {
      // selectedColor = window.getComputedStyle(
      //   document.querySelector(".color2-pr")
      // ).backgroundColor;
      color = document.querySelectorAll(".color-txt2");
      selectedColor = color[0].innerText;
    }

    const selectedSize = document.getElementById("modal-color").value;
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const selectedProduct = {
      image: modalImage,
      title,
      price,
      description,
      color: selectedColor,
      size: selectedSize,
    };

    console.log("Selected Product:", selectedProduct);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("modal").style.display = "none";
    window.location.reload();
  });

  const cartIcon = document.getElementById("cart-icon");
  const cartNumber = document.getElementById("cart-number");

  cartIcon.addEventListener("click", () => {
    cartOverlay.style.right = 0;
    loadCartItems();
  });

  function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart Items:", cartItems);

    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    const itemsHTML = cartItems
      .map((item) => {
        return `
          <div class="modal-row">
          <img id="modal-image" src="${
            item.image
          }" alt="Product Image" class="modal-image" />
          <div class="item-desc">
            <p class="modal-title">${item.title}</p>
            <p class="modal-price">${item.price}</p>
            <p class="modal-description">${item.description}</p>
          </div>
        </div>
        <div class="item-details">
          <div class="c">
            <p>Color: </p>
            <p>${item.color || "N/A"}</p>
          </div>
          <div class="c">
            <p>Size: </p>
            <p>${item.size || "N/A"}</p>
          </div>
        </div>
        `;
      })
      .join("");

    cartItemsContainer.innerHTML = itemsHTML;
  }

  document.addEventListener("click", (event) => {
    if (
      !cartOverlay.contains(event.target) &&
      !cartIcon.contains(event.target)
    ) {
      cartOverlay.style.right = "-100%";
    }
  });

  const updateCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemCount = cartItems.length;

    if (itemCount > 0) {
      cartIcon.style.display = "block";
      cartNumber.textContent = itemCount;
    } else {
      cartIcon.style.display = "none";
    }
  };

  updateCart();
  window.addEventListener("storage", updateCart);
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

const clearCart = () => {
  localStorage.removeItem("cart");
  window.location.reload();
};
