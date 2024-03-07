function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

let wrap_1 = document.querySelector(".wrap-slide"),
    itemWidth_1 = document.querySelectorAll(".item-slide")[0].clientWidth;

let items_1 = document.querySelectorAll(".item-slide");

let position_1 = 0;
let currentDot_1 = 0;

showSlide_1(wrap_1, 0, 0);

function showSlide_1(elem, pix, n) {
  position_1 += pix;
  currentDot_1 += n;

  if (position_1 > 0) { 
    position_1 = -elem.clientWidth + pix;
    currentDot_1 = items_1.length - 1;
  } else if (position_1 < -elem.clientWidth - pix) {
    position_1 = 0;
    currentDot_1 = 0;
  }
  elem.style.transform = "translateX(" + position_1 + "px)";
}

document.querySelector(".btn1-left").addEventListener("click", function() {
  const prevIndex = currentDot_1 === 0 ? items_1.length - 1 : currentDot_1 - 1;
  position_1 = -items_1[prevIndex].clientWidth * prevIndex;
  currentDot_1 = prevIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";
});

document.querySelector(".btn1-right").addEventListener("click", function() {
  const nextIndex = currentDot_1 === items_1.length - 1 ? 0 : currentDot_1 + 1;
  position_1 = -items_1[nextIndex].clientWidth * nextIndex;
  currentDot_1 = nextIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";

});


function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }


// filter menu
var allElements = document.getElementsByClassName('all');
var fastfoodElements = document.getElementsByClassName('fastfood');
var coffeeElements = document.getElementsByClassName('coffee');
var cocktailElements = document.getElementsByClassName('cocktail');
var snackElements = document.getElementsByClassName('snack');
var cakeElements = document.getElementsByClassName('cake');
function filterAll() {
  for (var i = 0; i < allElements.length; i++) {
    fastfoodElements.style.display = "flex";
    coffeeElements.style.display="flex";
    cakeElements.style.display="flex";
    cocktailElements.style.display="flex";
    snackElements.style.display="flex";
  } 
}
function filterFastfood() {
  var fastfoodElements = document.getElementsByClassName('fastfood');
  for (var i = 0; i < fastfoodElements.length; i++) {
    if (fastfoodElements[i].style.display === "none") {
      fastfoodElements[i].style.display = "block";
      coffeeElements[i].style.display="none";
      cakeElements[i].style.display="none";
      cocktailElements[i].style.display="none";
      snackElements[i].style.display="none";
      
    } else {
      fastfoodElements[i].style.display = "none";
    }
  }
}

function filterCoffee(){
  var coffeeElements = document.getElementsByClassName('coffee');
  for(var i = 0;i<coffeeElements.length;i++){
    if(coffeeElements[i].style.display === "none"){
      coffeeElements[i].style.display="block";
      fastfoodElements[i].style.display="none";
      cakeElements[i].style.display="none";
      cocktailElements[i].style.display="none";
      snackElements[i].style.display="none";
    }else{
      coffeeElements[i].style.display="none";
    }
  }
}
function filterCake(){
  var cakeElements = document.getElementsByClassName('cake');
  for(var i = 0;i<cakeElements.length;i++){
    if(cakeElements[i].style.display === "none"){
      cakeElements[i].style.display="block";
      coffeeElements[i].style.display="none";
      fastfoodElements[i].style.display="none";
      cocktailElements[i].style.display="none";
      snackElements[i].style.display="none";
    }else{
      cakeElements[i].style.display="none";
    }
  }
}
function filterCocktail(){
  var cocktailElements = document.getElementsByClassName('cocktail');
  for(var i = 0;i<cocktailElements.length;i++){
    if(cocktailElements[i].style.display === "none"){
      cocktailElements[i].style.display="block";
      coffeeElements[i].style.display="none";
      fastfoodElements[i].style.display="none";
      caketailElements[i].style.display="none";
      snackElements[i].style.display="none";
    }else{
      cocktailElements[i].style.display="none";
    }
  }
}
function filterSnack(){
  var snackElements = document.getElementsByClassName('snack');
  for(var i = 0;i<snacklElements.length;i++){
    if(snacklElements[i].style.display === "none"){
      snacklElements[i].style.display="block";
      coffeeElements[i].style.display="none";
      fastfoodElements[i].style.display="none";
      caketailElements[i].style.display="none";
      cocktailElements[i].style.display="none";
    }else{
      snacklElements[i].style.display="none";
    }
  }
}