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

function addProject() {

}

module.exports = {
    getProject,
    addProject,
}