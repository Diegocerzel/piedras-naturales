import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

const globalStyles = css`
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

class HeaderComponent extends LitElement {
  static styles = [
    globalStyles,
    css`
      .logo-nav {
        align-items: center;
      }
      .logo-title {
        font-weight: 500;
        color: var(--theme-green);
      }
      @media only screen and (max-width: 824px) {
        .header-content-left {
          gap: 15px;
        }
        .home-link img {
          width: 40px;
          height: 40px;
        }
        .logo-nav {
          gap: 10px;
        }
        .logo-title {
          font-size: 35px;
        }
        nav {
          display: none;
        }
        .header-content-right .contact-link {
          display: none;
        }
      }
      @media only screen and (min-width: 825px) {
        .home-link img {
          width: 60px;
          height: 60px;
        }
        .logo-title {
          font-size: 20px;
        }
        nav {
          display: initial;
          margin-inline-start: 20px;
          transform: translatey(7.5%);
        }
        .nav-menu li a {
          color: var(--theme-black);
          font-weight: bold;
        }
        .dropdown-button {
          font-family: "Arimo", sans-serif;
          font-size: 16px;
          font-weight: bold;
          padding-inline: 0;
        }
        .productos-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          background: white;
          box-shadow: var(--box-shadow-2);
          white-space: nowrap;
        }
        .dropdown-wrapper:hover .productos-dropdown {
          display: initial;
        }
        .dropdown-list li:not(:first-of-type) {
          margin-block-start: 10px;
        }
        .dropdown-list {
          justify-content: start;
          padding: 10px;
        }
        .dropdown-list li {
          width: auto;
        }
        .dropdown-list a {
          width: 100%;
          text-align: left;
          color: var(--theme-black);
          font-size: 16px;
          font-weight: normal !important;
        }
        .mobile-menu-trigger {
          display: none;
        }
        .header-content-right .contact-link {
          display: initial;
        }
      }
      @media only screen and (min-width: 1050px) {
        a {
          font-size: 18px;
        }
        .logo-title {
          font-size: 28px;
        }
        .dropdown-button {
          font-size: 18px;
        }
      }
      @media only screen and (min-width: 1250px) {
      }
    `,
  ];
  static get properties() {
    return {
      mainNavItems: { type: Array },
      mainPaths: { type: Array },
      subNavItems: { type: Array },
      subPaths: { type: Array },
      activeIndex: { type: Number },
      subActiveIndex: { type: Number },
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    const assessItems = (array) => {
      let temp = false;
      array.forEach((item, i) => {
        let tempItem;
        if (item === "mármol") {
          tempItem = "marmol";
        } else {
          tempItem = item;
        }
        if (window.location.href.includes(tempItem)) {
          temp = true;
        }
      });
      return temp;
    };
    let index = sessionStorage.getItem("activeIndex");
    let subIndex = sessionStorage.getItem("subActiveIndex");

    !index && !subIndex
      ? (this.activeIndex = 0)
      : !index && subIndex
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && !subIndex
      ? (this.activeIndex = JSON.parse(index))
      : index && subIndex && assessItems(this.subNavItems)
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && subIndex && !assessItems(this.subNavItems)
      ? ((this.subActiveIndex = -1), (this.activeIndex = JSON.parse(index)))
      : null;
  }

  constructor() {
    super();
    this.mainNavItems = ["inicio", "productos"];
    this.mainPaths = ["/", " "];
    this.subNavItems = [
      "mármol",
      "canteras",
      "granito",
      "piedras",
      "recinto",
      "travertino",
    ];
    this.subPaths = [
      "/marmol",
      "/canteras",
      "/granito",
      "/piedras",
      "/recinto",
      "/travertino",
    ];
  }

  logoClickHandler(event) {
    this.activeIndex = 0;
    this.subActiveIndex = -1;
    sessionStorage.setItem("activeIndex", JSON.stringify(this.activeIndex));
    sessionStorage.setItem(
      "subActiveIndex",
      JSON.stringify(this.subActiveIndex)
    );
  }

  mainClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const indexVal = this.mainNavItems.indexOf(textVal);
    this.activeIndex = indexVal;
    sessionStorage.setItem("activeIndex", JSON.stringify(indexVal));
  }

  subClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const subIndexVal = this.subNavItems.indexOf(textVal);
    this.subActiveIndex = subIndexVal;
    sessionStorage.setItem("subActiveIndex", JSON.stringify(subIndexVal));
  }

  contactHandler(event) {
    const indexVal = 3;
    this.activeIndex = indexVal;
    sessionStorage.setItem("activeIndex", JSON.stringify(indexVal));
  }
  render() {
    return html`
      <div class="header-content auto-flex-between">
        <div class="header-content-left auto-flex-start">
          <div class="logo-nav auto-flex-start">
            <h3 class="logo-title">Piedras Naturales</h3>

            <nav>
              <ul class="nav-menu auto-flex-start">
                ${this.mainNavItems.map((navItem, i) => {
                  if (i === 1) {
                    return html`<li class="dropdown-wrapper">
                      <div class="dropdown-button">Productos</div>
                      <div class="productos-dropdown horizontal-center">
                        <ul class="dropdown-list center-top-wrap">
                          ${this.subNavItems.map((navItem, i) => {
                            return html`
                              <li>
                                <a
                                  href="${this.subPaths[i]}"
                                  class="${i === this.subActiveIndex
                                    ? "active"
                                    : ""}"
                                  @click="${this.subClickHandler}"
                                  >${navItem}</a
                                >
                              </li>
                            `;
                          })}
                        </ul>
                      </div>
                    </li>`;
                  } else {
                    return html`<li>
                      <a
                        href="${this.mainPaths[i]}"
                        class="${i === this.activeIndex ? "active" : ""}"
                        @click="${this.mainClickHandler}"
                        >${this.mainNavItems[i]}</a
                      >
                    </li>`;
                  }
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

class MobileMenu extends LitElement {
  static styles = [
    globalStyles,
    css`
      @media only screen and (max-width: 824px) {
        .mobile-menu {
          display: flex;
          width: 250px;
          height: 100vh;
          margin-block-start: var(--dynamic-padding-3);
          gap: 50px;
        }
        .nav-menu {
          display: inline-flex;
          align-items: start;
          width: auto;
          gap: 30px;
        }
        .nav-menu > li {
          width: auto;
        }
        .nav-menu > li > a {
          width: auto;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }
        .nav-menu li p {
          font-size: 18px;
          color: white;
        }
        .nav-menu li a::after {
          background: var(--theme-gold);
        }
        .menu-list-wrapper {
          gap: 15px;
          align-items: start;
        }
        .menu-list {
          align-items: start;
          gap: 8px;
        }
        .menu-list a {
          width: auto;
          font-size: 16px;
          font-weight: 400;
          color: white;
        }
        .mobile-menu .button-link a {
          margin-top: 50px;
          color: #fff;
          border-color: var(--theme-gold);
        }
      }
      @media only screen and (min-width: 825px) {
        .mobile-menu {
          display: none;
        }
      }
      @media only screen and (min-width: 1050px) {
      }
      @media only screen and (min-width: 1250px) {
      }

      @media screen and (hover: hover) {
        .mobile-menu .button-link a:hover {
          background: var(--theme-gold);
          color: #000;
        }
      }
    `,
  ];
  static get properties() {
    return {
      mainNavItems: { type: Array },
      mainPaths: { type: Array },
      subNavItems: { type: Array },
      subPaths: { type: Array },
      activeIndex: { type: Number },
      subActiveIndex: { type: Number },
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    const assessItems = (array) => {
      let temp = false;
      array.forEach((item, i) => {
        let tempItem;
        if (item === "mármol") {
          tempItem = "marmol";
        } else {
          tempItem = item;
        }
        if (window.location.href.includes(tempItem)) {
          temp = true;
        }
      });
      return temp;
    };

    let index = sessionStorage.getItem("activeIndex");
    let subIndex = sessionStorage.getItem("subActiveIndex");

    !index && !subIndex
      ? (this.activeIndex = 0)
      : !index && subIndex
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && !subIndex
      ? (this.activeIndex = JSON.parse(index))
      : index && subIndex && assessItems(this.subNavItems)
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && subIndex && !assessItems(this.subNavItems)
      ? ((this.subActiveIndex = -1), (this.activeIndex = JSON.parse(index)))
      : null;
  }
  constructor() {
    super();
    this.mainNavItems = ["inicio", "productos"];
    this.mainPaths = ["/", " "];
    this.subNavItems = [
      "mármol",
      "canteras",
      "granito",
      "piedras",
      "recinto",
      "travertino",
    ];
    this.subPaths = [
      "/marmol",
      "/canteras",
      "/granito",
      "/piedras",
      "/recinto",
      "/travertino",
    ];
  }

  logoClickHandler(event) {
    this.activeIndex = 0;
    this.subActiveIndex = -1;
    sessionStorage.setItem("activeIndex", JSON.stringify(this.activeIndex));
    sessionStorage.setItem(
      "subActiveIndex",
      JSON.stringify(this.subActiveIndex)
    );
  }

  mainClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const indexVal = this.mainNavItems.indexOf(textVal);
    this.activeIndex = indexVal;
    sessionStorage.setItem("activeIndex", JSON.stringify(indexVal));
  }

  subClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const subIndexVal = this.subNavItems.indexOf(textVal);
    this.subActiveIndex = subIndexVal;
    sessionStorage.setItem("subActiveIndex", JSON.stringify(subIndexVal));
  }

  contactHandler(event) {
    const indexVal = 4;
    this.activeIndex = indexVal;
    sessionStorage.setItem("activeIndex", JSON.stringify(indexVal));
  }

  render() {
    return html`
      <div class="auto-flex-col mobile-menu">
        <nav>
          <ul class="auto-flex-col nav-menu column-centered">
            ${this.mainNavItems.map((navItem, i) => {
              if (i === 1) {
                return html`
                  <li class="auto-flex-col menu-list-wrapper">
                    <p>Productos</p>
                    <ul class="menu-list auto-flex-col">
                      ${this.subNavItems.map((item, i) => {
                        return html`
                          <li>
                            <a
                              href="${this.subPaths[i]}"
                              class="${i === this.subActiveIndex
                                ? "active"
                                : ""}"
                              @click="${this.subClickHandler}"
                              >${this.subNavItems[i]}</a
                            >
                          </li>
                        `;
                      })}
                    </ul>
                  </li>
                `;
              } else {
                return html`<li>
                  <a
                    href="${this.mainPaths[i]}"
                    class="${i === this.activeIndex ? "active" : ""}"
                    @click="${this.mainClickHandler}"
                    >${this.mainNavItems[i]}</a
                  >
                </li>`;
              }
            })}
          </ul>
        </nav>
      </div>
    `;
  }
}

class ContactBanner extends LitElement {
  static styles = [
    globalStyles,
    css`
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
      .banner-content {
        width: 100%;
      }
      .banner-left {
        width: 100%;
        order: 2;
        margin-top: var(--dynamic-padding-2);
      }
      .banner-right {
        justify-content: space-between;
        align-items: start;
        gap: 0;
        width: 100%;
        height: 100%;
        order: 1;
      }
      .banner-right h3 {
        max-width: 60%;
        font-weight: 700;
      }
      .banner-right p {
        margin-top: var(--dynamic-padding-3);
        max-width: 600px;
      }
      .banner-right .contact-link {
        margin-top: var(--dynamic-padding-2);
      }
      @media screen and (min-width: 460px) {
        h3 {
          font-size: 24px;
        }
        .banner-right h3 {
          max-width: 40%;
        }
      }
      @media screen and (min-width: 825px) {
        h3 {
          font-size: 26px;
        }
        p {
          font-size: 20px;
        }
        .banner-right p {
          max-width: 700px;
        }
      }
      @media screen and (min-width: 1050px) {
        h3 {
          font-size: 32px;
        }
        p {
          font-size: 20px;
        }
        .banner-content {
          height: 340px;
        }
        .banner-left {
          width: 45%;
          height: 100%;
          order: 1;
          margin-top: 0;
        }
        .banner-right {
          width: 55%;
          height: 100%;
          padding-left: var(--dynamic-padding-2);
          order: 2;
        }
        .banner-right h3 {
          max-width: none;
        }
        .banner-right p {
          margin-top: 0;
          max-width: none;
        }
        .banner-right .contact-link {
          margin-top: 0;
        }
      }
      @media screen and (min-width: 1250px) {
        .banner-content {
          height: 280px;
        }
        .banner-left {
          width: 40%;
        }
        .banner-right {
          width: 40%;
        }
      }
    `,
  ];

  static properties = {
    alt: { type: String },
    src: { type: String },
  };

  contactHandler(event) {
    sessionStorage.setItem("activeIndex", JSON.stringify(4));
    sessionStorage.setItem("subActiveIndex", JSON.stringify(-1));
  }

  render() {
    return html`
      <div class="banner-content center-top-wrap">
        <div class="banner-left image-wrapper">
          <img width="600" height="337.5" alt="${this.alt}" src="${this.src}" />
        </div>
        <div class="banner-right auto-flex-col">
          <h3>NO DUDES EN CONTACTARNOS</h3>
          <p>
            Ofrecemos diversos servicios y productos a la medida que se adaptan
            a cualquier tipo de proyectos. Póngase en contacto hoy y pregunte
            por nuestros servicios.
          </p>
          <div class="button-link contact-link">
            <a
              href="/contacto"
              aria-label="ir a la pagina de contacto"
              @click="${this.contactHandler}"
              >CONTÁCTANOS</a
            >
          </div>
        </div>
      </div>
    `;
  }
}

class FooterComponent extends LitElement {
  static styles = [
    globalStyles,
    css`
      ul {
        margin: 0;
        padding: 0;
      }
      h3 {
        font-size: 17px;
      }
      a {
        font-size: 16px;
      }
      small {
        font-size: 14px;
        transition: var(--main-transition);
      }
      .footer-content {
        width: 100%;
      }
      .footer-content * {
        color: white;
        font-family: "Arimo", sans-serif;
      }
      .footer-top-one {
        width: 100%;
        flex-wrap: wrap;
        align-items: start;
        gap: 0;
      }
      .footer-top-one nav {
        display: flex;
        width: 100%;
      }
      .footer-top-one .auto-flex-col {
        align-items: start;
      }
      .footer-top-one > .auto-flex-col {
        width: 50%;
        gap: 15px;
        margin-top: var(--dynamic-padding-2);
      }
      .footer-top-one nav > .auto-flex-col {
        width: 50%;
        align-items: start;
        gap: 15px;
      }
      .footer-top-one nav > .auto-flex-col {
        width: 100%;
        gap: 15px;
      }
      .footer-top-one .auto-flex-col .auto-flex-col {
        align-items: start;
        gap: 10px;
      }

      .footer-top-two {
        width: 100%;
        margin-top: var(--dynamic-padding-2);
      }

      .scroll-top {
        display: flex;
        width: 50px;
        height: 50px;
        margin: var(--dynamic-padding-2);
        border: 1px solid white;
        border-radius: 50%;
        transition: var(--main-transition);
      }

      .scroll-top svg {
        width: 50%;
        height: 50%;
        margin: auto;
        transform: translatey(0) rotate(-90deg);
        transition: var(--main-transition);
        pointer-events: none;
      }

      .footer-content > hr {
        margin-top: var(--dynamic-padding-2);
        margin-bottom: var(--dynamic-padding-2);
      }

      .footer-bottom {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: calc(var(--dynamic-padding-1) / 2);
        padding-top: calc(var(--dynamic-padding-1) / 2);
        align-items: baseline;
        border-top: 1px solid;
      }

      @media screen and (min-width: 460px) {
      }

      @media screen and (min-width: 825px) {
        h3 {
          font-size: 20px;
        }
        a {
          font-size: 16px;
          transition: var(--main-transition);
        }
        a::after {
          display: none;
        }
        .footer-top-one {
          flex-wrap: nowrap;
          --double-padding: calc(var(--dynamic-padding-2) * 2);
          width: calc(100% - 60px - var(--double-padding));
        }
        .footer-top-one nav {
          width: auto;
        }
        .footer-top-one > .auto-flex-col {
          width: auto;
          gap: 15px;
          margin-top: 0;
          margin-left: 60px;
        }
        .footer-top-one nav > .auto-flex-col:nth-of-type(2) {
          margin-left: 60px;
        }
        .footer-top-two {
          --double-padding: calc(var(--dynamic-padding-2) * 2);
          width: calc(60px + var(--double-padding));
          margin-top: 0;
        }
        .scroll-top {
          width: 60px;
          height: 60px;
          margin: auto;
        }
      }
      @media screen and (min-width: 1050px) {
        small {
          font-size: 16px;
        }
      }
      @media screen and (hover: hover) {
        .footer-content a:hover,
        .footer-content a small:hover {
          color: var(--theme-gold);
        }
        .scroll-top:hover {
          border-color: var(--theme-gold);
        }
        .scroll-top:hover svg {
          transform: translatey(-10%) rotate(-90deg);
        }
      }
    `,
  ];

  static get properties() {
    return {
      mainNavItems: { type: Array },
      mainPaths: { type: Array },
      subNavItems: { type: Array },
      subPaths: { type: Array },
      activeIndex: { type: Number },
      subActiveIndex: { type: Number },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    const assessItems = (array) => {
      let temp = false;
      array.forEach((item, i) => {
        let tempItem;
        if (item === "mármol") {
          tempItem = "marmol";
        } else {
          tempItem = item;
        }
        if (window.location.href.includes(tempItem)) {
          temp = true;
        }
      });
      return temp;
    };
    let index = sessionStorage.getItem("activeIndex");
    let subIndex = sessionStorage.getItem("subActiveIndex");

    !index && !subIndex
      ? (this.activeIndex = 0)
      : !index && subIndex
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && !subIndex
      ? (this.activeIndex = JSON.parse(index))
      : index && subIndex && assessItems(this.subNavItems)
      ? ((this.activeIndex = -1), (this.subActiveIndex = JSON.parse(subIndex)))
      : index && subIndex && !assessItems(this.subNavItems)
      ? ((this.subActiveIndex = -1), (this.activeIndex = JSON.parse(index)))
      : null;
  }

  constructor() {
    super();
    this.mainNavItems = ["inicio"];
    this.mainPaths = ["/"];
    this.subNavItems = [
      "mármol",
      "canteras",
      "granito",
      "piedras",
      "recinto",
      "travertino",
    ];
    this.subPaths = [
      "/marmol",
      "/canteras",
      "/granito",
      "/piedras",
      "/recinto",
      "/travertino",
    ];
  }

  scrollHandler(event) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  mainClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const indexVal = this.mainNavItems.indexOf(textVal);
    this.activeIndex = indexVal;
    sessionStorage.setItem("activeIndex", JSON.stringify(indexVal));
  }

  subClickHandler(event) {
    const textVal = event.target.innerText.toLowerCase();
    const subIndexVal = this.subNavItems.indexOf(textVal);
    this.subActiveIndex = subIndexVal;
    sessionStorage.setItem("subActiveIndex", JSON.stringify(subIndexVal));
  }

  render() {
    return html`
      <div class="content-wrapper center-top-wrap footer-content">
        <div class="auto-flex-start footer-top-one">
          <nav>
            <div class="auto-flex-col main-nav">
              <h3>SITIO</h3>
              <ul class="auto-flex-col">
                ${this.mainNavItems.map((item, i) => {
                  return html`
                    <li>
                      <a
                        href="${this.mainPaths[i]}"
                        class="${i === this.activeIndex ? "active" : ""}"
                        @click="${this.mainClickHandler}"
                        >${this.mainNavItems[i]}</a
                      >
                    </li>
                  `;
                })}
              </ul>
            </div>
            <div class="auto-flex-col product-nav">
              <h3>PRODUCTOS</h3>
              <ul class="auto-flex-col">
                ${this.subNavItems.map((item, i) => {
                  return html`
                    <li>
                      <a
                        href="${this.subPaths[i]}"
                        class="${i === this.subActiveIndex ? "active" : ""}"
                        @click="${this.subClickHandler}"
                        >${this.subNavItems[i]}</a
                      >
                    </li>
                  `;
                })}
              </ul>
            </div>
          </nav>
        </div>
        <div class="center-top-wrap footer-top-two">
          <button
            class="scroll-top"
            aria-label="regresar hasta arriba"
            @click="${this.scrollHandler}"
          >
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
              />
            </svg>
          </button>
        </div>
        <hr />
        <div class="footer-bottom">
          <small class="copyright">
            &copy; Piedras Naturales ${new Date().getFullYear()}
          </small>
        </div>
      </div>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
customElements.define("mobile-menu", MobileMenu);
customElements.define("contact-banner", ContactBanner);
customElements.define("footer-component", FooterComponent);

/*<div class="auto-flex-col redes">
            <h3>REDES</h3>
            <ul class="auto-flex-col">
              <li>
                <a
                  href="https://www.facebook.com"
                  aria-label="ir a la pagina facebook de oliman stone"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  aria-label="ir a la pagina instagram de oliman stone"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  aria-label="ir a la pagina linkedin de oliman stone"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div> */
