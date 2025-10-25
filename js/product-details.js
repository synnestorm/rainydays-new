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
        const image = document.createElement("img")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const price = document.createElement("span")
        const chooseSize = document.createElement("input")
        const addCart = document.createElement("button")
        const backButton = document.createElement("a")

    } catch (error){

    }
}

fetchProduct()