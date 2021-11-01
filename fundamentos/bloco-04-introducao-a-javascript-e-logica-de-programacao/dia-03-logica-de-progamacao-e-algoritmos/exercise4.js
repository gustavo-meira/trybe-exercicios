const numberOfAsterisk = 9;
let controlLeft = Math.floor(numberOfAsterisk / 2);
let controlRight = controlLeft;

for (let line = 0; line < numberOfAsterisk; line += 1) {
  let currLine = '';
  if (controlRight >= numberOfAsterisk) {
    continue;
  }
  for (let column = 0; column < numberOfAsterisk; column += 1) {
    if (column >= controlLeft && column <= controlRight) {
      currLine += '*';
    } else {
      currLine += ' ';
    }
  }
  console.log(currLine);
  controlLeft -= 1;
  controlRight += 1;
}
