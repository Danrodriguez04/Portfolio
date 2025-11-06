import {Project} from "../model/Project.js";

export class ProjectService{



    async findAllProjects(){
        const headers = new Headers();
        headers.append("content-type", "application/json");

        const response = await fetch('./../assets/projects.json',{
            headers : headers,
            method: 'POST'
        });

        const projects = await response.json();

        return projects.map(json => Project.jsonToProject(json));
    }


}