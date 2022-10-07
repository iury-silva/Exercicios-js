let valores = [8, 7, 0, 2, 5, 6]

valores.push(1)
valores.sort()

let pos = valores.indexOf(1)

console.log(valores)
console.log(`o array tem tamanho ${valores.length}`)
console.log(`o array na primeira posição tem o valor ${valores[0]}`)

if(pos== -1){

  console.log("Esse valor que você procura não existe!!")

}else
  console.log(`O valor que você procura esta na posição ${pos}`)


// valores.sort()

// for(let x=0; x<valores.length;x++){

//   console.log(`A posição ${x} tem o valor ${valores[x]}`)

// }

/*for(let pos in valores){

  console.log(`Na posição ${pos} tem o seguinte valor: ${valores[pos]}`)

}*/
