// Задача 1: Разница между call и apply

const calculator = {
    calculate(a, b, operation) {
      switch(operation) {
        case 'add': return a + b;
        case 'multiply': return a * b;
        default: return 0;
      }
    }
  };
  
  // 1.1. Используйте .call() для вызова calculate с контекстом calculator
  // и аргументами 2, 3, 'add'
  
  console.log(calculator.calculate.call(2, 3, 'add'))
  
  // 1.2. Используйте .apply() для тех же аргументов (передаваемых как массив)
  
  console.log(calculator.calculate.apply([2, 3, 'add']))