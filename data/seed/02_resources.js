exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ resource_id: "1", resource_name: "canvas", resource_description: "null" },
		{ resource_id: "2", resource_name: "google", resource_description: "null" },
	])
}