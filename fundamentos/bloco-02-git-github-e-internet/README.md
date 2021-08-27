# Git, GitHub e Internet

Neste bloco aprendemos os comandos basicos do git e a melhor forma de utilizá-los, e ainda, o conceito de cliente e servidor que é amplamente utilizado na web.

## Comandos mais utilizados do git

Para criarmos um repositório local devemos usar o seguinte comando na pasta onde queremos criar o repositório:
```git
git init
```

Para clonar um repositório remoto temos que pegar a url pelo site da github e digitar o seguinte comando:
```git
git clone <link-do-repositorio-remoto>
```

Para criar uma branch utilizaremos o seguinte comando:
```git
git branch <nome-da-branch>
```

Para trocarmos a branch onde estamos trabalhando devemos usar o seguinte comando:
```git
git checkout <nome-da-branch>
```

Para adicionar nossas alterações na stage area devemos utilizar o seguinte comando:
```git
git add .
```
Para adicionar todos os arquivos ou:
```git
git add <nome-do-arquivo>
```

Para "commitarmos" nossas alterações feitas e dar uma mensagem ao commit devemos utilizar o comando:
```git
git commit -m "Mensagem a ser commitada"
```

Quando quisermos mandar as alterações para o repositório remoto devemos utilizar o comando:
```git
git push
```
Ou quando for a primeira vez que estamos enviando:
```git
git push -u origin <nome-da-branch>
```

Se quisermos saber se tem alterações no repositório remoto precisamos usar o comando:
```git
git fetch
```

Para incorporar essas mudanças do remoto ao nosso repositório local utilizaremos o comando:
```git
git pull
```