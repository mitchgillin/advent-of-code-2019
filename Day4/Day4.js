const range = [273025, 767253];

// Numbers must remain the same or increase
// Numbers must be 6 digits and within the given range
// Two adjacent digits are the same

const isValidPassword = number => {
  const numArray = number
    .toString()
    .split("")
    .map(num => parseInt(num));
  let repeating = false;
  let repeatingValue;
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] == numArray[i + 1]) {
      repeating = true;
    }
    if (numArray[i] > numArray[i + 1]) {
      return false;
    } else if (numArray[i] === numArray[i + 1] && repeating === false) {
      repeatingValue += numArray[i];
      repeating = true;
    }
  }

  return repeating;
};

const Day4A = () => {
  const possiblePasswords = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if (isValidPassword(i)) {
      possiblePasswords.push(i);
    }
  }

  return possiblePasswords.length;
};

export { Day4A };
