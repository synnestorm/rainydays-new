// for the jackets pages

const jacketsList = document.querySelector("#jackets-list")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const products = data.data

        products.forEach(product => {
            const display = document.createElement("div")
            const image = document.createElement("img")
            const title = document.createElement("p")
            const price = document.createElement("span")

            display.className = "display"
            image.className = "jacket-image"
            title.className = "about-product"
            price.className = "price"

            image.src = product.image.url
            image.alt = product.image.alt
            title.textContent = product.title
            price.textContent = product.price

            display.appendChild(title)
            display.appendChild(price)
            display.appendChild(image)

            jacketsList.appendChild(display)
        })
    } catch (error) {
        console.error("Failed to fetch products", error)
    }
}

fetchProducts()