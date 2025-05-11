// Создайте объект calculator с методами sum и mul, использующими this.

let calculator = {
    sum() {
      console.log(this.num1 + this.num2)
    },
    mul() {
      console.log(this.num1 * this.num2)
    }
  }
  
  calculator.num1 = 2
  calculator.num2 = 3
  calculator.sum()
  calculator.mul()