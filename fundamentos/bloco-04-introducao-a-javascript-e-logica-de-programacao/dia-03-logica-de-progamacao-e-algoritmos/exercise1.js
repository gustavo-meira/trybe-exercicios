const numberOfAsterisk = 5;

for (let line = 0; line < numberOfAsterisk; line += 1) {
  let currLine = '';
  for (let column = 0; column < numberOfAsterisk; column += 1) {
    currLine += '*';
  }
  console.log(currLine);
}
