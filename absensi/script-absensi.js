const form = document.getElementById("absensiForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 4000); // hilang setelah 4 detik
});
