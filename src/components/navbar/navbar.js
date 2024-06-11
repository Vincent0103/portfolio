const Navbar = (navbarContainer) => {
  const handleLinkClick = () => {
    const links = navbarContainer.querySelectorAll(".links-container *");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        const offset = 100;

        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const scrollToPosition = absoluteTop - offset;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth"
        });
      });
    });
  };

  return { handleLinkClick };
};

export default Navbar;
