// build your `Project` model here
const db = require("../../data/dbConfig")

const getProject = async () => {
    const projects = await db('projects')
        .select("*")
    return projects.map(project => {
        return {
            ...project,
            project_completed: boolean(project.project_completed)
        }
    })
}

const boolean = (num) => {
    if (num === 0 || null) {
        return false
    }
    if (num === 1) {
        return true
    }
}

const integer = (num) => {
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
            project_completed: integer(project.task_completed)
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