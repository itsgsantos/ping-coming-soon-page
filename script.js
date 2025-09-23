const form = document.querySelector("#contact");
form.addEventListener("change", checkAnswer);

function checkAnswer(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("erro");
    target.nextElementSibling.classList.add("show");
  } else {
    target.classList.remove("erro");
    target.nextElementSibling.classList.remove("show");
  }
}
