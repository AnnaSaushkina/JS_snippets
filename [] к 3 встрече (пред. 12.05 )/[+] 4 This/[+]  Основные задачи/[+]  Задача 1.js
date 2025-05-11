// Почему user.sayHi() работает, а setTimeout(user.sayHi, 1000) теряет this? Как исправить?

let user = {
    text: "Hi!",
    sayHi() {
      console.log(this.text)
    }
  }
  // контекст находится
  
  let user2 = {
    text: "Hi!",
     sayHi() {
      setTimeout(function() {
        console.log(this.text)
      }, 1000)
    }
  }
  // не находит контекст. мы ее создали, а не вызвали. привязался к window.
  
  let user3 = {
    text: "Hi!",
     sayHi() {
      setTimeout(() => {
        console.log(this.text)
      }, 1000)
    }
  }
  // стрелочная функция берет this из внешней лексической области. лучший способ
  
  
  user.sayHi()
  user2.sayHi()
  user3.sayHi()