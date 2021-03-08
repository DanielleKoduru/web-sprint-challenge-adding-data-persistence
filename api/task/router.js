// build your `/api/tasks` router here
const express = require("express")
const task = require("./model")

const router = express.Router()

// #1 `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get("/", async (req, res, next) => {
	try {
        const tasks = await task.getTasks()
        res.status(200).json(tasks)
	} catch(err) {
		next(err)
	}
})

// #2 `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post("/", async (req, res, next) => {
	try {
		const tasks = await task.newTask(req.body)
		res.status(201).json(tasks)
	} catch(err) {
		next(err)
	}
})

module.exports = router