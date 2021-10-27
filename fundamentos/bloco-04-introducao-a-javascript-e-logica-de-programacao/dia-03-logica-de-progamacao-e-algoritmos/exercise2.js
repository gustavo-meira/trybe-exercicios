const numberOfAsterisk = 5;

for (let line = 0; line < 5; line += 1) {
  let currLine = '';
  for (let column = 0; column < numberOfAsterisk; column += 1) {
    if (column <= line) {
      currLine += '*';
    }
  }
  console.log(currLine);
}
