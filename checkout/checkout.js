document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items")
    const totalPrice = document.getElementById("total-price")

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    let total = 0

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity
        total += itemTotal

        const itemDisplay = document.createElement("div")
        itemDisplay.className = "item-display"

        const image = document.createElement("img")
        image.src = item.image
        image.alt = item.title
        image.className = "product-image"

        const title = document.createElement("p")
        title.className = "product-title"
        title.textContent = item.title

        const quantity = document.createElement("p")
        quantity.className = "product-quantity"
        quantity.textContent = `Quantity: ${item.quantity}`

        const size = document.createElement("p")
        size.className = "product-size"
        size.textContent = `Size: ${item.size}`

        const price = document.createElement("p")
        price.className = "product-price"
        price.textContent = `Total price: ${item.price} NOK`

        itemDisplay.appendChild(image)
        itemDisplay.appendChild(title)
        itemDisplay.appendChild(quantity)
        itemDisplay.appendChild(size)
        itemDisplay.appendChild(price)

        cartItems.appendChild(itemDisplay)
    })

    totalPrice.textContent = `${total.toFixed(2)} NOK`

    const purchaseBtn = document.querySelector(".checkout-btn")
    purchaseBtn.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("cart")
        window.location.href = "confirmation/index.html"
    })
})