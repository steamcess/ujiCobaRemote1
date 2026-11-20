const button = document.querySelector("#greet-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Terima kasih sudah mencoba tombol ini!";
});