exports.seed = function (knex) {
    return knex('projects').del()
        .then(function () {
            return knex("projects").insert([
                { project_id: 1, project_name: "finish database project", project_description: "null", project_completed: "1" },
                { project_id: 2, project_name: "take test", project_description: "null", project_completed: "0" }
            ])
        })
}