const applyHeight = (parent) => {
  const slides = document.querySelectorAll(`${parent} .keen-slider__slide`);
  slides.forEach((slide, i) => {
    let newHeight;
    let mainWidth = slide.offsetWidth;

    parent === "#project-slider"
      ? ((newHeight = mainWidth * 0.5625),
        (slide.children[0].style.width = mainWidth + "px"),
        (slide.children[0].style.height = newHeight + "px"),
        (slide.children[1].style.width = mainWidth + "px"),
        (slide.children[1].style.height = newHeight + "px"))
      : ((newHeight = mainWidth), (slide.style.height = newHeight + "px"));
  });
};

const sliderOne = new KeenSlider("#header-keen-slider", {
  loop: true,
  selector: "#header-keen-slider .keen-slider__slide",
  breakpoints: {
    "(min-width:460px)": {
      slides: {
        perView: 2,
        spacing: 30,
      },
    },
    "(min-width:825px)": {
      slides: {
        perView: 3,
        spacing: 40,
      },
    },
    "(min-width:1050px)": {
      slides: {
        perView: 4,
        spacing: 50,
      },
    },
    "(min-width:1250px)": {
      slides: {
        perView: 5,
        spacing: 60,
      },
    },
  },
  created: () => {
    setTimeout(() => {
      applyHeight("#header-keen-slider");
    }, 100);
  },
});

const sliderOneCtr = {
  previousButton: document.querySelector(".slider-arrow.left"),
  nextButton: document.querySelector(".slider-arrow.right"),
  setButtonEvents: function () {
    this.previousButton.addEventListener("click", (e) => {
      sliderOne.prev();
    });
    this.nextButton.addEventListener("click", (e) => {
      sliderOne.next();
    });
  },
};

const sliderNavCtr = {
  navItems: document.querySelectorAll(
    "#header-keen-slider .keen-slider__slide a"
  ),
  passNavData: function (index) {
    sessionStorage.setItem("subActiveIndex", JSON.stringify(index));
  },
  setClicks: function () {
    this.navItems.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        this.passNavData(i);
      });
    });
  },
};

const projectData = [
  {
    title: "FRATTA",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "FRATTO",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "FRITTA",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "FRITTO",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

let presentationImage = document.querySelector(".presentation .image-wrapper");
let imageWidth = presentationImage.offsetWidth;
let finalHeight = imageWidth;
presentationImage.style.height = finalHeight + "px";

const sliderTwoCtr = {
  previousButton: document.querySelector(".arrow.left"),
  nextButton: document.querySelector(".arrow.right"),
  dataWrapper: document.querySelector(".project-text"),
  titleHolder: document.querySelector(".project-title"),
  copyHolder: document.querySelector(".project-copy"),
  activeIndex: 0,
  setButtonEvents: function () {
    this.previousButton.addEventListener("click", (e) => {
      sliderTwo.prev();
      console.log(this.activeIndex);
      this.setText(this.activeIndex);
    });
    this.nextButton.addEventListener("click", (e) => {
      sliderTwo.next();
      this.setText(this.activeIndex);
    });
  },
  setText: function (index) {
    const animFunc = () => {
      this.titleHolder.innerHTML = projectData[index].title;
      this.copyHolder.innerHTML = projectData[index].copy;
      requestAnimationFrame(() => {
        this.titleHolder.classList.remove("animating");
        this.copyHolder.classList.remove("animating");
        this.titleHolder.removeEventListener("transitionend", animFunc);
        this.copyHolder.removeEventListener("transitionend", animFunc);
      });
    };
    requestAnimationFrame(() => {
      this.titleHolder.classList.add("animating");
      this.copyHolder.classList.add("animating");
      this.titleHolder.addEventListener("transitionend", animFunc);
      this.copyHolder.addEventListener("transitionend", animFunc);
    });
  },
  init: function () {
    let index = 0;
    this.setText(index);
  },
};

const sliderTwo = new KeenSlider(
  "#project-slider",
  {
    loop: true,
    duration: 500,
    drag: false,
    created: () => {
      setTimeout(() => {
        applyHeight("#project-slider");
      }, 100);
    },
  },
  [
    (slider) => {
      slider.on("slideChanged", () => {
        let detailsObject = slider.track.details;
        let index = detailsObject.rel;
        sliderTwoCtr.activeIndex = index;
      });
    },
  ]
);

sliderOneCtr.setButtonEvents();
sliderNavCtr.setClicks();
sliderTwoCtr.setButtonEvents();
sliderTwoCtr.init();
