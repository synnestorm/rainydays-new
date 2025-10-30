
const cartContainer = document.querySelector("#cart")
const cartProducts = document.querySelector(".cart-products")
let cart = JSON.parse(localStorage.getItem("cart")) || []

function generateCart() {
    cartContainer.innerHTML = ""
    if(cart.length === 0) {
        cartContainer.textContent = "Your cart is currently empty:("
        cartProducts = ""
        return
    }

    let total = 0

    cart.forEach((item, index) => {
        total += item.price * item.quantity

        
    })
}