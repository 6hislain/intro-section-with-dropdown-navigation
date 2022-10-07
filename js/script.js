document.addEventListener("DOMContentLoaded", function () {
  let showMenu = true;
  document.querySelector(".menu-button").addEventListener("click", function () {
    document.getElementsByClassName("navbar")[0].style.flexDirection = showMenu
      ? "column"
      : "row";
    document.querySelectorAll(".nav-item").forEach((e, i) => {
      if (!showMenu) e.style.display = "none";
      else {
        e.style.display = "inherit";
        e.style.width = "100%";
      }
    });
    showMenu = !showMenu;
  });
});
