// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат?
//ошибка






// 2.Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта
// с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  read(a, b) {
    this.firstNum = a;
    this.secondNum = b;
  },
  sum() {
    return this.firstNum + this.secondNum
  },
  mul() {
    return this.firstNum * this.secondNum
  },
};

calculator.read(1, 2);
console.log(calculator);
console.log( calculator.sum() );
console.log( calculator.mul() );






// 3. у нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++
    console.log(this)
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this
  }
};


// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, 
// чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// ladder.up().up()
ladder.up().up().up().up().showStep()