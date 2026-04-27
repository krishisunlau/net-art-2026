const events = document.querySelectorAll(".event");
const messageBox = document.getElementById("messageBox");

events.forEach(function(event) {
  event.addEventListener("mouseenter", function() {
    messageBox.textContent = event.dataset.message;
    messageBox.style.opacity = "1";
  });

  event.addEventListener("mouseleave", function() {
    messageBox.style.opacity = "0";
  });
});