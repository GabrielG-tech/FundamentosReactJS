const input = document.getElementById("input_letra")
const resultado = document.getElementById("resultado")

vogais = 'aeiou'
consoantes = 'qwrtypsdfghjklçzxcvbnm'
numeros = '1234567890'

function ehVogal(letra) {
    letra = input.value
    if (vogais.includes(letra.toLowerCase())) {
        return resultado.innerText = `${letra} é uma vogal.`;
    } else if (numeros.includes(letra.toLowerCase())){
        return resultado.innerText = `${letra} é uma número.`
    } else if (consoantes.includes(letra.toLowerCase())){
        return resultado.innerText = `${letra} é uma consoante.`
    } else {
        return resultado.innerText = `${letra} não é uma letra.`
    }
}
