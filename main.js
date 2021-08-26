function closeNewsletter() {
  var x = document.getElementById("newsletter");
  var y = document.getElementById("close-newsletter");

  x.classList.toggle("newsletter-hidden");
  y.classList.toggle("close-newsletter-rotate");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
