// for the induvidual jacket pages; displaying details about different jackets

const container = document.querySelector("#container")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchProduct() {
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

        const chooseSize = document.createElement("input")
        chooseSize.className = "product-size"

        const addCart = document.createElement("button")
        addCart.className = "add-cart"

        const backButton = document.createElement("a")
        backButton.className = "go-back"

        image.src = product.image.url 
        image.alt = product.image.alt
        title.textContent = product.title
        price.textContent = `${product.price}`
        addCart.textContent = "Add to cart"
        chooseSize.textContent = "Choose size"
        description.textContent = product.description
        backButton.textContent = "Back to jackets"
        backButton.href = "/products/index.html"

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
    }
}

fetchProduct()