function alphabetPosition(letter) {
  if (letter === " ") {
    return -1; // Return a special value for spaces
  }
  return letter.toLowerCase().charCodeAt(0) - 96;
}

function letterFromAlphabetPosition(position) {
  return String.fromCharCode(position + 64); // 64 is added to convert from position to ASCII code
}

const caesarCipher = (str, num) => {
  const strArray = str.split("");
  const encryptedStrArray = [];
  const isAlphaNumeric = (str) => /^[a-z0-9]+$/gi.test(str);

  for (let i = 0; i < strArray.length; i++) {
    const currentPosition = alphabetPosition(strArray[i]);

    if (currentPosition === -1) {
      encryptedStrArray.push(" ");
    } else if (!isAlphaNumeric(strArray[i])) {
      encryptedStrArray.push(strArray[i]);
    } else {
      encryptedStrArray.push(
        strArray[i] === strArray[i].toLowerCase()
          ? letterFromAlphabetPosition(
              (currentPosition + num) % 26
            ).toLowerCase()
          : letterFromAlphabetPosition((currentPosition + num) % 26)
      );
    }
  }

  return encryptedStrArray.join("");
};

export default caesarCipher;
