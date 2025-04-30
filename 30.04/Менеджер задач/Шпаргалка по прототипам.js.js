// 1. Прототипное наследование

// В JavaScript объекты могут наследовать свойства и методы от других объектов через прототипы.
// Каждый объект имеет внутреннее свойство [[Prototype]], которое ссылается на другой объект (прототип).
// Для создания объекта с определённым прототипом можно использовать Object.create().


// 1. Создание конструктора +
// Конструкторы — это функции, которые используются для создания объектов. Они обычно именуются с заглавной буквы.

// Пример:

function Animal(name) {
    this.name = name;
}

const dogg = new Animal('Buddy');
console.log(dogg.name); // Buddy

// 2. Прототипы
// Каждый объект в JavaScript имеет свойство prototype, которое позволяет добавлять методы и свойства к объектам, созданным с помощью конструктора.

// Пример:

function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function(){
    console.log(this.name + ' говорит гав')
  }
  
  let doggy = new Animal('песель')
  let kitten = new Animal('китик')
  
  

  doggy.speak()
  kitten.speak()

  
//   3. Наследование через prototype
//   Для создания наследуемого объекта можно установить его прототип на другой объект.
  

  function Dog(name) {
      Animal.call(this, name); // Вызов конструктора родителя
  }
  
  // Установка прототипа
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Восстановление ссылки на конструктор
  
  Dog.prototype.speak = function() {
      console.log(`${this.name} barks.`);
  };
  
  const myDog = new Dog('Rex');
  myDog.speak(); // Rex barks.





// 4. Использование Object.create()
// Метод Object.create() позволяет создать новый объект с указанным прототипом.

// Пример:

const animalPrototype = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const cat = Object.create(animalPrototype);
cat.name = 'Whiskers';
cat.speak(); // Whiskers makes a noise.

// 5. Проверка типа объекта с помощью instanceof
// Оператор instanceof позволяет проверить, является ли объект экземпляром определённого конструктора.



console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
// 6. Связь между конструкторами и функциями через constructor
// Каждый объект имеет свойство constructor, которое указывает на функцию-конструктор, создавшую этот объект.


console.log(myDog.constructor === Dog); // true
console.log(dog.constructor === Animal); // true


// 7. Наследование методов и свойств
// Методы и свойства, определённые в прототипе родительского объекта, доступны для дочерних объектов.

// Пример:


function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
    console.log(`${this.name} meows.`);
};

const myCat = new Cat('Luna');
myCat.speak(); // Luna meows.


// 8. Переопределение методов
// Дочерние объекты могут переопределять методы родительского объекта.

// Пример:

Dog.prototype.speak = function() {
    console.log(`${this.name} woofs.`);
};

myDog.speak(); // Rex woofs.





function Animal(name) {    this.name = name;}

Animal.prototype.speak = function() {    
    console.log(`${this.name} makes a noise.`);};function Dog(name) {    Animal.call(this, name); 
    // Вызов конструктора родителя
    }

    Dog.prototype = Object.create(Animal.prototype); // Установка прототипа
    Dog.prototype.constructor = Dog; // Восстановление ссылки на конструктор
    Dog.prototype.speak = function() {    
        console.log(`${this.name} barks.`);
    };
    // const myDog = new Dog('Rex');myDog.speak(); // Rex barks.



  




