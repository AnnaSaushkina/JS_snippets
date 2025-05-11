// Напишите функцию-конструктор Person, которая сохраняет name в this.
function Person(name) {
    this.name = name
  }
  
  let man = new Person("vasya")
  
  console.log(man.name)