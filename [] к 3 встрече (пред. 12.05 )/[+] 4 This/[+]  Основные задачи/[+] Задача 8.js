// Задача 3: Комбинирование методов

const user = {
  name: 'John',
  introduce(age, city) {
    return `I'm ${this.name}, ${age} years old from ${city}`;
  }
};

const data = [28, 'New York'];

// 3.1. Используйте .call() с оператором spread для передачи массива

console.log(user.introduce.call(user, ...data))

// 3.2. Используйте .apply() для того же результата

console.log(user.introduce.apply(user, data))