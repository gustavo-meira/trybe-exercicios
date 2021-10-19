const hip = 100;
const opp = 40;
const adj = 20;
const angle = hip + opp + adj;

if (hip < 0 || opp < 0 || adj < 0) {
  console.log('Erro: O angulo de um triangulo não pode ser negativo.')
} else if (angle === 180) {
  console.log(true);
} else {
  console.log(false);
}