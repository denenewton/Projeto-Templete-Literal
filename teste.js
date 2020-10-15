const numeros = [ 2,3,6,5,10]
let novoArray = []
for( let i = 0 ; i< numeros.length; i++){
    novoArray.push(numeros[i]* 2)
}
console.log(novoArray)

novoArray = numeros.map( n => n*2)
console.log(novoArray)
novoArray = []
const novoArrayImpar = numeros.map(n => {
    if(n % 2 != 0 ){
        novoArray.push(n)
    }
    
})

console.log(novoArray)
