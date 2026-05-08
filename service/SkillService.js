import {Skill} from "../model/Skill.js";

export class SkillService {

    async findAll(){
        const response = await fetch('../assets/projects.json')

        const projects = await response.json();

        return projects.skills.map((json) => Skill.jsonToSkill(json));
    }

}