// Put your application javascript here
if (document.getElementById("sort_by") !== null) {
  document.querySelector("#sort_by").addEventListener("change", function (e) {
    const url = new URL(window.location.href);
    url.searchParams.set("sort_by", e.currentTarget.value);
    window.location = url.href;
  });
}

if (document.getElementById("AddressCountryNew") != null) {
  document
    .getElementById("AddressCountryNew")
    .addEventListener("change", function (e) {
      var provinces =
        this.options[this.selectedIndex].getAttribute("data-provinces");
      var provinceSelector = document.getElementById("AddressProvinceNew");
      var provinceArray = JSON.parse(provinces);

      //console.log(provinceArray);
      if (provinceArray.length < 1) {
        provinceSelector.setAttribute("disabled", "disabled");
      } else {
        provinceSelector.removeAttribute("disabled");
      }

      provinceSelector.innerHTML = "";
      var options = "";
      for (var i = 0; i < provinceArray.length; i++) {
        options +=
          '<option value="' +
          provinceArray[i][0] +
          '">' +
          provinceArray[i][0] +
          "</option>";
      }

      provinceSelector.innerHTML = options;
    });
}

if (document.getElementById("forgotPassword") != null) {
  document
    .getElementById("forgotPassword")
    .addEventListener("click", function (e) {
      const element = document.querySelector("#forgot_password_form");
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
      }
    });
}

// const productInfoAnchors = document.querySelectorAll("#productInfoAnchor");
// let productModal;
// if (document.getElementById("productInfoModal") != null) {
//   productModal = new bootstrap.Modal(
//     document.getElementById("productInfoModal"),
//     {}
//   );
// }

// if (productInfoAnchors.length > 0) {
//   productInfoAnchors.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       const handle = item.getAttribute("product-handle");
//       const url = `/products/${handle}.js`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           document.getElementById("productInfoImg").src = data.images[0];
//           document.getElementById("productInfoTitle").innerHTML = data.title;
//           document.getElementById("productInfoPrice").innerHTML =
//             item.getAttribute("product-price");
//           document.getElementById("productInfoDescription").innerHTML =
//             data.description;

//           document.getElementById("productInfoDescription").innerHTML =
//             data.description;

//           const variants = data.variants;
//           const variantSelect = document.getElementById("modalItemID");
//           variantSelect.innerHTML = "";
//           variants.forEach((v, i) => {
//             console.log(v);
//             variantSelect.options[variantSelect.options.length] = new Option(
//               v.option1,
//               v.id
//             );
//           });
//           productModal.show();
//         });
//     });
//   });
// }

// const modalAddToCartForm = document.querySelector("#addToCartForm");
// if (modalAddToCartForm != null) {
//   modalAddToCartForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let formData = {
//       items: [
//         {
//           id: document.getElementById("modalItemID").value,
//           quantity: document.getElementById("modalItemQuantity").value,
//         },
//       ],
//     };
//     fetch("/cart/add.js", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((resp) => {
//         return resp.json();
//       })
//       .then(() => {
//         updateCart();
//       })
//       .catch((err) => {
//         console.error("Error: " + err);
//       });
//   });
// }
// document.addEventListener("DOMContentLoaded", () => {
//   updateCart();
// });
// function updateCart() {
//   fetch("/cart.js")
//     .then((resp) => resp.json())
//     .then(
//       (data) =>
//         (document.getElementById("numberOfCartItems").innerHTML =
//           data.items.length)
//     )
//     .catch((err) => console.error(err));
// }

// const predictiveSearchInput = document.getElementById("searchInputField");
// let timer;
// const offcanvasSearch = document.getElementById("offcanvasSearchResult");
// const bsOffcanvas = new bootstrap.Offcanvas(offcanvasSearch);
// if (predictiveSearchInput !== null) {
//   predictiveSearchInput.addEventListener("input", () => {
//     console.log(predictiveSearchInput.value);
//     clearTimeout(timer);
//     if (predictiveSearchInput.value) {
//       timer = setTimeout(fetchPredictiveSearch, 1000);
//     }
//   });
// }

// function fetchPredictiveSearch() {
//   fetch(
//     `/search/suggest.json?q=${predictiveSearchInput.value}&resources[type]=product`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const products = data.resources.results.products;
//       document.getElementById("search_results_body").innerHTML = "";
//       products.forEach((product) => {
//         document.getElementById("search_results_body").innerHTML += `
//         <div class="card" style="width: 19rem;">
//             <img src="${product.image} class="card-img-top">
//             <div class="card-body">
//                 <h5 class="card-title">${product.title}</h5>
//                 <p class="card-text">$${product.price}</p>
//             </div>
//         </div>
//     `;
//       });
//       bsOffcanvas.show();
//     });
// }

const menu_btn = document.querySelector(".menu-btn");
// const close_menu = document.querySelector(".close-menu");
const navbar = document.querySelector(".nav-bar");

menu_btn.addEventListener("click", toggleMenu);
// close_menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("in here");
  navbar.classList.toggle("is-active");
  menu_btn.classList.toggle("open");
}
