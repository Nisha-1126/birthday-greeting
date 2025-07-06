document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("okBtn").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();
    if(name) {
      localStorage.setItem("username", name); // save name
      window.location.href = "greeting.html";
    } else {
      alert("Please enter your name 😊");
    }
  });
});
