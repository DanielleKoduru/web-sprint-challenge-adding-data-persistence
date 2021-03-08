exports.seed = function (knex) {
    return knex('resources').del()
        .then(function () {
            return knex("resources").insert([
                { resource_id: "1", resource_name: "canvas", resource_description: "null" },
                { resource_id: "2", resource_name: "google", resource_description: "null" },
            ])
        })
}