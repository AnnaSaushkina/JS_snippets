// Создайте объект book со свойствами:
// title (строка)
// author (строка)
// year (число)
// isAvailable (булево значение, по умолчанию true)
// Добавьте метод borrow(), который меняет isAvailable на false, если книга доступна, и возвращает сообщение:
// "Вы взяли книгу [название]" — если книга была доступна.
// "Книга [название] уже занята" — если нет.
let book = {
    title: "название",
    author: "имя",
    year: 1944,
    isAvailable: true,
    borrow() {
        if (this.isAvailable) {
            console.log(`Вы взяли книгу ${this.title}`)
            this.isAvailable = false;
        } else {
            console.log(`Книга ${this.title} уже занята`)
        }
    },
}
book.borrow()
book.borrow()



