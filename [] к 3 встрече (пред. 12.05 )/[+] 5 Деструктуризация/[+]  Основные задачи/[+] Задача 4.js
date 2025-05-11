// ### Задача 4: Параметры функции

// Напишите функцию, которая принимает объект с width и height
// и возвращает их произведение, используя деструктуризацию

let house = {
  width: 3,
  height: 4
}

function getArea({ width, height}) {
  return width * height
}

console.log(getArea(house))

