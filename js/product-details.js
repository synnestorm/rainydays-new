// for the induvidual jacket pages; displaying details about different jackets

const jacketDetail = document.querySelector("#jacket-detail")
const apiUrl = "https://v2.api.noroff.dev/rainy-days"

async function fetchProduct() {
    try {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")

        if (!id) {
            jacketDetail.textContent = "No product ID provided!"
            return
        }
        const response = await fetch(`${apiUrl}/${id}`)
        const data = await response.json()
        const product = data.data
    } catch (error){

    }
}