// // ### Задача 5: Обмен значений
let a = 10;
let b = 20;
// // Поменяйте значения переменных местами через деструктуризацию

[a, b] = [b, a]
// console.log(a, b)

// // ## 🎯 Дополнительные задания

// // 1. Деструктуризация с rest-оператором
let newArray = [a, b]
let [first, ...rest] = newArray
console.log(first, ...rest)

// // 2. Деструктуризация в циклах for..of

let users = [
  { name: "Анна",
    age: 27
  },
  { name: "Кристина",
    age: 26
  },
]

for (let {name, age} of users) {
  console.log(name, age)
} // перебрали все элементы из обоих объектов массива

for( let [key, value] of Object.entries(users)) {
  console.log(key,value)
}

// 3. Комбинирование с оператором spread

let [firstRest, ...another] = users
console.log(firstRest, ...another)
// извлекти по элементу массива
