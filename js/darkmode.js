const modeButton = document.getElementById("modeButton");
const appBody = document.body;

modeButton.addEventListener("click", () => {
  appBody.classList.toggle("dark-mode");

  if (appBody.classList.contains("dark-mode")) {
    modeButton.textContent = "Switch to Light Mode";
  } else {
    modeButton.textContent = "Switch to Dark Mode";
  }
});
