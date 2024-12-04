let i = 0

function ajouterBoule() {

    let boule = document.createElement('div')
    boule.setAttribute('id', 'boule' + i)
    boule.className='boule'


    let bouleWidth = 100
    let ecranWidth = window.innerWidth
    let leftPosition = Math.floor(Math.random() * (ecranWidth - (10 + bouleWidth))) 
    boule.style.left = leftPosition + 'px'


    let area = document.getElementById('area')
    area.appendChild(boule)


    let topPosition = 0
    let intervalId = setInterval(() => {
        boule.style.top = (topPosition++) + 'px'

        if (topPosition >= window.innerHeight -(1+bouleWidth)) {
            clearInterval(intervalId)  
        }
    }, 100)

    i++ 
}
