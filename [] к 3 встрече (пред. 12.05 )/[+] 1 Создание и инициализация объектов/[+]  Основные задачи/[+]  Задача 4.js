// 🔹 Задача 4: Создание объекта через Object.create()
// Условие:
// Создайте объект admin, который наследует свойства от объекта user (с полями name и isAdmin: false), но у admin должно быть isAdmin: true.

let user = {
    name: "vasya",
    isAdmin: false,
}
let admin = Object.create(user)
admin.isAdmin = true;


console.log(user) 
console.log(admin)

// Object.create() копирует прототип родителя, но не выводит его сразу. Если его поменять или обратиться к нему - он будет выводиться.
console.log(admin.name) // не выведенное свойство все еще доступно из прототипа