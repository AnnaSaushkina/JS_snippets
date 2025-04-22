// Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() {  }
function B() {  }

let a = new A();
let b = new B();

console.log( a == b ); // нет, тк мы каждый раз создаем новый объект в отдельной ячейке памяти


// Возможно ли создать функции C и D, чтобы new C() == new D()?

function C() {  }
function D() {  }

let c = new C();
let d = new D();

console.log( c == d ); 
console.log( c );
console.log( d );
// решение

c = d;
console.log( c == d ); //true
console.log( c );
console.log( d );
// мы перезаписали старый объект на новый






// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += startingValue
    }
       
}

let accumulator = new Accumulator(1); // начальное значение 1

console.log(accumulator.value);
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value);
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений