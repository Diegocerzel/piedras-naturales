const mobileMenuController = {
  burgerMenu: document.querySelector(".menu-burger"),
  trigger: document.querySelector(".mobile-menu-trigger"),
  wrapperBox: document.querySelector(".mobile-sidebar"),
  menuComponent: document.querySelector("mobile-menu"),
  toggleSidebar: function () {
    this.burgerMenu.classList.toggle("open");
    this.wrapperBox.classList.toggle("open");
  },
  setEvents: function () {
    this.trigger.addEventListener("click", (e) => {
      this.toggleSidebar();
    });

    document.body.addEventListener("click", (e) => {
      if (e.target !== this.menuComponent && e.target !== this.trigger) {
        if (this.wrapperBox.classList.contains("open")) {
          this.toggleSidebar();
        }
      }
    });
  },
};

mobileMenuController.setEvents();
