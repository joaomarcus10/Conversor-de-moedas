const convertButton = document.querySelector(".convert-button")

function convertValues () {
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
const currencyValueConverted = document.querySelector(".currency-value")// outras moedas

const dolarToday = 5.2

const convertedValue = inputCurrencyValue / dolarToday

currencyValueToConvert.innerHTML = inputCurrencyValue
currencyValueConverted.innerHTML = convertedValue 

console.log(convertedValue)

}


convertButton.addEventListener("click", convertValues)