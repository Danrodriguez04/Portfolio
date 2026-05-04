import {TranslationService} from "../service/TranslationService.js";
export class TranslationController{

    #translationService;

    constructor() {
        this.#translationService = new TranslationService();
    }

    loadLanguage(lang){
        return this.#translationService.loadLanguage(lang);
    }

}