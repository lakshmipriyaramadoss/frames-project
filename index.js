
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
}

function toggleDropdown(menuId) {
  const submenu = document.getElementById(menuId);
  submenu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("sideMenu");
  const menuButton = document.querySelector(".menu");

  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("active");
  }
});