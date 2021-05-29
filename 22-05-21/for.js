var alunos = [
  {nome: 'João',idade: 15},
  {nome: 'Murad',idade: 19},
  {nome: 'Cesar',idade: 18}
]

var aluno;
for(var i = 0;i < alunos.length; i++){
  if(alunos[i].nome === "João"){
    aluno = alunos[i]
    break
  }
}

console.log(aluno)