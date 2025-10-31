// for the induvidual jacket pages; displaying details about different jackets

const container = document.querySelector("#container")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

const loader = document.createElement("div")
loader.id = "loader"
loader.className = "loader"
loader.style.display = "none"
document.body.appendChild(loader)



async function fetchProduct() {
    loader.style.display = "flex"
    await new Promise(r => setTimeout(r, 1000));
    try {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")

        if (!id) {
            container.textContent = "No product ID provided!"
            return
        }
        const response = await fetch(`${apiUrl}/${id}`)
        const data = await response.json()
        const product = data.data

        const productDiv = document.createElement("div")
        productDiv.className = "product-details"

        const image = document.createElement("img")
        image.className = "product-image"

        const title = document.createElement("h2")
        title.className = "product-title"

        const description = document.createElement("p")
        description.className = "product-description"

        const price = document.createElement("span")
        price.className = "product-price"

        const chooseSize = document.createElement("select")
        chooseSize.className = "select-size"
        chooseSize.id = "size"

        product.sizes.forEach(size => {
            const option = document.createElement("option")
            option.value = size
            option.textContent = size
            chooseSize.appendChild(option)

        })

        const addCart = document.createElement("button")
        addCart.className = "add-cart"

        addCart.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    const selectedSize = chooseSize.value
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.size === selectedSize)
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else { 
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image.url,
            quantity: 1,
            size: selectedSize
        })

}
localStorage.setItem("cart", JSON.stringify(cart))
let message = productDiv.querySelector(".added-message")

    if (!message) {
        message = document.createElement("p")
        message.className = "added-message"
        message.textContent = "Added to cart!"
        productDiv.appendChild(message)
    }

    message.style.display = "block"

    setTimeout(() => {
       message.style.display = "none"
    }, 3000)
})

        const backButton = document.createElement("a")
        backButton.className = "go-back"

        image.src = product.image.url 
        image.alt = product.image.alt
        title.textContent = product.title
        price.textContent = `${product.price}`
        addCart.textContent = "Add to cart"
        description.textContent = product.description
        backButton.textContent = "Go back"
        backButton.href = "../products/index.html"

        productDiv.appendChild(image)
        productDiv.appendChild(title)
        productDiv.appendChild(description)
        productDiv.appendChild(price)
        productDiv.appendChild(chooseSize)
        productDiv.appendChild(addCart)
        productDiv.appendChild(backButton)

        container.appendChild(productDiv)
    } catch (error){
        console.error("Failed to fetch product", error)
        container.textContent = "Failed to load product"
    } finally {
        loader.style.display = "none" 
    }
}

fetchProduct()
