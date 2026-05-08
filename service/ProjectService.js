import {Project} from "../model/Project.js";
import {Skill} from "../model/Skill.js";

export class ProjectService{


    async findAllProjects(){
        const response = await fetch('../assets/projects.json')

        const projects = await response.json();

        return projects.projects.map((json) => {
            let project = Project.jsonToProject(json);
            const skills = json.skills.map(j => Skill.jsonToSkill(j));
            project.setSkills(skills);
            return project;
        });
    }


}