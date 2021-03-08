exports.seed = function (knex) {
    return knex('tasks').del()
        .then(function () {
            return knex("tasks").insert([
                { task_id: "1", task_description: "watch lecture", task_notes: "null", task_completed: "1", project_id: "1" },
                { task_id: "2", task_description: "complete quiz", task_notes: "null", task_completed: "0", project_id: "2" },
                { task_id: "3", task_description: "take notes", task_notes: "null", task_completed: "0", project_id: "2" },
                { task_id: "4", task_description: "set up insomnia", task_notes: "null", task_completed: "0", project_id: "2" },
                { task_id: "5", task_description: "set up table plus", task_notes: "null", task_completed: "0", project_id: "2" },
            ])
        })
}