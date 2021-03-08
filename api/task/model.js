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

const newTask = async (task) => {
    const [id] = await db('tasks')
        .insert({
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: boolean(task.task_completed),
            project_id: task.project_id
        })

    let tasks = await db('tasks')
        .select('*')
        .where("task_id", id)
        .first()

    return {
        ...tasks,
        task_completed: boolean(task.task_completed)
    }
}

const getTasks = async () => {
    const tasks = await db('tasks as t')
        .join("projects as p", "t.project_id", "p.project_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
        )
    return tasks.map(task => {
        if (task.task_completed === 1) {
            task.task_completed === true
        } else {
            task.task_completed = false
        }
        return tasks
    })
}

module.exports = {
    getTasks,
    newTask,
}