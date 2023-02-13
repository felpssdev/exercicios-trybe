let testList = document.querySelector('#elementoOndeVoceEsta').parentNode

let list = [
    'first line',
    'second line',
    'etc etc '
]

for (let index = 0; index < list.length; index += 1) {
    let lineContent = list[index]

    let linesList = document.createElement('p')
    linesList.innerText = lineContent

    testList.appendChild(linesList)
}

let testPhrase = document.querySelector('#elementoOndeVoceEsta')
let phraseCreator = document.createElement('h2')
const h2 = testPhrase.appendChild(phraseCreator)

h2.innerHTML = 'TESTEEEEEEEE'
h2.style.color = 'darkred'

const divCreator = () => {
    const div = document.createElement('div')
    const newDiv = testPhrase.appendChild(div)
    return newDiv
}

const testDiv = divCreator()
const testDiv2 = divCreator()


