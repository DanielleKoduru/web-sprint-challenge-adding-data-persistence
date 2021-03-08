// build your `/api/projects` router here
const express = require("express")
const project = require("./model")

const router = express.Router()

//#1 `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
router.post("/", async (req, res, next) => {
	try {
		const projects = await project.newProject(req.body)
		res.status(201).json(projects)
	} catch(err) {
		next(err)
	}
})
// #2 `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
router.get("/", async (req, res, next) => {
	try {
        const projects = await project.find()
        res.status(200).json(projects)
	} catch(err) {
		next(err)
	}
})