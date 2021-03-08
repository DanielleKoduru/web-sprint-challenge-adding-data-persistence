// build your `Resource` model here
const db = require("../data/dbConfig")

function find() {
	return db("resources")
	.select("*")	
}

function newResource(resource) {
    const id = db("resources")
        .insert({
            resource_name: resource.resource_name,
            resource_description: resource.resource_description,
        })
    return db("resources")
    .select('*')
    .where("resource_id", id)
    .first()		
}

module.exports = {
	find,
	newResource,
}