// 🔹 Задача 2: Создание объекта через new Object()
// Условие:
// Создайте объект car теми же свойствами, что и book, но используя new Object().
let book = {
    title: "name",
    author: "author",
    year: 2000
}

let car = new Object(book) // скопировали объект, но он остается зависимым от исходного

// явно перезаписываем зависимые свойства
car.title = book.title;
car.author = book.author;
car.year = book.year;


console.log(car == book)
