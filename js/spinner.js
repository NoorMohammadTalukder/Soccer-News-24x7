window.addEventListener("load", function () {
  const spinner = document.querySelector(".spinner");
  const mainspinner = document.querySelector(".main-spinner");
  mainspinner.style.display = "flex";
  spinner.style.display = "block";

  setTimeout(function () {
    mainspinner.style.display = "none";
    spinner.style.display = "none";
  }, 2000);
});
