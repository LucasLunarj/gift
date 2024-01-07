const clickButton = document.querySelector('h1')
const music = new Audio('./assets/rosario.m4a')
const content = document.querySelector('.content')

function gift() {
    clickButton.classList.add('hide')
    music.play()
    music.loop = true

    content.classList.remove('hide')
}

clickButton.addEventListener('click', gift)