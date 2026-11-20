const button = document.querySelector("#greet-button");
const resetButton = document.querySelector("#reset-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Terima kasih sudah mencoba tombol ini!";
});

resetButton.addEventListener("click", () => {
  message.textContent = "";
});