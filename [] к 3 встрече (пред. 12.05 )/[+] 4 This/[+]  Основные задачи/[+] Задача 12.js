// Задача 12 (.bind vs .call/.apply)
// Создайте функцию delayedGreet, которая:

// Принимает объект, имя метода и массив аргументов.

// Возвращает новую функцию, привязанную к объекту (через .bind()), которая при вызове выполнит метод с аргументами.
let user = {
  greet(name) { 
    console.log("Привет " + name); 
  }
}

function delayedGreet(obj, methodName, arg) {
   let newGreeting = obj[methodName].bind(obj, arg)
   return newGreeting
 }

delayedGreet(user, 'greet', "Анна")()