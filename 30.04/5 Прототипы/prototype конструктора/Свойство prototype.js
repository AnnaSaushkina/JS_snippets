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