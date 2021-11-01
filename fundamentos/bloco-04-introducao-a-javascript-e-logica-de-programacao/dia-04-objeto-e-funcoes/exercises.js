const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (let index in info) {
  console.log(index);
}

for (let index in info) {
  console.log(info[index]);
}

const secondObject = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let index in info) {
  if (index === 'recorrente') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + secondObject[index]);
  }
}
