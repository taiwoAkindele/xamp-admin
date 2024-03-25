export const capitalizeFirstLetter = (str = "") => {
  // e.g 'let me leave' => Let Me Leave OR LET => Let
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};
