const productsCart = [
    {
        name: "Camiseta",
        price: 50.00
    },
    {
        name: "Calça",
        price: 150.00
    },
    {
        name: "Jaqueta",
        price: 200.00
    }
]

const body = document.querySelector("body");

const main = document.createElement("main")
body.appendChild(main)

const productList = document.createElement("ul")
productList.id = "list"
main.appendChild(productList)

const productItem1 = document.createElement("li")
productList.appendChild(productItem1)
productItem1.innerText = productsCart[0].name

const productItem2 = document.createElement("li")
productList.appendChild(productItem2)
productItem2.innerText = productsCart[1].name

const productItem3 = document.createElement("li")
productList.appendChild(productItem3)
productItem3.innerText = productsCart[2].name

const productDetails = document.createElement("ul")
main.appendChild(productDetails)

const productSome = document.createElement("li")
productDetails.appendChild(productSome)

const buttonEnd = document.createElement("button")
productDetails.appendChild(buttonEnd)
buttonEnd.innerText = "Finalizar"

let sum = 0

function sumFunc(array){
    for (let i = 0; i < productsCart.length; i++){
        sum += productsCart[i].price
    }
    console.log(sum)
    return sum
}
sumFunc(productsCart)

productSome.innerText = sum