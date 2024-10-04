let livro={}

livro.nome = prompt("Digite o nome do livro") 

livro.autor= prompt("Digite o nome do autor")

livro.anodePublicacao= prompt("Digite o ano de publicacao")


let livro2={}

livro2.nome= prompt("Digite o nome do segundo livro")

livro2.autor= prompt("Digite o nome do autor do segundo livro")

livro2.anodePublicacao= prompt("Digite o ano de publicação do segundo livro")


let livroantigo=livro.nome

if(livroantigo<livro2.nome){

    livroantigo=livro2.nome

}


console.log(`O livro mais antigo é ${livroantigo}`)

console.log("Existe algum livro com o nome Estudando programação?")

if(livro.nome== "Estudando programação"){

    console.log("SIM")
}

else if(livro2.nome== "Estudando programação"){

    console.log("SIM")

}

else{

    console.log("NAO")
}


if(livro.autor== livro2.autor){

    console.log("Os dois livros tem o mesmo autor")

}

else{

    console.log("Os livros nao tem os mesmos autores ")
}

console.log(`O autor do livro ${livro.nome} é  ${livro.autor} `)

console.log(`O autor do livro ${livro2.nome} é  ${livro2.autor}`)
