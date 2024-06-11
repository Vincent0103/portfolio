const Navbar = (navbarContainer, ...sectionContainers) => {
  const handleLinkClick = () => {
    const links = navbarContainer.querySelectorAll(".links-container *");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        const offset = 100;

        // Get the bounding rectangle of the target element
        const rect = targetElement.getBoundingClientRect();

        // Calculate the absolute top position in the document
        const absoluteTop = window.scrollY + rect.top;

        // Adjust the position with your custom offset
        const scrollToPosition = absoluteTop - offset;

        // Scroll to the calculated position smoothly
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
