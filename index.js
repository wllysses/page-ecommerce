let sneakers = document.querySelectorAll('div.groupSneakers img')
let mainSneaker = document.getElementById('mainSneaker')
let addToCartButton = document.getElementById('addToCartButton')
let decrementButton = document.getElementById('decrementButton')
let incrementButton = document.getElementById('incrementButton')
let quantSneakers = document.getElementById('quant')
let sneakerPrice = document.getElementById('price')
let currentQuant = 0
let currentPrice = 125

function changeMainSneaker(sneakers, mainSneakerImage) {
    sneakers.forEach((sneaker, index) => {
        sneaker.addEventListener('click', () => {
            if(index == 0) {
                mainSneakerImage.src = './images/image-product-1.jpg'
            } else if(index == 1) {
                mainSneakerImage.src = './images/image-product-2.jpg'
            } else if(index == 2) {
                mainSneakerImage.src = './images/image-product-3.jpg'
            } else if(index == 3) {
                mainSneakerImage.src = './images/image-product-4.jpg'
            }
        })
        
    })
}

decrementButton.onclick = function() {
    if(currentQuant == 0) {
        return
    }
    quantSneakers.innerHTML = currentQuant -= 1
    sneakerPrice.innerHTML = currentPrice -= 125
}

incrementButton.onclick = function() {
    quantSneakers.innerHTML = currentQuant += 1
    sneakerPrice.innerHTML = currentPrice += 125
}

addToCartButton.onclick = function() {
    alert('Função indisponível no momento.')
}

changeMainSneaker(sneakers, mainSneaker)