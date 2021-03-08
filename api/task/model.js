// build your `Task` model here
const db = require("../../data/dbConfig")

const boolean = (num) => {
    if (num === 0 || null) {
        return false
    }
    if (num === 1) {
        return true
    }
}

function findTasks() {
    const tasks = db('tasks')
        .select("*")
    return tasks.map(task => {
        return {
            ...task,
            task_completed: boolean(task.task_completed)
        }
    })
}

function newTask() {

}

module.exports = {
    findTasks,
    newTask,
}