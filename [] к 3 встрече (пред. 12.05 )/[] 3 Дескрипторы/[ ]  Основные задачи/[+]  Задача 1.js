// Создайте объект car с неизменяемым свойством model.

let car = {
    model: "mark"
}

Object.defineProperty(car, "model", {
    writable: false,
    configurable: false
})

car.model = "changing"
delete car.model
console.log(car)