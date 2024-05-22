document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  var sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    section.classList.toggle("dark-mode");
  });

  document.querySelector("footer").classList.toggle("dark-mode");
});
