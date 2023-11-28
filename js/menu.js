function toggleNav() {
  var nav = document.querySelector("header nav");
  nav.style.display =
    nav.style.display === "none" || nav.style.display === "" ? "flex" : "none";
}
