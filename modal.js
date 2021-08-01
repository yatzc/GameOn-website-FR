//#region nav
// display responsive nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//#endregion

//#region DOM Elements
const modalBtn   = document.querySelectorAll(".modal-btn");
const modalbg    = document.querySelector(".bground");
const formData   = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
//#endregion

//#region modal - close/open
// modal - open display event
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));
// modal - open display form
function openModal() {
  modalbg.style.display = "block";
}

// modal - close display event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
// modal - close display form
function closeModal() {
  modalbg.style.display = "none";
}
//#endregion

//#region modal - shield

//#endregion