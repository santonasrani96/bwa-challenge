// navbar
window.onscroll = () => {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// nav active
const navItems = document.querySelectorAll("nav ul li.nav-item");
const underline = document.querySelector("#underline");

function setUnderlinePosition(item) {
  underline.style.left = item.offsetLeft + "px";
  underline.style.width = item.offsetWidth + "px";
}

navItems.forEach((item) => {
  const nav = item.querySelector("a");

  nav.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("navbar-active"));

    item.classList.add("navbar-active");

    setUnderlinePosition(item);
  });
});

setUnderlinePosition(navItems[0]);
