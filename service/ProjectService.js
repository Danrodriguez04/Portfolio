import {Project} from "../model/Project.js";

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

        return projects.map(json => Project.jsonToProject(json));
    }


}