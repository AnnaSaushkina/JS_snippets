
// 🔹 Задача 2: Запрет изменения свойства
// js
const config = { apiKey: "12345" };  

// 1. Сделайте свойство `apiKey` неизменяемым (`writable: false`).  
Object.defineProperty(config, "apiKey", {
    writable: false,
})

// Напишите функцию, которая "запечатывает" объект (запрещает добавление/удаление свойств).

function cancelConfigurable() {
    Object.freeze(obj)
}

// 2. Попробуйте изменить его и выведите результат.  

// config.apiKey = "new key"
// console.log(config.apiKey)
// cancelConfigurable(config)

config.apiKey = "new key"
console.log(config.apiKey)

// Цель: Понять, как работают дескрипторы свойств.