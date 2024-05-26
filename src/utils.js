const toCamelCase = (string) => {
  if (typeof string !== "string") return null;
  return string.split("-").map((word, i) => {
    if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  }).join("");
};

const toTitle = (string) => string.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

function throttle(func, delay) {
  let lastCall = 0;
  return function applyThrottle(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export default toCamelCase;
export { toTitle, throttle };
