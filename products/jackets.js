
// fetching all products from the API, listing all the products

const jacketsList = document.querySelector("#jackets-list")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"
const filterButtons = document.querySelectorAll(".filter-btn")

// loading indicator, styled in jackets.css

const loader = document.createElement("div")
loader.id = "loader"
loader.className = "loader"
loader.style.display = "none"
document.body.appendChild(loader)

async function fetchProducts() {
    loader.style.display = "flex"
    await new Promise(r => setTimeout(r, 1000));
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const products = data.data

        products.forEach(product => {
            const card = document.createElement("div")
            card.className = "card"

            const link = document.createElement("a")
            link.href = `product.html?id=${product.id}`
            link.className = "product-link"

            const image = document.createElement("img")
            image.src = product.image.url
            image.alt = product.image.alt
            image.className = "jacket-image"

            const title = document.createElement("p")
            title.textContent = product.title
            title.className = "about-product"

            const price = document.createElement("span")
            price.className = "price"
            price.textContent = `${product.price} NOK`

            card.appendChild(image)
            card.appendChild(title)
            card.appendChild(price)

            link.appendChild(card)
            

            jacketsList.appendChild(link)
        })
    } catch (error) {
        console.error("Failed to fetch products", error)
    } finally {
        loader.style.display = "none" 
    }
}

fetchProducts()