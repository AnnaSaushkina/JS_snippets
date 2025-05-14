// Задача 3: Логирование изменений
// Цель: Логировать все изменения свойства.
// Без сеттера:

// javascript
user.name = "Аня"; // Невозможно отследить
Сеттер:


const user = {
  _name: "",
  set name(value) {
    console.log(`Имя изменено с ${this._name} на ${value}`);
    this._name = value;
  },
  get name() {
    return this._name;
  }
};
user.name = "Аня"; // В консоли: "Имя изменено с  на Аня"
// Разница: Сеттер добавляет side-эффекты.