// console.log(alert('Xin chào'));
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".btn-close");
var closeModal = document.getElementById("close-modal");

var buyBtn = document.querySelectorAll(".btn-buy");

closeButton.addEventListener("click", function (e) {
  // closeButton.style.display ='none';
  modal.style.display = "none";
});

closeModal.addEventListener("click", function (e) {
console.log('clear modal');
  modal.style.display = "none";

});

buyBtn.addEventListener("click", function (e) {
//    modal.style.display = "none";
console.log('clear modal');
});
