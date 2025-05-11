// Работа с контекстом (this, call, apply, bind)

// Дано:
const person1 = {
  name: 'Alice',
  greet() {
    return `Hello, ${this.name}!`;
  }
};

const person2 = {
  name: 'Bob'
};


console.log(person1.greet.call(person1))
// Задача: 
// Вызовите метод greet объекта person1 с контекстом person2, используя .call()