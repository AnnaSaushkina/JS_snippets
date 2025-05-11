// конструктор
function Task(userText, id) {
    this.userText = userText;
    this.id = id;
    this.done = false;
};

let taskManager = {
    tasks: [],
    addTask(userText, id) {
        let newTask = new Task(userText, id);

        this.tasks.push(newTask)
        this.taskText = newTask.userText
        this.taskId = newTask.id

        console.log(`-------Добавлена: ${this.taskText}, ${this.taskId}`)  
    },
    deleteTask(id) {
            this.tasks.splice(id, 1)
            console.log(`Задача удалена отсюда: `)
            console.log(this.tasks)
    },
    editTask(id, updateValue) {
        this.tasks[id].userText = updateValue;
        console.log(`Задача отредактирована вот так: `)
        console.log(this.tasks)
    },
    toggleDone(id) {
        this.tasks[id].done = !this.tasks[id].done;
    }
}
// Добавление - сделано
taskManager.addTask("первая задача", 1)
taskManager.addTask("вторая задача", 2)
taskManager.addTask("третья задача", 3)

// Удаление - сделано
taskManager.deleteTask(1)

// Редактирование и тоггл - сделано, но ломается если указанный айдишник больше числа элементов в массиве на момент вызова метода
taskManager.editTask(1, "хочу вот такой текст")

taskManager.toggleDone(0)
taskManager.toggleDone(0)

console.log(taskManager.tasks)

