// 🔹 Задача 3: Динамическое создание свойства
const dynamicKey = "language";  
const app = {  
  name: "MyApp",  
  [dynamicKey]: "JavaScript" // Используйте вычисляемое свойство  
};  

// 1. Добавьте ещё одно свойство `"currentVersion"` со значением `"1.0.0"`,  
//    используя квадратные скобки (ключ из переменной).  

app["currentVersion"] = "1.0.0"

// console.log(app); // { name: "MyApp", language: "JavaScript", currentVersion: "1.0.0" }  
// Цель: Научиться работать с динамическими ключами.