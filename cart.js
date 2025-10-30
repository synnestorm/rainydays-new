
const cart = document.querySelector("#cart")

async function viewCart() {
    // first container; showing the desired products
    const cartProducts = document.createElement("div")
    cartProducts.className = "cart-products"

    // second container; showing and writing down customer information
    const cartInfo = document.createElement("div")
    cartInfo.className = "cart-info"
    const customerName = document.createElement("input")
    customerName.className = "customer-name"
    const customerEmail = document.createElement("input")
    customerEmail.className = "customer-email"
    const customerAddress = document.createElement("input")
    customerAddress.className = "customer-address"
    const zipCode = document.createElement("input")
    zipCode.className = "zip-code"
    const customerCountry = document.createElement("input")
    customerCountry.className = "customer-country"

    // third container; showing payment information and ability to purchase items
    const cartPurchase = document.createElement("div")
    cartPurchase.className = "cart-purchase"
    const cardInformation = document.createElement("input")
    cardInformation.className = "card-information"
    const cardDate = document.createElement("input")
    cardDate.className = "card-date"
    const cardCvc = document.createElement("input")
    cardCvc.className = "card-cvc"
    const purchase = document.createElement("button")
    purchase.className = "purchase"


}