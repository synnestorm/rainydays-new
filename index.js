// for the index page

const newArrivals = document.querySelector("#new-arrivals")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchNewArrivals() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`)
        }
        
        const data = await response.json()
        const products = data.data

        const selectedArrivals = products.slice(4, 7)

        newArrivals.innerHTML = "";

        selectedArrivals.forEach(product => {
        const arrivalDiv = document.createElement("div")
        arrivalDiv.className = "product-arrivals"

        const link = document.createElement("a")
        link.className = "new-arrival-link"
        link.href = `products/product.html?id=${product.id}`

        const image = document.createElement("img")
        image.className = "new-arrival-image"
        image.src = product.image.url
        image.alt = product.title

        const price = document.createElement("span")
        price.className = "new-arrival-price"
        price.textContent = `${product.price} NOK`

        link.appendChild(image)
        arrivalDiv.appendChild(link)
        arrivalDiv.appendChild(price)
        newArrivals.appendChild(arrivalDiv)
        
})
    } catch (error) {
        console.error("Failed to fetch new arrivals", error)
    }
}

fetchNewArrivals()