// 7. Деструктуризация объекта
// Дан объект:
const user = {
    name: "Alice",
    age: 25,
    city: "London",
    country: "UK"
  };
  // Извлеките name и city, а остальные свойства соберите в объект details с помощью rest-оператора.
  
  const {name, city, ...details} = user
  console.log(details)
  

// 8. Spread для объединения массивов
// Даны два массива:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Создайте новый массив combined, который содержит все элементы arr1 и arr2, а также числа 7 и 8.

const combined = [...arr1, ...arr2, 7, 8]

console.log(combined)


// 9. Spread для копирования объекта с изменениями
// Дан объект:
const person = {
    name: "Bob",
    age: 30,
    job: "Developer"
  };
  
  const newPerson = { 
    ...person,
    job: "designer",
    country: "USA"  
  }
  
  // Создайте его копию, но с изменённым job на "Designer" и добавленным свойством country: "USA".
  // }
 
  console.log(newPerson)


// 10. Rest-параметры в функции
// Напишите функцию sumAll, которая принимает любое количество чисел и возвращает их сумму.

function sumAll(...nums) {
    return nums.reduce((num1, num2) => 
      num1 + num2, 0)
   }
   
   console.log(sumAll(1, 2, 3)); // 6
   console.log(sumAll(10, 20, 30, 40)); // 100