import {ProjectService} from "../service/ProjectService.js";

export class ProjectController{

    #projectService;

    constructor() {
        this.#projectService = new ProjectService();
    }

    findAllProjects(){
        return this.#projectService.findAllProjects();
    }

}