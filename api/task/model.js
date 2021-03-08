const db = require("../../data/dbConfig")

const getTasks = () => {
    return db("tasks")
        .select("*")
}

// const getTasks = async () => {
//     const allTasks = await db('tasks as t')
//         .join("projects as p", "t.project_id", "p.project_id")
//         .select(
//             "t.task_completed",
//             "t.task_description",
//             "t.task_notes",
//         )
//     return allTasks.map(task => {
//         if (task.task_completed === 1) {
//             task.task_completed === true
//         } else {
//             task.task_completed = false
//         }
//         return allTasks
//     })
// }

const boolean = (num) => {
    if (num === true || num === 1 || num === "1") {
        return 1
    } else {
        return 0
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

module.exports = {
    getTasks,
    newTask,
}