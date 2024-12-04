import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.png";

export function setupModal() {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");

    const products = [
      {
        image: img1,
        title: "Orange Wide Leg",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "White", code: "#fff" },
          { name: "Black", code: "#000" },
        ],
      },
      {
        image: img2,
        title: "Tailored Jacket",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "Blue", code: "#0d499f" },
          { name: "Black", code: "#000" },
        ],
      },
      {
        image: img3,
        title: "Accordion Pleated Dress",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "Red", code: "#b20f36" },
          { name: "Gray", code: "#afafb7" },
        ],
      },
      {
        image: img4,
        title: "Green Trench Coat",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "White", code: "#fff" },
          { name: "Black", code: "#000" },
        ],
      },
      {
        image: img5,
        title: "Tennis Blue T-Shirt",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "Gray", code: "#afafb7" },
          { name: "Black", code: "#000" },
        ],
      },
      {
        image: img6,
        title: "Long Sleeve Tennis Top",
        description:
          "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        price: "980,00€",
        colors: [
          { name: "Blue", code: "#0d499f" },
          { name: "Black", code: "#000" },
        ],
      },
    ];

    document.querySelectorAll(".pop").forEach((pop) => {
      pop.addEventListener("click", (event) => {
        const index = event.currentTarget.dataset.index;
        const product = products[index];

        document.getElementById("modal-image").src = product.image;
        document.querySelector(".modal-title").textContent = product.title;
        document.querySelector(".modal-description").textContent =
          product.description;
        document.querySelector(".modal-price").textContent = product.price;
        document.querySelector(".color-txt1").textContent =
          product.colors[0].name;
        document.querySelector(".color-txt2").textContent =
          product.colors[1].name;
        document.querySelector(".color-pr").style.backgroundColor =
          product.colors[0].code;
        document.querySelector(".color2-pr").style.backgroundColor =
          product.colors[1].code;

        modal.style.display = "flex";
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}
