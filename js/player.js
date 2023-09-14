class Player {
    constructor(gameScreen, left, top, height, width) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.element = document.createElement('img')

        this.element.src = '../images/car.png'

        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}`
        this.element.style.top = `${this.top}`
        this.element.style.height = `${this.height}`
        this.element.style.width = `${this.width}`

        this.gameScreen.appendChild(this.element)


    }
}