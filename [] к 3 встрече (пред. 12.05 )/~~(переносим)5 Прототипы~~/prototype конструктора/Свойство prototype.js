function Animal(name) {    
    this.name = name;
  }
  Animal.prototype.speak = function() {    
    console.log(this.name + "makes a noise");
  };
  
  const dog = new Animal('Buddy ');
  dog.speak(); // Buddy makes a noise.
  
  
  // Создайте конструктор Car, добавьте метод drive() в его прототип.
  // Создайте экземпляр автомобиля и вызовите метод.
  
  function Car(quality) {
   this.quality = quality;
  }
  
  Car.prototype.drive = function() {
    console.log(this.quality)
  }
  
  let auto = new Car('good')
  
  auto.drive()



  // Создайте несколько объектов (например, Cat, Dog) с общими методами через прототипы и проверьте их работу через экземпляры объектов.

let Cat = {
  tale: 1,
  speak() {
    console.log('mew')
  }
}

function Dog() {
}


// Устанавливаем прототип
Dog.prototype = Object.create(Cat)
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function(){
    console.log('bark');
  } 
// меняется только скопированный прототип

let newDog = new Dog()
console.log(Cat)
console.log(newDog)



// Измените прототип конструктора так, чтобы он указывал на другой объект (например, создайте новый объект с методом), и проверьте доступность этого метода у экземпляров.
// Создать объект с одним или несколькими методами — это будет новый прототип.

let personAbilities = {
  speak(phrase) {
    console.log(phrase)
  },
  age(number) {
    console.log("30")
  }
}


function Person(phrase) {
  this.phrase = phrase;
}

Person.prototype = personAbilities


let man = new Person("вася")
let woman = new Person("маша")


man.speak("в твоих руках будущий ты")
woman.speak("и сын твой молодец")


// Создайте несколько конструкторов (например, для объектов типа Book и Author). Проверьте свойство constructor у созданных объектов.

function Book(pages, color) {
  this.pages = pages;
  this.color = color
}

function Authoddddddd(name) {
  this.name = name
}


let newBook = new Book(300, "blue")
let author = new Authoddddddd('Pushkin')

console.log(newBook.constructor)
console.log(author.constructor.name)

// Когда изменяем прототип то нужно сосстанавливать ссылку на конструктор прототипа

function Book(pages, color) {
  this.pages = pages;
  this.color = color
}

Book.prototype = {
  getDescriptions() {
    console.log(this.pages)
  }
}

// Напишите функцию, которая принимает объект и проверяет его тип (конструктор) на основе свойства constructor