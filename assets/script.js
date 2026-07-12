const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = mainNav ? [...mainNav.querySelectorAll("a")] : [];
const revealItems = [...document.querySelectorAll(".reveal")];
const year = document.getElementById("year");
const mobileNavigation = window.matchMedia("(max-width: 1024px)");

const updateHeader = () => {
  if (header && !header.classList.contains("inner-header")) {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
};

const setNavigationAvailability = (isOpen) => {
  if (!mainNav) return;

  const unavailable = mobileNavigation.matches && !isOpen;
  mainNav.toggleAttribute("inert", unavailable);
  mainNav.setAttribute("aria-hidden", String(unavailable));
};

const closeMenu = ({ returnFocus = false } = {}) => {
  document.body.classList.remove("menu-open");

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  setNavigationAvailability(false);

  if (returnFocus && menuToggle && mobileNavigation.matches) {
    menuToggle.focus();
  }
};

const openMenu = () => {
  if (!menuToggle || !mainNav) return;

  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  setNavigationAvailability(true);

  const firstLink = navLinks.find((link) => !link.hasAttribute("disabled"));
  firstLink?.focus();
};

if (menuToggle && mainNav) {
  document.documentElement.classList.add("nav-ready");
  setNavigationAvailability(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    isOpen ? closeMenu({ returnFocus: true }) : openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("menu-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu({ returnFocus: true });
      return;
    }

    if (event.key !== "Tab") return;

    const focusableItems = [menuToggle, ...navLinks].filter(
      (item) => item && !item.inert && item.getClientRects().length
    );
    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  });

  mobileNavigation.addEventListener("change", () => closeMenu());
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
  document.documentElement.classList.add("js");
}

if (year) {
  year.textContent = new Date().getFullYear();
}
