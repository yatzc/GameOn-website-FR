//#region ==== nav
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

//#region ==== DOM Elements
const formBtnOpen      = document.querySelectorAll(".modal-btn");
const formBg           = document.querySelector   (".bground");
const formCrossClose   = document.querySelectorAll(".close");
const thanksBtnOpen    = document.getElementById  ("btn-goToTks");
const thanksBg         = document.querySelector   (".bgroundtks");
const thanksCrossClose = document.getElementById  ("closetks");
const thanksBtnClose   = document.getElementById  ("btn-close-tks");
//#endregion

//#region ==== close/open modal
// open form (btn)
formBtnOpen.forEach((btn) => btn.addEventListener("click", openBtnForm));
function openBtnForm() {
  formBg.style.display = "block";
}
// close form (cross)
formCrossClose.forEach((btn) => btn.addEventListener("click", closeBtnForm));
function closeBtnForm() {
  formBg.style.display = "none";
}
// close form & open THANKS (btn)
thanksBtnOpen.addEventListener("click", function(e) {
  formBg.style.display = "none";
  thanksBg.style.display = "block";
  e.preventDefault();
});
// close THANKS (cross)
thanksCrossClose.addEventListener("click", function() {
  thanksBg.style.display = "none";
});
// close THANKS (btn)
thanksBtnClose.addEventListener("click", function() {
  thanksBg.style.display = "none";
});
//#endregion