let addBtn = document.querySelector(".add")
let deleteBtn = document.querySelector(".delete")
let editBtn = document.querySelector(".edit")

let userEnter = document.querySelector(".input")
let tasksList = document.querySelector(".output")

addBtn.addEventListener("click", function() {
    taskManager.addTask("userInput", )
    console.log(taskManager.tasks)
})

deleteBtn.addEventListener("click", function() {
    taskManager.deleteTask(0)
    console.log(taskManager.tasks)
})

// addBtn.addEventListener("click", taskManager.addTask("userInput", 1))