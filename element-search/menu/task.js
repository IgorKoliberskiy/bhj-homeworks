const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {
  const menuItem = menuLink[i].closest(".menu__item");
  const menuSub = menuItem.querySelector(".menu_sub");

  menuLink[i].onclick = function () {
    if (menuSub) {
      const activeSub = document.querySelectorAll(".menu_active");
      menuSub.classList.toggle("menu_active");
      for (let b = 0; b < activeSub.length; b++) {
        if (activeSub) {
          activeSub[b].classList.remove("menu_active");
        }
      }
      return false;
    }
  }
}