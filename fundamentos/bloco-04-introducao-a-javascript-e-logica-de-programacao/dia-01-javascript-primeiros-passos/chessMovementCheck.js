const piece = 'Knight';
const pieceLowerCase = piece.toLowerCase();

switch(pieceLowerCase){
  case 'pawn':
    console.log('O Peão só anda para frente, na primeira jogada ele pode andar duas casas mas após isso só pode andar uma casa por vez.');
    break;
  case 'knight':
    console.log('O Cavalo anda em L, andando uma casa e duas para o lado ou duas para frente e uma para o lado.');
    break;
  case 'rook':
    console.log('A Torre anda sempre em linha reta e quantas casas ela quiser.');
    break;
  case 'bishop':
    console.log('O Bispo anda sempre nas diagonais e quantas casas ele quiser.');
    break;
  case 'queen':
    console.log('A Rainha pode andar em qualquer direção e quantas casas ela quiser.');
    break;
  case 'king':
    console.log('O Rei pode andar em qualquer direção porém só pode andar uma casa.');
    break;
  default:
    console.log('Erro: A peça que você passou não foi encontrada.');
}