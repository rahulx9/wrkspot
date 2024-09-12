export function hasValidValues(obj) {
  for (let key in obj) {
    if (obj[key] !== "" && obj[key] !== undefined && obj[key] !== null) {
      return true;
    }
  }
  return false;
}
