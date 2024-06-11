const ContactRelated = (contactSectionElement) => {
  const contactRelatedContainer = contactSectionElement.querySelector(".contact-related-container");
  const emailHeading = contactRelatedContainer.querySelector("h1");

  const CopiedPopUp = () => {
    let popUpContainer = null;

    const create = () => {
      const copiedPopUpContainer = document.createElement("div");
      copiedPopUpContainer.classList.add("copied-pop-up-container");

      copiedPopUpContainer.style.transform = "scale(.9) translate(10%, -100%)";
      copiedPopUpContainer.style.pointerEvents = "none";
      copiedPopUpContainer.style.transition = "opacity .1s, transform .1s";

      const p = document.createElement("p");
      p.textContent = "Copied!";
      copiedPopUpContainer.appendChild(p);

      popUpContainer = copiedPopUpContainer;
      return copiedPopUpContainer;
    };

    const setPosition = (left, top) => {
      popUpContainer.style.left = `${left}px`;
      popUpContainer.style.top = `${top}px`;
    };

    const fadeIn = () => {
      popUpContainer.style.opacity = "1";
      popUpContainer.style.transform = "scale(1) translate(10%, -100%)";
    };

    const fadeOut = () => {
      popUpContainer.style.opacity = "0";
      popUpContainer.style.transform = "scale(.9) translate(10%, -100%)";
    };

    return {
      create, setPosition, fadeIn, fadeOut
    };
  };

  const clickableMap = {
    email: true,
    discord: true,
  };

  let timeoutId;

  const removeCopiedPopUpContainer = (copiedPopUpContainer, copiedPopUp, forSection) => {
    copiedPopUp.fadeOut();

    setTimeout(() => {
      contactRelatedContainer.removeChild(copiedPopUpContainer);
      clickableMap[forSection] = true;
    }, 100);
  };

  const onAnotherBtnClick = (copiedPopUpContainer, forSection) => {
    if (timeoutId) clearTimeout(timeoutId);
    contactRelatedContainer.removeChild(copiedPopUpContainer);
    clickableMap[forSection] = true;
  };

  const isAnotherBtnClick = (forSection) => {
    const result = Object.entries(clickableMap).find(([key, item]) => !item && key !== forSection);
    return (result) ? result[0] : null;
  };

  const addPopUp = (copiedPopUpContainer, copiedPopUp, forSection) => new Promise((resolve) => {
    const TIMING_TO_ALLOW_ANIMATION = 10;
    contactRelatedContainer.appendChild(copiedPopUpContainer);
    setTimeout(() => resolve(), TIMING_TO_ALLOW_ANIMATION);
  })
    .then(() => {
      copiedPopUp.fadeIn();

      timeoutId = setTimeout(() => {
        removeCopiedPopUpContainer(copiedPopUpContainer, copiedPopUp, forSection);
      }, 2000);
    });

  const onClipboardCopy = (e, text, forSection, copiedPopUp, copiedPopUpContainer) => {
    if (!(forSection in clickableMap)) throw Error("bad forSection parameter input");

    navigator.clipboard.writeText(text).then(() => {
      const key = isAnotherBtnClick(forSection);

      if (key) onAnotherBtnClick(copiedPopUpContainer, key);

      if (!clickableMap[forSection]) return;
      clickableMap[forSection] = false;

      copiedPopUp.setPosition(e.pageX, e.pageY);

      addPopUp(copiedPopUpContainer, copiedPopUp, forSection);
    });
  };

  const handleContactClick = () => {
    const copiedPopUp = CopiedPopUp();
    const copiedPopUpContainer = copiedPopUp.create();

    const emailText = emailHeading.textContent;
    const discordLink = contactRelatedContainer.querySelector(".link-container#discord");

    emailHeading.addEventListener("click", (e) => {
      onClipboardCopy(e, emailText, "email", copiedPopUp, copiedPopUpContainer);
    });
    discordLink.addEventListener("click", (e) => {
      onClipboardCopy(e, "vinctcode", "discord", copiedPopUp, copiedPopUpContainer);
    });
  };

  return { handleContactClick };
};

export default ContactRelated;
