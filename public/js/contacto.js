const breakPointMobileSm = matchMedia("screen and (max-width:459px)");
const breakPointMobileMd = matchMedia(
  "screen and (min-width:460px) and (max-width:1049px)"
);
const breakPointTablet = matchMedia(
  "screen and (min-width:825px) and (max-width:1049px)"
);

const background = document.querySelector(".contact.right");
let newHeight;

if (breakPointMobileSm.matches) {
  let elWidth = background.offsetWidth;
  newHeight = elWidth * 0.75;
} else if (breakPointMobileMd.matches) {
  let elWidth = background.offsetWidth;
  newHeight = elWidth * 0.5625;
} else if (breakPointTablet.matches) {

}

background.style.height = newHeight + "px";
