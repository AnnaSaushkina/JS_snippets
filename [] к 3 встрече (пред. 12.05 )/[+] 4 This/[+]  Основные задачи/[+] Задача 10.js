// Задача 10 (.call)
// Создайте функцию callWithContext, которая:

// Принимает объект, имя метода и аргументы по отдельности (не массив).

// Вызывает метод объекта, используя .call().


let user = {
  data: [["name", "ivan"],["password", 123]],
  enter() {
    return this.data
  }
}

function callWithContext(obj, methodName) {
   return obj[methodName].call(obj)
}

console.log(callWithContext(user, "enter"))

