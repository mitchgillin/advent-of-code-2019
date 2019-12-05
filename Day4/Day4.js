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
  let repeatingValues = [];
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] == numArray[i + 1]) {
      repeating = true;
      repeatingValues.push(numArray[i], numArray[i + 1]);
    }
    if (numArray[i] > numArray[i + 1]) {
      return false;
    } else if (numArray[i] === numArray[i + 1] && repeating === false) {
      repeatingValue += numArray[i];
      repeating = true;
    }
  }

  let foo = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (let i = 0; i < repeatingValues.length; i++) {
    foo[repeatingValues[i]] = foo[repeatingValues[i]] + 1;
  }

  const validEntries =
    Object.entries(foo)
      .map(pair => {
        if (pair[1] === 2) {
          return pair[0];
        } else {
          return null;
        }
      })
      .filter(item => item != null).length > 0;
  return validEntries > 0;
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
