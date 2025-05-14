// Задача 4: Ленивая инициализация
// Цель: Инициализировать тяжелый ресурс только при первом доступе.
// Без геттера:


const data = loadHeavyData(); // Загружается сразу
Геттер:


const dataManager = {
  _data: null,
  get data() {
    if (!this._data) {
      this._data = loadHeavyData(); // Загружается только здесь
    }
    return this._data;
  }
};
console.log(dataManager.data); // Загрузится при первом обращении
// Разница: Геттер оптимизирует производительность.