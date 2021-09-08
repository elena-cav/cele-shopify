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

if (document.getElementById("filter-btn") != null) {
  document.getElementById("filter-btn").addEventListener("click", function (e) {
    const filters = document.querySelector(".filters-container");
    filters.classList.add("show");
  });
}

if (document.getElementById("close-filters-icon") != null) {
  document
    .getElementById("close-filters-icon")
    .addEventListener("click", function (e) {
      const filters = document.querySelector(".filters-container");
      filters.classList.remove("show");
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

const predictiveSearchInput = document.getElementById("searchInputField");

let timer;
const offcanvasSearch = document.getElementById("offcanvasSearchResult");
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasSearch);
if (predictiveSearchInput !== null) {
  predictiveSearchInput.addEventListener("input", () => {
    clearTimeout(timer);
    if (predictiveSearchInput.value) {
      timer = setTimeout(fetchPredictiveSearch, 800);
    }
  });
}

function fetchPredictiveSearch() {
  fetch(
    `/search/suggest.json?q=${predictiveSearchInput.value}&resources[type]=product`
  )
    .then((res) => res.json())
    .then((data) => {
      const products = data.resources.results.products;
      document.getElementById("search_results_body").innerHTML = "";

      if (products.length === 0) {
        document.getElementById(
          "search_results_body"
        ).innerHTML += `<div><h5>Non ci sono prodotti che corrispondono alla ricerca</h5></div>`;
      } else {
        products.forEach((product) => {
          document.getElementById("search_results_body").innerHTML += `
          <a href="${product.url}">
        <div class="search-suggestions card" style="width: 19rem;">
            <img src="${product.image} class="card-img-top">
            <div class="card-body">
                <p class="card-title">${product.title}</p>
                <p class="card-text">${product.vendor}</p>

                <p class="card-text">€${product.price}</p>
            </div>
        </div>
        </a>
    `;
        });
      }
      bsOffcanvas.show();
    });
}

const menu_btn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".nav-bar");

menu_btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbar.classList.toggle("is-active");
  menu_btn.classList.toggle("open");
}

const search_icon = document.querySelector(".search-icon");
const search_bar = document.querySelector(".search-bar");
const close_search_bar = document.getElementById("close-searchbar");
search_icon.addEventListener("click", openSearchBar);
close_search_bar.addEventListener("click", closeSearchBar);
function openSearchBar() {
  search_bar.classList.add("is-active");
}

function closeSearchBar() {
  search_bar.classList.remove("is-active");
}

// var waypoint = new Waypoint({
//   element: document.getElementById('basic-waypoint'),
//   handler: function() {
//     notify('Basic waypoint triggered')
//   }
// })

$(".image-zoomable")
  // tile mouse actions
  .on("mouseover", function () {
    console.log("here");
    $(this)
      .children(".img-product")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function () {
    $(this).children(".img-product").css({ transform: "scale(1)" });
  })
  .on("mousemove", function (e) {
    $(this)
      .children(".img-product")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%",
      });
  });

// var myModal = new bootstrap.Modal(
//   document.getElementById("exampleModalCenter"),
//   options
// );

const productInfoAnchor = document.getElementById("testbutton");
let productModal;
if (document.getElementById("exampleModal") != null) {
  productModal = new bootstrap.Modal(
    document.getElementById("exampleModal"),
    {}
  );
  console.log("productModal", productModal);
  productModal.show();
}

$(document).ready(function () {
  $(".img-product").click(function () {
    $("#carouselModal").modal("show");
  });
});

$(document).ready(function () {
  $(".close-modal").click(function () {
    $("#carouselModal").modal("hide");
  });
});
