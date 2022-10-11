let amigo = {nome:'iury', 
idade:20, 
peso:70.5, 
engordar(p){
  console.log(`Seu peso era ${amigo.peso} e voce engordou ${p}Kg`)
  amigo.peso+=p
}
}

let pesar = amigo.engordar(2)
console.log(amigo.nome, amigo.peso)
