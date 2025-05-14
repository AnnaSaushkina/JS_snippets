// 1. Деструктуризация массива
// Дан массив:
const fruits = ["Apple", "Banana", "Cherry", "Date"];
// Извлеките первые два элемента в переменные first и second, а остальные соберите в массив others с помощью rest-оператора.

const [
  first = "Apple",
  second = "Banana",
  ...others
] = fruits

console.log(first)