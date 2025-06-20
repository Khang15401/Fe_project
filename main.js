// console.log(alert('Xin chào'));
var modal = document.querySelector(".modal");
var buyBTNs = document.querySelectorAll(".btn-buy");
var closeButton = document.querySelector(".btn-close");
var closeModal = document.getElementById("close-modal");
const modalContainer = document.querySelector(".container-modal");

function openModal() {
  modal.classList.add("open");
}

for (const buyBTN of buyBTNs) {
  buyBTN.addEventListener("click", openModal);
}

closeButton.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

closeModal.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

modal.addEventListener("click", function () {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", function(e){
  e.stopPropagation();
})