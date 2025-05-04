// Создайте конструктор Book, 
function Book(variety) {
    this.variety = variety;
  }
  
  // добавьте метод read() в его прототип. 
  Book.prototype.read = function() {
    console.log('изначальный метод read')
  }
  
  // проверяем изначальный метод
  let newBook = new Book()
  newBook.read()
  
  
  // Затем создайте другой конструктор EBook, 
  // который наследует от Book,
  function Ebook(variety) {
      Book.call(variety)
  }
  
  Ebook.prototype = Object.create(Book.prototype)
  Ebook.prototype.constructor = Ebook;
  
  
  // и переопределите метод read().
  Ebook.prototype.read = function() {
    console.log('переопределенный метод read')
  }
  
  // проверяем переопределение
  let newEbook = new Ebook()
  newEbook.read()
  
  