// Сделайте свойство price скрытым для Object.keys().

let item = {
    price: 100,
    color: "blue"
}

Object.defineProperty(item, "price", {
    enumerable: false
})

let result = Object.keys(item)
console.log(result)