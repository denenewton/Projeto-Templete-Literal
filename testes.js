var sessao = 
{ 
    "num":"1",
    "casa": {
        "area": 110,
        "divisoes": 5
    }
}

var tiposCaes = [
    'Barce',
    'Pequines',
    'Pastor Alemão'
]
var vetorSessao = []
var copia = Object.assign({}, sessao)

vetorSessao.push(copia)
//vetorSessao.push(tiposCaes)

console.log(vetorSessao)