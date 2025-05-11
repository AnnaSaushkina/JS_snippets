// Задача 2: Практика с .bind()

const timer = {
    message: 'Timeout completed',
    showMessage() {
      console.log(this.message);
    }
  };
  
  // 2.1. Создайте связанную функцию с фиксированным контекстом timer
   let result = timer.showMessage.bind(timer)
  
  // 2.2. Вызовите ее через 1 секунду
  
  setTimeout(result, 1000)
  
  