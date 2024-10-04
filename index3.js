let carro={}
let carroMaiscaro
let i=1


 let carroMarca

let carroModelo

let carroAno



while(true){

    carro.modelo= prompt("Digite o modelo do seu carro")

    if(carro.modelo==''){

        break;
    }



    
    carro.marca= prompt("Digite a marca do seu carro")
    carro.ano= prompt("Digite o ano do seu carro")
    carro.valor= prompt("Digite o valor do seu carro")

    if(i==1){
    
    carroMaiscaro=carro.valor}


    if(carro.valor>carroMaiscaro){

        carroMaiscaro=carro.valor

        carroMarca=carro.marca

        carroModelo=carro.modelo

        carroAno= carro.ano

        

    }

        i++

}

console.log(`O carro mais caro é  o da marca:${carroMarca} \n do modelo: ${carroModelo}\n  do ano: ${carroAno}\n  do valor de: ${carroMaiscaro} `)


