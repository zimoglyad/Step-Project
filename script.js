function service() {
  const tab = document.querySelector(".main-services-tabs");
  const tabs = document.querySelectorAll(".main-services-tabs-title");
  const contents = document.querySelectorAll(".main-services-content");

  tab.addEventListener("click", (event) => {
    tabs.forEach((i) => {
      if (event.target === i) {
        event.target.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    });
    contents.forEach((a) => {
      if (event.target.dataset.id !== a.dataset.id) {
        a.classList.remove("content-active");
      } else {
        a.classList.add("content-active");
      }
    });
  });
}
service();

//--------------------------------------//
//   Our Amazing Work. Show Gallery     //
//--------------------------------------//

function workGallery() {
  let workTab = document.querySelector(".main-work-tab");
  let workBtn = document.querySelectorAll(".btn");
  let workImgs = document.querySelectorAll(".work-img");

  workTab.addEventListener("click", (e) => {
    workBtn.forEach((i) => {
      let current = e.target.dataset.filter;
      if (e.target === i) {
        e.target.classList.add("btn-active");
      } else {
        i.classList.remove("btn-active");
      }
      filter(current, workImgs);
    });

    function filter(category, items) {
      items.forEach((i) => {
        const isItemFiltered = i.classList.contains(category);
        if (!isItemFiltered && category !== "all") {
          i.classList.add("hide");
        } else {
          i.classList.remove("hide");
        }
      });
    }
  });
}
workGallery();

//--------------------------------------------//
//   Our Amazing Work. load imgages. Button   //
//--------------------------------------------//

const workImgsShow = document.querySelectorAll(".image-to-show");
const loadBtn = document.querySelector(".main-work-load-btn");

let isLoad = false;
let i = 0;

function nextSlide() {
  workImgsShow.forEach((x) => (x.style.display = "none"));

  let interval = setInterval(() => {
    if (isLoad) {
      workImgsShow[i].style.display = "block";
      i++;
    }
    if (i >= workImgsShow.length) {
      clearInterval(interval);
      loadBtn.style.display = "none";
    }
  }, 1000);
}
nextSlide();

loadBtn.addEventListener("click", () => {
  isLoad = true;
});

//-------------------------//
//         Slider         //
//------------------------//

const sliderLine = document.querySelector(".main-slider-line");

showSlides(0, "main-line-person");
function plusSlides(n, circle) {
  showSlides(n, circle);
}

function showSlides(n, circle) {
  let icons = document.getElementsByClassName(`${circle}`);

  let currentSlide = null;
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].classList.contains("line-active")) {
      currentSlide = i + n;
    }
    icons[i].className = icons[i].className.replace("line-active", "");
  }
  if (currentSlide >= icons.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = icons.length - 1;
  }

  icons[currentSlide].className += "  line-active";
}

//-------------------------//
//   Slider show info     //
//------------------------//

const sliderLineTab = document.querySelector(".main-slider-line");
const infoPerson = document.querySelectorAll(".main-info-person");
const linePerson = document.querySelectorAll(".main-line-person");

sliderLineTab.addEventListener("click", (e) => {
  linePerson.forEach((i) => {
    if (e.target === i) {
      e.target.classList.add("line-active");
    } else {
      i.classList.remove("line-active");
    }
  });
  infoPerson.forEach((a) => {
    if (e.target.dataset.id !== a.dataset.id) {
      a.classList.remove("info-active");
    } else {
      a.classList.add("info-active");
    }
  });
});

//-------------------------//
//   Masonry show galery  //
//------------------------//

const galery = document.querySelector(".galery");
const item = new Masonry(galery, {
  itemSelector: ".galery-item",
  gutter: 20,
  column: 5,
  columnWidth: 50,
});

const masLoad = document.querySelectorAll(".galery-load");
const masLoadBtn = document.querySelector(".main-best-images-load-btn");

let isLoadMas = false;
let a = 0;

function loadGalery() {
  masLoad.forEach((x) => (x.style.display = "none"));

  let interval = setInterval(() => {
    if (isLoadMas) {
      masLoad[a].style.display = "block";
      a++;
    }
    if (a >= masLoad.length) {
      clearInterval(interval);
      masLoadBtn.style.display = "none";
    }
  }, 1000);
}
loadGalery();

masLoadBtn.addEventListener("click", () => {
  isLoadMas = true;
});

//-------------------------//
//         Preloader      //
//------------------------//
