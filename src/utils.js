const toCamelCase = (string) => string.split("-").map((word, i) => {
  if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}).join("");

const toTitle = (string) => string.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

export default toCamelCase;
export { toTitle };

console.log(toTitle("tic-tac-toe"));
