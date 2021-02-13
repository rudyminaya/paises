const renderPaises = (paises, mostrar) => {
    let valorFinal = 0
    let valorInicial = 0
    if (mostrar) {
        valorInicial = 0
        valorFinal = paises.length
    } else {
        valorFinal = Math.floor(Math.random() * (paises.length - 12) + 12)
        valorInicial = valorFinal - 12
    }
    let paisesContent = document.getElementById('contenedor')
    paisesContent.innerHTML = ''

    paises.slice(valorInicial, valorFinal).forEach((pais) => {
        let card = document.createElement('div')
        let shadow = document.createElement('div')
        let alphaCode = document.createElement('h5')
        let bandera = document.createElement('img')
        let nombrePais = document.createElement('h3')
        let parrafo = document.createElement('p')
        let nombreCapital = document.createElement('h3')
        let poblacion = document.createElement('p')

        card.classList.add('card')
        shadow.classList.add('cardShadow')
        alphaCode.classList.add('alphaCode')
        bandera.classList.add('bandera')
        nombrePais.classList.add('nombrePais')
        parrafo.classList.add('parrafo')
        nombreCapital.classList.add('nombreCapital')
        poblacion.classList.add('parrafo')

        card.appendChild(shadow)
        alphaCode.innerText = pais.alpha2Code
        shadow.appendChild(alphaCode)
        bandera.src = pais.flag
        shadow.appendChild(bandera)
        nombrePais.innerText = pais.nativeName
        shadow.appendChild(nombrePais)
        parrafo.innerText = 'Su capital es:'
        shadow.appendChild(parrafo)
        nombreCapital.innerText = pais.capital
        shadow.appendChild(nombreCapital)
        poblacion.innerText = `${pais.nativeName} tiene una población aproximada de ${pais.population} personas`
        shadow.appendChild(poblacion)
        paisesContent.appendChild(card)
    })
}

const obtenerPaises = async (idioma) => {
    let lang = ''
    let mostrar = false
    if (idioma === 'es') {
        lang = 'https://restcountries.eu/rest/v2/lang/es'
        mostrar = false
    } else {
        lang = 'https://restcountries.eu/rest/v2/'
        mostrar = true
    }

    fetch(lang)
        .then((res) => res.json())
        .then((paises) => {
            renderPaises(paises, mostrar)
        })
}

obtenerPaises('es')

document.getElementById('mostrarTodo').addEventListener('click', () => {
    obtenerPaises()
})
