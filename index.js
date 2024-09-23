let titulo = document.querySelector('h1')
let p = document.querySelector('p')
let b = document.querySelector('button')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let body = document.querySelector('body')

b.onclick = function () {
    p.style.color = 'pink'
    titulo.style.color = 'pink'
}
b1.onclick = function () {
    p.style.fontSize = '20px' 
    titulo.style.fontSize = '70px'
}
b2.onclick = function () {
    p.style.backgroundColor = 'blue'
    titulo.style.backgroundColor = 'blue'
}

b.style.backgroundColor = 'pink'
b1.style.backgroundColor = 'pink'
b2.style.backgroundColor = 'pink'

body.style.backgroundColor = 'black'
titulo.style.color = 'white'
p.style.color = 'white'