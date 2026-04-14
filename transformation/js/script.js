let isGothic = false;

function transformPage() {
  let page = document.querySelector("#page");
  let title = document.querySelector("#title");

  if (isGothic === false) {
    page.classList.add("gothic");
    title.innerHTML = "Boo";
    isGothic = true;
  } else {
    page.classList.remove("gothic");
    title.innerHTML = "Bibbity Bobbity";
    isGothic = false;
  }
}

// CLICK ANYWHERE
document.addEventListener("click", transformPage);