function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function myFunction1() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}