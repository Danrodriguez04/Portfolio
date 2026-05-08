import {SkillService} from "../service/SkillService.js";

export class SkillController {

    #skillService;

    constructor() {
        this.#skillService = new SkillService();
    }

    findAll(){
        return this.#skillService.findAll();
    }
}