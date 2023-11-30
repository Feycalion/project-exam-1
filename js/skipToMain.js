document.addEventListener("DOMContentLoaded", function () {
  var skipLink = document.querySelector(".skip-to-main");

  skipLink.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.tabIndex = -1;
      targetElement.focus();
    }
  });
});
