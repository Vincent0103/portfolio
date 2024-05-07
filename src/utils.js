export default function positiveMod(a, b) {
  return ((a % b) + b) % b;
}

export const isObject = (target) => typeof target === "object" && target !== null && !Array.isArray(target);
