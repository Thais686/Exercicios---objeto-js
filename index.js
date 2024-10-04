let pessoa = {}
let atualizar=0

pessoa.nome = prompt("Digite seu nome")
pessoa.idade= prompt("Digite sua idade")
pessoa.cidade= prompt("Digite sua cidade")

console.log(`Nome: ${pessoa.nome}\n Idade: ${pessoa.idade} \n Cidade: ${pessoa.cidade}`)

 atualizar=prompt("Deseja atualizar a idade ou cidade.\n Se deseja atualizar idade digite 1 \n Se deseja atualizar cidade digite 2 \n Se não deseja atualizar digite 0")

 if(atualizar==1){

    pessoa.idade= prompt("Qual a sua idade")

 }


 else if(atualizar==2){

    pessoa.cidade = prompt("Qual a cidade")

 }

 console.log(`Nome: ${pessoa.nome}\n Idade: ${pessoa.idade} \n Cidade: ${pessoa.cidade}`)