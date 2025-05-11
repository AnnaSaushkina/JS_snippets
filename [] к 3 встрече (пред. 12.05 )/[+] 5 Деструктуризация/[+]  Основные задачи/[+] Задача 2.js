// ### Задача 2: Значения по умолчанию
const options = { timeout: 1000 };
// Извлеките timeout и priority (по умолчанию 'normal')

let { timeout, priority = "normal"  } = options

console.log(priority)
console.log(timeout)