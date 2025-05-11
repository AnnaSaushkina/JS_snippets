// Проверьте, можно ли переопределить дескриптор свойства после configurable: false.

let newObject = {
    prop: "someProp"
}

Object.defineProperty(newObject, "prop", {
    configurable: false
})

Object.defineProperty(newObject, "prop", {
    configurable: true
})
// переопределить нельзя.  выдает ошибку

newObject.prop = "new value"
console.log(newObject.prop)