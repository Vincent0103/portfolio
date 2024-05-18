const toCamelCase = (string) => string.split("-").map((word, i) => {
  if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}).join("");


export default toCamelCase;
