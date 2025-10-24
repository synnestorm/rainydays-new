// for the jackets pages

const jacketsList = document.querySelector("#jackets-list")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl)
        const products = response.json()

        products.forEach(product => {
            const display = document.createElement("div")
            const image = document.createElement("img")
            const title = document.createElement("p")
            const price = document.createElement("span")

            display.className = "display"
            image.className = "jacket-image"
            title.className = "about-product"
            price.className = "price"
        });
    } catch (error) {
        console.log("Could not fetch products, try again later", error)
    }
}
