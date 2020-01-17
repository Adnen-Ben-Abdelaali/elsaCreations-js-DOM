
const boutton = document.getElementById("toggle-rectangle");
const rectangle = document.getElementsByTagName('div');

function onClickBoutton() {
  rectangle[0].classList.toggle("hide");
}

boutton.addEventListener("click", onClickBoutton);

rectangle[0].addEventListener("mouseover", function() {
  this.classList.add("important");
});

rectangle[0].addEventListener("mouseout", function() {
  this.classList.remove("good");
  this.classList.remove("important");
});

rectangle[0].addEventListener("dblclick", function() {
  this.classList.toggle('good');
});
