import {EmailService} from "../service/EmailService.js";

export class EmailController {

    #emailService;

    constructor() {
        this.#emailService = new EmailService();
    }


    sendEmail(emailDto){
        return this.#emailService.sendMessage(emailDto);
    }


}