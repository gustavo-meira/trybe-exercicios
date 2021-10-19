const studentGrade = 80;

if (studentGrade > 100 || studentGrade < 0) {
  console.log('Erro: A nota passada não se encontra entre 0 e 100');
} else if (studentGrade >= 90) {
  console.log('Você recebeu nota A');
} else if (studentGrade >= 80) {
  console.log('Você recebeu nota B');
} else if (studentGrade >= 70) {
  console.log('Você recebeu nota C');
} else if (studentGrade >= 60) {
  console.log('Você recebeu nota D');
} else if (studentGrade >= 50) {
  console.log('Você recebeu nota E');
} else {
  console.log('Você recebeu nota F');
}