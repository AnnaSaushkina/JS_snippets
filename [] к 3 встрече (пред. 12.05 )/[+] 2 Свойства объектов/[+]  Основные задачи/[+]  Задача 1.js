// 🔹 Задача 1: Проверка наличия свойства

const user = { name: "Alex", age: 30 };  

// 1. Проверьте, есть ли у объекта `user` свойство "age".  
// console.log(user.hasOwnProperty("age")) // true

// 2. Убедитесь, что "toString" приходит из прототипа.  

console.log(user.hasOwnProperty("toString")); 
// Проверка на принадлежность прототипу.
// false - принадлежит.
// true - не принадлежит

console.log(user.toString === Object.prototype.toString)
// явное сравнение с прототипом

console.log("toString" in user)
// true
// проверка прототипного свойства в объекте

// Цель: Научиться отличать собственные и унаследованные свойства.
// Научился: