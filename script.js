document.getElementById("waitlist-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    // Simulate form submission (Replace this with your backend/API call)
    document.getElementById("form-msg").classList.remove("hidden");
    this.reset();
  }
});
