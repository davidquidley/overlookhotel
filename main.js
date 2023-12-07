function hide23() {
  document.getElementById("check_in").classList.add("hide");
  document.getElementById("check_in").classList.remove("center");
  document.getElementById("tub").classList.add("hide");
  document.getElementById("tub").classList.remove("center");
  document.getElementById("break").classList.remove("hide");
  document.getElementById("break").classList.add("center");
}
function hide13() {
  document.getElementById("break").classList.add("hide");
  document.getElementById("break").classList.remove("center");
  document.getElementById("tub").classList.add("hide");
  document.getElementById("tub").classList.remove("center");
  document.getElementById("check_in").classList.remove("hide");
  document.getElementById("check_in").classList.add("center");
}
function hide12() {
  document.getElementById("check_in").classList.add("hide");
  document.getElementById("check_in").classList.remove("center");
  document.getElementById("break").classList.add("hide");
  document.getElementById("break").classList.remove("center");
  document.getElementById("tub").classList.remove("hide");
  document.getElementById("tub").classList.add("center");
}
document.getElementById("button1").addEventListener("click", function () {
  hide23();
});
document.getElementById("button2").addEventListener("click", function () {
  hide13();
});
document.getElementById("button3").addEventListener("click", function () {
  hide12();
});