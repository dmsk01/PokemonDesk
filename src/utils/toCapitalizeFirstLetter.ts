function capitalizeFirstLetter(string: string): string | number {
  if (!string.match(/[a-z]/i)) {
    return 0;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;
