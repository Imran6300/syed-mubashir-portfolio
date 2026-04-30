export const scrollToSection = (id) => {
  const element = document.querySelector(id);
  if (!element) return;

  const NAVBAR_HEIGHT = 96; // px (adjust if needed)

  const y =
    element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
