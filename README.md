<h1 align="center">Welcome to Invoice Creator APP 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>
 <h4>Screenshoot</h4>
 <img src="https://i.ibb.co/4NHQP0P/Inovice-Generator.png" alt="Inovice-Generator" border="0">

<ol>
  <h2>Requirements: </h2>
   <li> Array to hold services requested </li>
   <li> Buttons to add service to array </li>
   <li> Place to display data from array - updated every time the array changes</li>
   <li> Once for same service</li>
   <li> Total costs stays updated</li>
   <li> Button to remove item from array</li>
   <li> Button to submit/send invoice</li>
</ol>
<ul>
  
<h2>Key learnings: </h2>
  
1. Array methods - forEach(), find()
  ```
  services.forEach(service => {
    const {id, name, price} = service
    servicesBox.innerHTML += 
    `
        <button class="services-btn" id=${id}>${name}: $${price}</button>
    `
  ```
  ```
  const item = services.find(service => service.id === target.id)
  ```
  
2. Event.Target
  ```
  box.addEventListener("click", (e) => {
    const target = e.target
    if(target.tagName === "BUTTON") {
        const item = servicesCart.find(service => service.id === target.id)
        servicesCart.splice(item, 1)
        renderService(servicesCart)
    }
})
  ```
  
3. Local Storage
```
  localStorage.setItem("services", JSON.stringify(servicesCart))
```
```
  servicesCart = JSON.parse(localStorage.getItem("services"))
```
  
  
 <h3>Live server: https://effortless-pudding-1ca2ba.netlify.app/</h3>
  
 <h3>Author: Sinisa Jovanovic(https://github.com/SinisaJO)</h3>

