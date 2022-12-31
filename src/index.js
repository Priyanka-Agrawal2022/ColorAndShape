import "./styles.css";

var outer = document.getElementById("app");
var inner = document.getElementById("inner");
var color = document.getElementById("color");
var shape = document.getElementById("shape");
var colorClicked = false;
var shapeClicked = false;

color.addEventListener("click", function () {
  if (!colorClicked) {
    outer.style.backgroundColor = "green";
    colorClicked = true;
  } else {
    outer.style.backgroundColor = "rgb(95, 39, 199)";
    colorClicked = false;
  }
});

shape.addEventListener("click", function () {
  if (!shapeClicked) {
    inner.setAttribute("class", "triangle");
    shapeClicked = true;
  } else {
    inner.setAttribute("class", "square");
    shapeClicked = false;
  }
});
