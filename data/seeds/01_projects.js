exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ project_id: "1", project_name: "finish database project", project_description: "null", project_completed: "1" },
		{ project_id: "2", project_name: "take test", project_description: "null", project_completed: "0" },
	])
}