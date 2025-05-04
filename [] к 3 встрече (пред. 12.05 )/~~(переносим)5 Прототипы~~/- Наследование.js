// Задача 1: Создание объекта
// Создайте объект animal с одним свойством type, равным "mammal".

let animal = {
    type: "mammal",
}

let animal2 = new Object
animal2.type = "mammal"


function animalConstructor(type) {
    this.type = type
}
let animal3 = new animalConstructor("mammal")
console.log(animal3)


// Задача 2: Создание объекта с методом
// Добавьте в объект animal метод speak, который выводит в консоль строку "The animal speaks".

// javascript
// Копировать код
// const animal = {
//     type: "mammal",
//     speak: function() {
//         console.log("The animal speaks");
//     }
// };


let animal2 = {}
animal2.speak =  (function() 
                 {
  console.log("The animal speaks")
})()


// Задача 3: Создание объекта-наследника
// Создайте объект dog, 
// который наследует свойства и методы от объекта animal. 
// Убедитесь,что у него есть собственное свойство breed,
//   равное "Labrador".

let animal4 = {
    legs: 4,
    tale: 1,
    breed: this.breed
  }
  
  console.log(animal4)
  
  function dog(breed) {
    this.breed = breed
  }
  
  dog.prototype = animal4
  
  let labrador = new dog("Labrador")
  console.log(labrador)
  
  
  // мы создали родительский объект.
  // унаследоевали его паарметры в дочерний.
  //  добавили в дочерний значение пустого параметра через конструтор
  
  


// Задача 4: Переопределение метода
// Переопределите метод speak в объекте dog, чтобы он выводил строку "The dog barks".

let dog = {
    speak() {
      console.log( "The dog barks")
    }
  }
  dog.speak()



// Задача 5: Создание конструктора
// Создайте конструктор Animal, 
// который принимает параметр type и создает объект с этим свойством. Добавьте метод speak.

function Animal(type) {
    this.type = type
  }
  
  
  Animal.prototype.speak = function() {
    console.log("The animal speak")
  }
  
  let Cat = new Animal("cat")
  Cat.speak()
  



// Задача 6: Наследование через конструкторы
// Создайте конструктор Dog, который наследует от конструктора Animal. Убедитесь, что у него есть собственное свойство breed.

// Задача 6: Наследование через конструкторы
// Создайте конструктор Dog, который наследует от конструктора Animal. 
// Убедитесь, что у него есть собственное свойство breed.


function Animal(param){
    this.legs = 4;
    this.tale = true;
    this.color = param;
  }
  
  let animalAsObject = new Animal();
  console.log(animalAsObject)
  
  function Dog(breed) {
    this.breed = breed
  } 
  
  
  Dog.prototype = animalAsObject
  
  
  let haski = new Dog("хаски")
  haski.color = 'серый'
  
  console.log(haski)

// Пример другого решения
// function Dog(breed) {
//     Animal.call(this, "mammal"); // Вызов конструктора родителя
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const myDog = new Dog("Labrador");



// Задача 7: Переопределение метода в дочернем классе
// Переопределите метод speak в конструкторе Dog, чтобы он выводил строку "The dog barks".

// javascript
// Копировать код
// Dog.prototype.speak = function() {
//     console.log("The dog barks");
// };
// Задача 8: Использование классов (ES6)
// Перепишите предыдущие задачи, используя синтаксис классов ES6 для создания классов Animal и Dog.

// javascript
// Копировать код
// class Animal {
//     constructor(type) {
//         this.type = type;
//     }

//     speak() {
//         console.log("The animal speaks");
//     }
// }

// class Dog extends Animal {
//     constructor(breed) {
//         super("mammal"); // Вызов конструктора родителя
//         this.breed = breed;
//     }

//     speak() {
//         console.log("The dog barks");
//     }
// }

// const myDog = new Dog("Labrador");
