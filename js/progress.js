$(document).ready(function () {
  // Simulating a loading process
  var progress = 0;
  var interval = setInterval(function () {
    progress += 33;
    $(".progress-bar")
      .css("width", progress + "%")
      .attr("aria-valuenow", progress);

    if (progress >= 100) {
      clearInterval(interval);
      const x = document.querySelector(".progress");
      x.style.display = "none";
    }
  }, 500);
});
