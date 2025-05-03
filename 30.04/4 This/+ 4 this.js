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







// ▎Задача 1: Определение значения this
// Что выведет каждый вызов и почему?
function showThis() {
  console.log(this);
}

const obj = { method: showThis };

showThis(); // window --
obj.method(); // функция showThis() !! неверно. сам объект с методом
new showThis();// новый пустой объект


// Решение для проверки:
// В обычном вызове this будет глобальным объектом (window в браузере, global в Node.js)
// В строгом режиме будет undefined
showThis(); // window или global (или undefined в строгом режиме)

// При вызове как метода объекта this указывает на этот объект
obj.method(); // { method: [Function: showThis] }

// При вызове с new this указывает на новый созданный объект
new showThis(); // showThis {}


// ▎Задача 2: Потеря контекста

// const user2 = {
//   name: "Alice",
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// };

// Как исправить потерю контекста в каждом случае?

const user2 = {
  name: "Alice",
  sayHi() {
     console.log(`Hi, I'm ${this.name}`);
   }
};

// обертка в анонимную функцию
setTimeout(function() {
  user2.sayHi();
}, 1000)

// или
setTimeout(() => user2.sayHi(), 1000)



// const greet = user2.sayHi;
// привязка с методом bind()
const user3 = {
  name: "Alice",
  sayHi() {
     console.log(`Hi, I'm ${this.name}`);
   }
};

const greet = user3.sayHi.bind(user3);
greet()




// Решение для проверки:
// // Вариант 1: Использование bind
// setTimeout(user.sayHi.bind(user), 1000);

// // Вариант 2: Использование стрелочной функции
// setTimeout(() => user.sayHi(), 1000);

// // Для второго случая:
// const greet = user.sayHi.bind(user);
// greet(); // "Hi, I'm Alice"

// // Или
// const greet2 = () => user.sayHi();
// greet2(); // "Hi, I'm Alice"







// Связанная функция как метод
// важность: 5
// Что выведет функция?

function f() {
  console.log( this ); // ?
}

let user5 = {
  g: f.bind(null)
};

user5.g(); // window тк нет привязки к функции, отрабатывает дефолт привязки к окну





// Повторный bind
// важность: 5
// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
// Вася
// первый бинд создает экзотический объект, запоминающий контекст. следующий вызов создает контекст внутри, что не меняет ничо




// Свойство функции после bind
// важность: 5
// В свойство функции записано значение. 
//Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

console.log(sayHi)

let bound = sayHi.bind({
  name: "Вася"
});

// console.log( bound.test ); // что выведет? почему?

// undefined
// sayHi.test не добавляет свойство в функцию. 
// sayHi() остается выводить window
// несмотря на привязку к контексту внутри bound .test ничего не создает





// Исправьте функцию, теряющую "this"
// важность: 5
// Вызов askPassword() в приведённом ниже коде должен 
// проверить пароль и затем вызвать user.loginOk/loginFail 
// в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало 
// (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user7 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

// askPassword(user7.loginOk, user7.loginFail);
askPassword(user7.loginOk.bind(user7), user7.loginFail.bind(user7))
// вызывается функция с аргументами, которые берутся из объекта user7, к ним нет доступа
// обращаемся объекту, методу внутри, привязываем этот метод к объекту








// ▎Задача 4: Стрелочные функции и this
// Исправьте код, чтобы он работал корректно

const group1 = {
  title: "JavaScript Group",
  students: ["John", "Jane", "Alice"],
  showList() {
    this.students.forEach(student => {
      console.log(`${this.title}: ${student}`);
    });
  }
};


group1.showList();

// Решение для проверки:
const group2 = {
  title: "JavaScript Group",
  students: ["John", "Jane", "Alice"],
  showList() {
    // Вариант 1: Использование стрелочной функции
    this.students.forEach(student => {
      console.log(`${this.title}: ${student}`);
    });
    
    // Вариант 2: Использование bind
    /*
    this.students.forEach(function(student) {
      console.log(${this.title}: ${student});
    }.bind(this));
    */
    
    // Вариант 3: Сохранение this в переменную
    /*
    const self = this;
    this.students.forEach(function(student) {
      console.log(${self.title}: ${student});
    });
    */
  }
};

group2.showList();
// JavaScript Group: John
// JavaScript Group: Jane
// JavaScript Group: Alice

// неизвестные ранее синтаксические способы






// ▎Задача 5: Преобразование объектов
// Создайте объект, который:
// 1. При преобразовании в число равен 42
// 2. При преобразовании в строку равен "Hello"
// 3. При сравнении с числами > 10 возвращает true

const magicObject = {
  valueOf() {
    return 42;
  },
  toString() {
  return "Hello"
}
};

console.log(Number(magicObject)); // 42
console.log(String(magicObject)); // "Hello"
console.log(magicObject > 10);    // true
console.log(magicObject > 50);    // false

// в качестве методов можно использовать вшитые в js функции




//  Использование частично применённой функции для логина
// важность: 5
// // Это задание является немного усложнённым вариантом одного 
// из предыдущих – Исправьте функцию, теряющую "this".

// Объект user8 был изменён. 
// Теперь вместо двух функций loginOk/loginFail у него 
// есть только одна – user8.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже,
//  чтобы она могла вызывать функцию user8.login(true) 
// как ok и функцию user8.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user8 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};


askPassword(user8.login.bind(user8, true), user8.login.bind(user8, false)); // ?
// добрався до тернарника. узнал что в bind есть синтаксис для условий


// Объект с методами, использующими this
// Создай объект calculator с двумя свойствами:
// a — число
// b — число
// Добавь в объект методы:
// sum() — возвращает сумму a и b
// multiply() — возвращает произведение a и b
// Вызови методы двумя способами:
// Как методы объекта (calculator.sum(), calculator.multiply()) и выведи результаты.
// Сохрани ссылку на метод в отдельную переменную (например, const sumFunc = calculator.sum) и вызови её как обычную функцию (sumFunc()). Объясни, что происходит с this.
let firstNum = 5
let secondNum = 8

let Сalculator = {
  a: firstNum,
  b:secondNum,
  
  sum(a, b) {
    console.log(this.a + this.b)
  },
  multiply(a, b) {
    console.log(this.a * this.b)
  },
}

let sumFunc = Сalculator.sum.bind(Сalculator)
let multiplyFunc = Сalculator.multiply.bind(Сalculator)

sumFunc(firstNum, secondNum) // вызываем суммирование из объекта
multiplyFunc(firstNum, secondNum) // вызывает умножение из объекта



// Вызов методов объекта через call/apply

let firstNum = 5
let secondNum = 8

let calculator = {
  a: firstNum,
  b:secondNum,
  
  sum(a, b) {
    console.log(this.a + this.b)
  },
  multiply(a, b) {
    console.log(this.a * this.b)
  },
}

// Используя объект из задачи 1 (calculator), вызови метод sum с помощью:


// .call() — передай другой объект с другими значениями для свойств a и b.
// .apply() — передай другой объект и аргументы (если нужно).
// Создай новый объект { a: 10, b: 20 } и вызови у него метод multiply из объекта calculator, используя .call() или .apply(). Выведи результат.

