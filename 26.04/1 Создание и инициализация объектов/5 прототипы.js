// Практика:
// Реализовать наследование: Animal → Cat.

let Animal


let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true // обращаемся к исходном объекту

delete rabbit.jumps;

console.log( rabbit.jumps ); // null // после удаления в исходном - не находим его - находим в прототипе

delete animal.jumps;

console.log( rabbit.jumps ); // undefined // не находим даже в прототипе после удаления
// Должно быть 3 ответа.


// Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.

// У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// console.log(pockets.pen)
// console.log(bed.glasses)
// С помощью свойства __proto__ задайте прототипы так, 
// чтобы поиск любого свойства выполнялся по следующему пути: 
// pockets → bed → table → head. Например, pockets.pen 
// должно возвращать значение 3 (найденное в table), 
//   а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: 
//   как быстрее получить значение glasses – через pockets.glasses или 
//   через head.glasses? При необходимости составьте цепочки поиска
//   и сравните их.

console.log(pockets.glasses)
console.log(head.glasses)// через хед по идее быстрее


// Куда будет произведена запись?
// важность: 5
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal2
};

console.log(rabbit2.eat());
// в исходном объекте в общем







// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
// оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
  // но нужно петод push заменить на присваиванием нового значения
  // this.stomach = [food]
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// мое решение
// delete hamster.stomach;

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple