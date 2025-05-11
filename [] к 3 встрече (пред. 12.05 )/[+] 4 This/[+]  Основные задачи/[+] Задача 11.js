// Задача 11 (.apply)
// Создайте функцию applyWithContext, которая:

// Принимает объект, имя метода и массив аргументов.

// Вызывает метод объекта, используя .apply().

let user = {
  name: "Ivan",
  phrases: ["Hello World", "Vasya Pupkin"],
  coding(phraseIndex) {
    let selectedPhrase = this.phrases[phraseIndex]
    console.log(this.name + " coded: " + selectedPhrase)
  }
}

function applyWithContext(obj, methodName, args) {
  return obj[methodName].apply(obj, args)
}

applyWithContext(user, "coding", [1])
