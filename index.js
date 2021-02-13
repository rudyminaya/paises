const renderPaises = (paises) => {
    let paisesContent = document.getElementById('contenedor')
    let valorFinal = Math.floor(Math.random() * (paises.length - 12) + 12)
    let valorInicial = valorFinal - 12

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
        nombrePais.innerText = pais.name
        shadow.appendChild(nombrePais)
        parrafo.innerText = 'Su capital es:'
        shadow.appendChild(parrafo)
        nombreCapital.innerText = pais.capital
        shadow.appendChild(nombreCapital)
        poblacion.innerText = `${pais.name} tiene una población aproximada de ${pais.population} personas`
        shadow.appendChild(poblacion)
        paisesContent.appendChild(card)
    })
}

const todos = (e) => {
    console.log(e, 'funcionaaaa')
}

const obtenerPaises = async () => {
    fetch('https://restcountries.eu/rest/v2/lang/es')
        .then((res) => res.json())
        .then(renderPaises)
}

obtenerPaises()
