// Создайте геттер/сеттер для свойства username, который запрещает пустые значения.

let obj = {
    _someName: "vasya"
  }
  
  Object.defineProperty(obj, "someName", {
    get() {
      return this._someName
    },
    set(value) {
      if (value === undefined || value === ""){
         console.error("Ошибка: имя не может быть пустым");
        return
      }
      this._someName = value
    },
    enumerable: true,
    configurable: false
  })
  
  obj.someName = undefined
  obj.someName = ""
  obj.someName = "petya"
  console.log(obj.someName)