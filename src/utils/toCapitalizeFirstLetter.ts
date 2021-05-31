function capitalizeFirstLetter(string: string): string | number {
  if (string === '' || string.trim().length <= 0) {
    return 0;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;
