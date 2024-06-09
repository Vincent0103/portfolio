const ContactRelated = (contactSectionElement) => {
  const contactRelatedContainer = contactSectionElement.querySelector(".contact-related-container");
  const emailHeading = contactRelatedContainer.querySelector("h1");

  const CopiedPopUp = () => {
    let popUpContainer = null;

    const get = () => {
      const copiedPopUpContainer = document.createElement("div");
      copiedPopUpContainer.classList.add("copied-pop-up-container");

      copiedPopUpContainer.style.transform = "scale(.8) translate(10%, -100%)";
      copiedPopUpContainer.style.pointerEvents = "none";
      copiedPopUpContainer.style.transition = "opacity .1s, transform .1s";

      const p = document.createElement("p");
      p.textContent = "Copied!";
      copiedPopUpContainer.appendChild(p);

      popUpContainer = copiedPopUpContainer;
      return copiedPopUpContainer;
    };

    const setPosition = (e) => {
      popUpContainer.style.left = `${e.pageX}px`;
      popUpContainer.style.top = `${e.pageY}px`;
    };

    const fadeIn = () => {
      popUpContainer.style.opacity = "1";
      popUpContainer.style.transform = "scale(1) translate(10%, -100%)";
    };

    const fadeOut = () => {
      popUpContainer.style.opacity = "0";
      popUpContainer.style.transform = "scale(.8) translate(10%, -100%)";
    };

    return {
      get, setPosition, fadeIn, fadeOut
    };
  };

  const handleEmailClick = () => {
    const copiedPopUp = CopiedPopUp();
    const copiedPopUpContainer = copiedPopUp.get();

    const emailText = emailHeading.textContent;
    const TIMING_TO_ALLOW_ANIMATION = 1;
    let isClickable = true;

    emailHeading.addEventListener("click", (e) => {
      navigator.clipboard.writeText(emailText).then(() => {
        if (!isClickable) return;
        isClickable = false;

        copiedPopUp.setPosition(e);

        return new Promise((resolve) => {
          document.body.appendChild(copiedPopUpContainer);
          setTimeout(() => resolve(), TIMING_TO_ALLOW_ANIMATION);
        })
          .then(() => {
            copiedPopUp.fadeIn();

            setTimeout(() => {
              copiedPopUp.fadeOut();

              setTimeout(() => {
                document.body.removeChild(copiedPopUpContainer);
                isClickable = true;
              }, 100);
            }, 2000);
          });
      });
    });
  };

  return { handleEmailClick };
};

export default ContactRelated;
