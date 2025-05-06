// 🔹 Задача 4: Геттер и сеттер
const person = {  
  firstName: "John",  
  lastName: "Doe",  

  // 1. Добавьте геттер `fullName`, который возвращает `${firstName} ${lastName}`.  
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  // 2. Добавьте сеттер, который разбивает строку на `firstName` и `lastName`.  
  set fullName(value) {
    return this.firstName = value.split(" ", 1).toString()
  }

};  

console.log(person.fullName); // "John Doe"  
person.fullName = "Alice Cooper";  
console.log(person.firstName); // "Alice"  
// Цель: Освоить геттеры и сеттеры для управляемого доступа к данным.