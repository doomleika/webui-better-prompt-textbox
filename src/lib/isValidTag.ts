const hadNoComma = /\,/;
const isValidTag = (inputString: string) => {
  if (hadNoComma.test(inputString)) {
    return false;
  }
  const strArray = inputString.split(':');
  if(strArray.length >= 2) {
    const item = strArray[-1];
    if (!isANumber(item)) {
      return false;
    }
  }
  return true;
}

const isANumber = (str: string) => {
  // First, check if the string is empty or null
  if (!str) {
    return false;
  }

  // Try to parse the string as a float or integer
  const num = parseFloat(str);
  if (isNaN(num)) {
    return false;
  }

  // Check if the parsed number is equal to the original string
  // This ensures that the string is not a number in scientific notation or has leading/trailing spaces
  if (String(num) !== str.trim()) {
    return false;
  }

  // If all checks pass, the string is a valid number
  return true;
}

export { isValidTag };
