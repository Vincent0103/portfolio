const toCamelCase = (string) => string.split("-").map((word, i) => {
  if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}).join("");

const throttle = (func, limit) => {
  let lastFunction;
  let lastRan;
  return function applyThrottle(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunction);
      lastFunction = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context.args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default toCamelCase;
export { throttle };
