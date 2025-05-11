// ### Задача 3: Вложенные структуры
const company = {
  name: "ACME",
  employees: ["John", "Anna", "Mike"],
};
// Получите name и первого employee

// let { name, employees } = company
// let [first,,] = employees



// другой синтаксис

let {
  name,
  employees: [first]
} = company


console.log(name)
console.log( first)