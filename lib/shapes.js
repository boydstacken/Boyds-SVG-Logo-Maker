class Shape {
    constructor() {
        this.color =""
    }
    setColor(color){
        this.color=color
        }
    }

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx = "150" cy="100" r="80" fill="${this.color}"/>`
    }
}


class Triangle extends Shape {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x= "90" y="40" width="120" height="120" fill="${this.color}"/>`
    }
}

module.exports={Circle, Triangle, Square}