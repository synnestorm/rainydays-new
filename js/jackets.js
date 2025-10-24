// for the jackets pages

const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl)
        const products = response.json()

        console.log(products);
    } catch (error) {
        console.log("Could not fetch products, try again later", error)
    }
}
