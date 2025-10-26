// for the index page

const newArrivals = document.querySelector("#new-arrivals")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchNewArrivals() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const products = data.data

        const arrivalDiv = document.createElement("div")
        arrivalDiv.className = "product-arrivals"

        const image = document.createElement("image")
        image.className = "product-image"

        const price = document.createElement("span")
        price.className = "product-price"

    } catch (error) {
        console.error("Failed to fetch new arrivals", error)
    }
}