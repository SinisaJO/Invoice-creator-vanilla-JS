const totalAmount = document.getElementById("sum")
const sendBtn = document.getElementById("sending-btn")
const servicesBox = document.getElementById("btn-box")
const box = document.getElementById("services")
const services = [
    {id: '1', name: "Wash Car", price: 10},
    {id: '2', name: "Mow Lawn", price: 20},
    {id: '3', name: "Pull Weeds", price: 30}
]

let servicesCart = []

if(localStorage.getItem("services")) {
    servicesCart = (JSON.parse(localStorage.getItem("services")))
    renderService(servicesCart)
}

services.forEach(service => {
    const {id, name, price} = service
    servicesBox.innerHTML += 
    `
        <button class="services-btn" id=${id}>${name}: $${price}</button>
    `
})

servicesBox.addEventListener("click", (e) => {
    const target = e.target
    if(target.tagName === "BUTTON"){
        const item = services.find(service => service.id === target.id)
        if (!servicesCart.find(el => el.id === item.id)){
            servicesCart.push(item)
            localStorage.setItem("services", JSON.stringify(servicesCart))
            renderService(servicesCart)
        }
    }
})

box.addEventListener("click", (e) => {
    const target = e.target
    if(target.tagName === "BUTTON") {
        const item = servicesCart.findIndex(service => service.id === target.id)
        servicesCart.splice(item, 1)
        localStorage.setItem("services", JSON.stringify(servicesCart))
        renderService(servicesCart)
    }
})

sendBtn.addEventListener("click", () => {
    servicesCart = []
    localStorage.setItem("services", JSON.stringify(servicesCart))
    renderService(servicesCart)
})

function renderService(services) {
    let html = ''
    let sum = 0
    services.forEach(service => {
        const {name, id, price} = service
        html += 
        `
            <div class="flex top-text"> 
                <div class="flex">
                    <p>${name}</p>
                    <button class="strong-rmv" id=${id}>remove</button>
                </div>
                <p>$${price}</p>
            </div>
        `
        sum += service.price
    })
    totalAmount.textContent = "$" + sum
    box.innerHTML = html
}


