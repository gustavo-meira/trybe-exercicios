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

function indexHigherNumber(array) {
  let index;
  let highestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      index = i;
      highestNumber = array[i];
    }
  }
  return index;
}

console.log(indexHigherNumber([2, 3, 6, 7, 10, 1]));

function smallerNumber(array) {
  let index;
  let smallest = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      index = i;
    }
  }
  return index;
}

console.log(smallerNumber([2, 4, 6, 7, 10, 0, -3]));
