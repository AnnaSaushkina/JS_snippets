// 🔹 Задача 5: Итерация по свойствам
const car = { brand: "Toyota", model: "Camry", year: 2020 };  

// 1. Получите массив ключей, значений и пар [ключ, значение].  
// 2. Переберите объект циклом `for...in`, пропуская унаследованные свойства.  

const keys = Object.keys(car);  
const values = Object.values(car);  
const entries = Object.entries(car);  

for (const prop in car) {  
  if (car.hasOwnProperty(prop)) {  
    console.log(prop, car[prop]) 
  }  
}  

// Цель: Научиться работать с методами Object и фильтровать свойства.