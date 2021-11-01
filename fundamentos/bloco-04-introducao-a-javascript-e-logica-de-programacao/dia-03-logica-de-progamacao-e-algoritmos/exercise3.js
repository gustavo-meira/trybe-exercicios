const numberOfAsterisk = 5;
let controlSpaces = numberOfAsterisk - 1;

for (let line = 0; line < numberOfAsterisk; line += 1) {
  let currLine = '';
  for (let column = 0; column < numberOfAsterisk; column += 1) {
    if (column >= controlSpaces) {
      currLine += '*';
    } else {
      currLine += ' ';
    }
  }
  console.log(currLine);
  controlSpaces -= 1;
}
