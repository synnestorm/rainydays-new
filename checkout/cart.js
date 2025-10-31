
const cartContainer = document.querySelector("#cart")
const cartProducts = document.querySelector(".cart-products")
let cart = JSON.parse(localStorage.getItem("cart")) || []

function generateCart() {
    cartContainer.innerHTML = ""
    if(cart.length === 0) {
        cartContainer.textContent = "Your cart is currently empty:("
        cartProducts.textContent = ""
        return
    }

    let total = 0

    cart.forEach((item, index) => {
        total += item.price * item.quantity

        const productDisplay = document.createElement("div")
        productDisplay.className = "product-display"

        const image = document.createElement("img")
        image.className = "product-image"
        image.src = item.image
        image.alt = item.title

        const title = document.createElement("h2")
        title.className = "product-title"
        title.textContent = item.title

        const price = document.createElement("span")
        price.className = "product-price"
        price.textContent = `${item.price} NOK`

        const removeBtn = document.createElement("button")
        removeBtn.className = "remove-btn"
        removeBtn.textContent = "Remove products"
        removeBtn.addEventListener ("click", () => removeFromCart(index))

        //  const continueBtn = document.createElement("button")
        // continueBtn.className = "continue-btn"
        // continueBtn.textContent = "Continue to purchase"
        // continueBtn.src = 

        productDisplay.appendChild(image)
        productDisplay.appendChild(title)
        productDisplay.appendChild(price)
        productDisplay.appendChild(removeBtn)

        cartContainer.appendChild(productDisplay)
    })
    cartProducts.textContent = `All products: ${total} NOK`
}

function removeFromCart(index) {
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    generateCart()
}

generateCart()

document.querySelector("#checkout-btn").addEventListener("click", () => {
    localStorage.removeItem("cart")
    window.location.href = "confirmation/index.html"
})