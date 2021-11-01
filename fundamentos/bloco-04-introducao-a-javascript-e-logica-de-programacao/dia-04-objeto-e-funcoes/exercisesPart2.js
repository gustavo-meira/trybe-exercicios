function checkPalindrome(word) {
  const wordReverse = word.split('').reverse().join('');

  if (word === wordReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('arara'));

console.log(checkPalindrome('desenvolvimento'));
