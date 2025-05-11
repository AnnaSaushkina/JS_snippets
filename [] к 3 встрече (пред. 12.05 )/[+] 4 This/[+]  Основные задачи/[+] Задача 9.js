// Самостоятельно: создайте функцию-универсал, которая:
// - Принимает объект, имя метода и массив аргументов
// - Вызывает указанный метод объекта с этими аргументами

let person = {
  personArgs: ["hands", "legs"],
  personMethod() {
      return this.personArgs
    }
}

function callMethod(obj, methodName, args) {
 return obj[methodName].apply(obj, args)
  }


console.log(callMethod(person, "personMethod", []))

