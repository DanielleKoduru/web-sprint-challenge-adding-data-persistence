// build your `Project` model here
const db = require("../../data/dbConfig")

const getProject = async () => {
    const allProjects = await db('projects')
        .select("*")
    return allProjects.map(project => {
        if (project.project_completed ===1) {
            project.project_completed = true
        } else {
            project.project_completed = false
        }
        return allProjects
    })
}

const boolean = (num) => {
    if (num === true || num === 1 || num === "1") {
        return 1
    } else {
        return 0
    }
}

const addProject = async(project) => {
    const [id] = await db('projects')
        .insert({
            project_name: project.project_name,
            project_description: project.task_description,
            project_completed: boolean(project.task_completed)
        })

    let projects = await db('projects')
        .select('*')
        .where("project_id", id)
        .first()

    return {
        ...projects,
        project_completed: boolean(project.project_completed)
    }
}

module.exports = {
    getProject,
    addProject,
}