import {Project} from "../model/Project.js";
import {Skill} from "../model/Skill.js";

export class ProjectService{


    async findAllProjects(){
        const headers = new Headers();
        headers.append("content-type", "application/json");

        const generalRoute = 'https://portfol04.netlify.app/';
        const response = await fetch('/assets/projects.json')/*,{
            headers : headers,
            method: 'GET'
        });*/
        const projects = await response.json();

        return projects.map((json) => {
            let project = Project.jsonToProject(json);
            const skills = json.skills.map(j => Skill.jsonToSkill(j));
            project.setSkills(skills);
            return project;
        });
    }


}