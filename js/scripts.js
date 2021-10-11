const schemeSvg = document.querySelector('.scheme-svg');
const TotalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 500;
let TotalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
if(!event.target.classList.contains("booked")) {
  event.target.classList.toggle("active");
  let TotalSeats = schemeSvg.querySelectorAll(".active").length;
  TotalPrice = TotalSeats * cost;
  TotalPriceTag.textContent = TotalPrice;
  
}
});
menuButton.addEventListener('click', ()=> {
  console.log("Кликнули по меню");
  menu.classList.toggle("is-open");
});