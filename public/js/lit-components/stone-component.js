import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

async function loadCanteras() {
  let response = await fetch("/.netlify/functions/get-canteras");
  const data = await response.json();
  return data;
}
async function loadGranito() {
  let response = await fetch("/.netlify/functions/get-granito");
  const data = await response.json();
  return data;
}
async function loadMarmol() {
  let response = await fetch("/.netlify/functions/get-marmol");
  const data = await response.json();
  return data;
}
async function loadPiedras() {
  let response = await fetch("/.netlify/functions/get-piedras");
  const data = await response.json();
  return data;
}
async function loadRecinto() {
  let response = await fetch("/.netlify/functions/get-recinto");
  const data = await response.json();
  return data;
}
async function loadTravertino() {
  let response = await fetch("/.netlify/functions/get-travertino");
  const data = await response.json();
  return data;
}

const breakPoint = window.matchMedia("(min-width:825px)");
const breakPointTwo = window.matchMedia("(min-width:1050px)");

const marmolStyles = css`
  @font-face {
    font-family: "Crimson Text", serif;
    src: url("/public/css/fonts/crimson-text/CrimsonText-Regular.ttf")
      format("truetype");
    font-weight: normal;
  }
  @font-face {
    font-family: "Crimson Text", serif;
    src: url("/public/css/fonts/crimson-text/CrimsonText-SemiBold.ttf")
      format("truetype");
    font-weight: bold;
  }
  @font-face {
    font-family: "Crimson Text", serif;
    src: url("/public/css/fonts/crimson-text/CrimsonText-Bold.ttf")
      format("truetype");
    font-weight: bolder;
  }
  @font-face {
    font-family: "Arimo", sans-serif;
    src: url("/public/css/fonts/arimo/Arimo-Regular.ttf") format("truetype");
    font-weight: normal;
  }
  @font-face {
    font-family: "Arimo", sans-serif;
    src: url("/public/css/fonts/arimo/Arimo-SemiBold.ttf") format("truetype");
    font-weight: bold;
  }
  @font-face {
    font-family: "Arimo", sans-serif;
    src: url("/public/css/fonts/arimo/Arimo-Bold.ttf") format("truetype");
    font-weight: bolder;
  }

  html {
    color: #222;
    font-size: 1em;
    line-height: 1.4;
  }

  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  .hidden,
  [hidden] {
    display: none !important;
  }

  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .sr-only.focusable:active,
  .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: inherit;
    width: auto;
  }

  .invisible {
    visibility: hidden;
  }

  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }

  @media print,
    (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 1.25dppx),
    (min-resolution: 120dpi) {
  }

  @media print {
    *,
    *::before,
    *::after {
      background: #fff !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]::after {
      content: " (" attr(href) ")";
    }

    abbr[title]::after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]::after,
    a[href^="javascript:"]::after {
      content: "";
    }

    pre {
      white-space: pre-wrap !important;
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --dynamic-padding-1: calc(
      40px + (120 - 40) * ((100vw - 300px) / (1600 - 300))
    );
    --dynamic-padding-2: calc(
      30px + (60 - 30) * ((100vw - 300px) / (1600 - 300))
    );
    --dynamic-padding-3: calc(
      15px + (40 - 15) * ((100vw - 300px) / (1600 - 300))
    );
    --dynamic-padding-4: calc(
      5px + (15 - 5) * ((100vw - 300px) / (1600 - 300))
    );
    --dynamic-padding-5: calc(
      4px + (10 - 4) * ((100vw - 300px) / (1600 - 300))
    );

    --theme-gold: #bba15d;
    --theme-green: #084d4c;
    --theme-black: #272727;
    --theme-grey: #706f6f;
    --theme-beige: #f7f3eb;

    --select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);

    --black-font-1: rgba(0, 0, 0, 1);
    --black-font-2: rgba(0, 0, 0, 0.8);

    --box-shadow-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    --main-transition: all 0.25s ease-out;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-family: "Crimson Text", serif;
    font-weight: 600;
    line-height: 1.1;
    color: var(--theme-green);
  }

  p,
  a,
  strong,
  small {
    margin: 0;
    font-family: "Arimo", sans-serif;
    font-weight: 500;
    color: var(--theme-black);
  }

  a {
    text-decoration: none;
    color: var(--theme-black);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    position: relative;
  }

  body {
    overflow-x: hidden;
  }
  header {
    --double-padding: calc(var(--dynamic-padding-3) * 2);
    width: 100vw;
    height: 100px;
    position: sticky;
    top: 0;
    padding: 20px var(--dynamic-padding-3);
    background: #fff;
    box-shadow: var(--box-shadow-2);
    z-index: 1;
  }
  footer {
    padding-top: var(--dynamic-padding-2);
    padding-bottom: var(--dynamic-padding-2);
    background: var(--theme-black);
  }
  section:not(.hero-section) {
    position: relative;
    margin-top: var(--dynamic-padding-1);
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  nav a,
  nav button {
    display: block;
    position: relative;
    text-transform: capitalize;
  }

  nav a::after,
  nav button::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
    background: var(--theme-black);
    transform: scaleX(0);
    transform-origin: center left;
    transition: var(--main-transition);
  }

  nav a.active::after {
    transform: scaleX(1);
  }

  .content-wrapper {
    width: 100vw;
    padding-left: var(--dynamic-padding-2);
    padding-right: var(--dynamic-padding-2);
  }

  .center-top-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: start;
  }

  .auto-flex-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
  }

  .auto-flex-between {
    display: flex;
    justify-content: space-between;
  }

  .auto-flex-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
  }

  /* Utility classes */

  .column-centered {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .line-centered {
    position: relative;
    top: 50%;
    transform: translatey(-50%);
  }
  .button-link a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 17px 25px 14px;
    border: 1px solid var(--theme-green);
    font-size: 18px;
    font-weight: 600;
    color: var(--theme-green);
    transition: var(--main-transition);
  }
  .image-wrapper {
    overflow: hidden;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /**/

  @media screen and (hover: hover) {
    nav a:hover::after {
      transform: scaleX(1);
    }
    .button-link a:hover {
      background: var(--theme-green);
      color: #fff;
    }
  }
`;

class StoneComponent extends LitElement {
  static styles = [
    marmolStyles,
    css`
      h2 {
        display: initial !important;
        font-size: 21px;
        font-weight: 700;
      }
      h3,
      h4 {
        font-family: "Crimson Text", serif;
        font-size: 18px;
        margin: 0;
      }
      p,
      strong {
        font-size: 16px;
      }
      a {
        font-size: 16px;
      }
      .stone-content {
        gap: var(--dynamic-padding-1);
      }
      .color-group {
        width: 100%;
        margin-block-start: var(--dynamic-padding-3);
        font-family: "Arimo", sans-serif;
        text-align: center;
      }
      .stone-item {
        width: 100%;
        max-width: 400px;
      }
      .stone-item > .image-wrapper {
        width: 100%;
        aspect-ratio: 1/1;
      }
      .stone-item > .image-wrapper.double {
        position: relative;
      }
      .stone-item > .image-wrapper.double img {
        position: absolute;
        transition: var(--main-transition);
      }
      .stone-item > .image-wrapper.double img:nth-of-type(1) {
        left: -100%;
        transform: translate(100%);
      }
      .stone-item > .image-wrapper.double img:nth-of-type(2) {
        transform: translate(100%);
      }
      .stone-item > .image-wrapper.double img.back {
        transform: none;
      }
      .stone-info {
        width: 100%;
      }
      summary {
        display: block;
        width: 100%;
        position: relative;
        padding-top: calc(var(--dynamic-padding-4) * 1.4);
        padding-bottom: var(--dynamic-padding-4);
        border-bottom: 1px solid var(--theme-black);
        outline: none;
        cursor: pointer;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      summary > div {
        align-items: baseline;
        align-content: baseline;
        pointer-events: none;
      }
      summary strong {
        display: block;
        position: relative;
        left: 0;
        pointer-events: none;
      }
      .stone-info .content {
        --main-margin: var(--dynamic-padding-2);
        --second-margin: var(--dynamic-padding-3);
        flex-wrap: wrap;
        width: 100%;
        padding: var(--main-margin) var(--second-margin) var(--second-margin);
        background: var(--theme-beige);
        border: 1px solid var(--theme-black);
        border-top: 0;
      }
      .stone-info .content h3,
      .stone-info .content h4 {
        width: 100%;
        text-align: center;
      }

      .category {
        width: 100%;
      }
      .category.one {
        max-width: none;
      }
      .category.one.centered {
        margin: auto;
      }
      .category.two,
      .category.three {
        --main-margin: var(--dynamic-padding-2);
        margin-top: var(--main-margin);
      }
      .category.two {
        max-width: none;
      }
      .category.three {
        width: 100%;
      }
      .category.three h3 {
        width: 100%;
        text-align: center;
      }
      .category-title {
        text-transform: uppercase;
        font-weight: 700;
      }
      .grosor-wrapper {
        --main-margin: var(--dynamic-padding-4);
        margin-top: var(--main-margin);
      }
      .grosor-wrapper * {
        color: var(--theme-black);
      }
      .subcategory-title {
        font-family: "Arimo", sans-serif;
        font-weight: 600;
        font-size: 17px;
      }
      .subcategory-list {
        margin-top: var(--dynamic-padding-5);
      }
      .subcategory-list.straight {
        margin-top: var(--dynamic-padding-4);
      }
      .subcategory-size {
        font-family: "Arimo", sans-serif;
        font-size: 16px;
        text-align: center;
      }
      .legend {
        align-items: center;
        width: 100%;
        gap: 10px;
        margin-top: var(--dynamic-padding-2);
      }
      .legend * {
        font-family: "Arimo", sans-serif;
        font-size: 13px;
        font-weight: 600;
      }
      .legend > span {
        transform: translateY(11%);
      }
      .legend ul {
        align-items: center;
        width: 100%;
        gap: var(--dynamic-padding-4);
      }
      .legend ul li:nth-of-type(1) {
        padding-right: var(--dynamic-padding-4);
        border-right: 1px solid;
      }
      .acabado-list {
        max-width: calc(100% - var(--dynamic-padding-2));
        margin-top: var(--dynamic-padding-4);
        column-gap: 20px;
        row-gap: 5px;
      }
      .acabado-item {
        font-family: "Arimo", sans-serif;
        font-size: 16px;
        font-weight: 600;
      }

      @media screen and (hover: hover) {
      }

      @media screen and (min-width: 460px) {
        h2 {
          font-size: 24px;
        }
        strong {
          font-size: 18px;
        }
        .legend * {
          font-size: 15px;
        }
      }

      @media screen and (min-width: 825px) {
        h2 {
          font-size: 26px;
        }
        h3,
        h4,
        p {
          font-size: 20px;
        }
        strong {
          font-size: 18px;
        }
        a {
          font-size: 16px;
        }
        .stone-content {
          gap: var(--dynamic-padding-2);
        }
        .color-group {
          --stone-w: 640px;
          --el-padding: var(--dynamic-padding-2);
          --diff-1: calc(100% - var(--stone-w) - var(--el-padding));
          --diff-2: calc(var(--diff-1) / 2);
          padding-left: var(--diff-2);
          font-family: "Arimo", sans-serif;
          text-align: left;
        }
        .stone-item {
          max-width: 320px;
        }
        summary strong::after {
          transform: translatey(-3px);
        }
        .stone-info[open] summary strong::after {
          transform: translatey(-3px) rotate(90deg);
        }

        .stone-info .content {
          --main-margin: var(--dynamic-padding-3);
          --second-margin: var(--dynamic-padding-4);
        }

        .category.two,
        .category.three {
          --main-margin: var(--dynamic-padding-3);
        }
        .subcategory-title {
          font-size: 18px;
        }
      }
      @media screen and (min-width: 1050px) {
        h2 {
          font-size: 32px;
        }
        a {
          font-size: 18px;
        }
        .stone-content {
          gap: var(--dynamic-padding-1);
        }
        .color-group {
          --stone-w: 750px;
          --el-padding: var(--dynamic-padding-1);
        }
        .stone-item {
          max-width: 375px;
        }
        .stone-info .content {
          padding: var(--main-margin) 0 var(--second-margin);
        }
        .category {
          width: auto;
        }
        .category.one {
          max-width: 70%;
        }
        .category.two {
          max-width: 30%;
          margin-block-start: 0;
        }
        .legend {
          padding-left: var(--dynamic-padding-4);
        }
      }
      @media screen and (min-width: 1250px) {
        .color-group {
          --stone-w: 900px;
        }
        .stone-item {
          max-width: 450px;
        }
        .stone-info .content {
          padding: var(--main-margin) var(--second-margin) var(--second-margin);
        }
        .legend {
          padding-left: 0;
        }
      }
    `,
  ];
  static get properties() {
    return {
      activeIndex: { type: Number },
      stones: { type: Array },
      isClosing: { type: Boolean },
      isExpanding: { type: Boolean },
      animation: { type: Boolean },
      doubleTitle: { type: Boolean },
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    this.activeIndex = Number(sessionStorage.getItem("subActiveIndex"));
    switch (this.activeIndex) {
      case 0:
        await loadMarmol().then((data) => {
          this.stones = data;
        });
        break;
      case 1:
        await loadCanteras().then((data) => {
          this.stones = data;
        });
        break;
      case 2:
        await loadGranito().then((data) => {
          this.stones = data;
        });
        break;
      case 3:
        await loadPiedras().then((data) => {
          this.stones = data;
        });
        break;
      case 4:
        await loadRecinto().then((data) => {
          this.stones = data;
        });
        break;
      case 5:
        await loadTravertino().then((data) => {
          this.stones = data;
        });
        break;
    }
  }
  constructor() {
    super();
    this.activeIndex = 0;
    this.stones = [];
    this.isClosing = false;
    this.isExpanding = false;
    this.animation = null;
    this.doubleTitle = false;
  }

  expand(mainEl, summaryEl, contentEl) {
    this.isExpanding = true;
    mainEl.open = true;
    const startHeight = `${mainEl.offsetHeight}px`;
    const endHeight = `${summaryEl.offsetHeight + contentEl.offsetHeight}px`;
    if (this.animation) {
      this.animation.cancel();
    }
    this.animation = mainEl.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease",
      }
    );
    this.animation.onfinish = () => this.onAnimationFinish(mainEl, true);
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  onAnimationFinish(mainEl, open) {
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    mainEl.style.height = mainEl.style.overflow = "";
    mainEl.open = open;
  }

  open(mainEl, summaryEl, contentEl) {
    mainEl.style.height = `${mainEl.offsetHeight}px`;
    window.requestAnimationFrame(() =>
      this.expand(mainEl, summaryEl, contentEl)
    );
  }

  shrink(mainEl, summaryEl) {
    this.isClosing = true;
    const startHeight = `${mainEl.offsetHeight}px`;
    const endHeight = `${summaryEl.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = mainEl.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease",
      }
    );

    this.animation.onfinish = () => this.onAnimationFinish(mainEl, false);
    this.animation.oncancel = () => (this.isClosing = false);
  }

  clickHandler(event) {
    event.preventDefault();
    let mainEl = event.target.parentElement;
    let summaryEl = event.target;
    let contentEl = mainEl.children[1];
    mainEl.style.overflow = "hidden";

    if (this.isClosing || !mainEl.open) {
      this.open(mainEl, summaryEl, contentEl);
    } else if (this.isExpanding || mainEl.open) {
      this.shrink(mainEl, summaryEl);
    }
  }

  hoverHandler(event) {
    this.doubleTitle = !this.doubleTitle;
    if (!breakPointTwo.matches) {
    }
  }

  renderCategory(object) {
    if (object.grosor !== undefined) {
      if (typeof object.grosor === "string") {
        return html` <div class="grosor-wrapper center-top-wrap">
          <h4 class="subcategory-title">${object.grosor}</h4>
          ${object.sizes
            ? html`<ul class="subcategory-list">
                ${object.sizes.map((item, i) => {
                  return html` <li class="subcategory-size">${item}</li> `;
                })}
              </ul> `
            : null}
        </div>`;
      } else if (Array.isArray(object.grosor)) {
        console.log(object.grosor);
        return html` ${object.grosor.map((item, i) => {
          return html`
            <div class="grosor-wrapper center-top-wrap">
              <h4 class="subcategory-title">${item.value}</h4>
              <ul class="subcategory-list">
                ${item.sizes.map((size, i) => {
                  return html`<li class="subcategory-size">${size}</li>`;
                })}
              </ul>
            </div>
          `;
        })}`;
      }
    } else {
      return html`<ul class="subcategory-list straight">
        ${object.sizes.map((item, i) => {
          return html` <li class="subcategory-size">${item}</li> `;
        })}
      </ul>`;
    }
  }

  renderGrid() {
    return html`
      ${this.stones.map((item, i) => {
        return html`
          ${item.color
            ? html` <h2 class="color-group">${item.color}</h2> `
            : null}
          <article class="stone-item center-top-wrap">
            ${Array.isArray(item.src)
              ? html`
                  <div
                    class="image-wrapper double"
                    @mouseover=${this.hoverHandler}
                    @mouseout=${this.hoverHandler}
                  >
                    ${item.src.map((pic, i) => {
                      return html`
                        <img
                          width="400"
                          height="400"
                          src=${pic}
                          alt="imagen de una piedra"
                          class=${this.doubleTitle ? "back" : ""}
                        />
                      `;
                    })}
                  </div>
                `
              : html`
                  <div class="image-wrapper">
                    <img
                      width="400"
                      height="400"
                      src=${item.src}
                      alt="imagen de una piedra"
                      class=${this.doubleTitle ? "back" : ""}
                    />
                  </div>
                `}

            <details class="stone-info">
              <summary @click="${this.clickHandler}">
                <div class="auto-flex-between">
                  ${item.sku === "pied001"
                    ? html` <h2 class="stone-name">${item.name}</h2> `
                    : html` <h2 class="stone-name">${item.name}</h2> `}

                  <strong>Ver más</strong>
                </div>
              </summary>

              <div class="content auto-flex-between">
                ${item.categories.length === 1
                  ? html`
                      <article class="category one centered center-top-wrap">
                        <h3 class="category-title">${item.categories[0].id}</h3>
                        ${this.renderCategory(item.categories[0])}
                      </article>
                    `
                  : html`
                      ${item.categories.map((category, i) => {
                        return html` <article
                          class=${i === 0
                            ? "category one center-top-wrap"
                            : i === 1
                            ? "category two center-top-wrap"
                            : null}
                        >
                          <h3 class="category-title">${category.id}</h3>
                          ${this.renderCategory(category)}
                        </article>`;
                      })}
                    `}
                <article class="category three center-top-wrap">
                  <h3 class="category-title">Acabados</h3>
                  <ul class="acabado-list center-top-wrap">
                    ${item.acabados.map((item, i) => {
                      return html` <li class="acabado-item">${item}</li> `;
                    })}
                  </ul>
                </article>
                ${item.legend
                  ? html`
                      <article class="legend auto-flex-start">
                        <span>*</span>
                        <ul class="auto-flex-start">
                          ${item.legend.map((item, i) => {
                            return html` <li class="legend-item">${item}</li> `;
                          })}
                        </ul>
                      </article>
                    `
                  : null}
              </div>
            </details>
          </article>
        `;
      })}
      ${this.stones.length % 2 === 1 &&
      breakPoint.matches &&
      this.activeIndex !== 2 &&
      this.activeIndex !== 6
        ? html` <article class="stone-item mask"></article>`
        : null}
    `;
  }
  render() {
    return html`
      <div class="stone-content center-top-wrap">${this.renderGrid()}</div>
    `;
  }
}

customElements.define("stone-component", StoneComponent);

/*




*/
