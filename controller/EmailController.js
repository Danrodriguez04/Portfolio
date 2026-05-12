import {EmailService} from "../service/EmailService.js";

export class EmailController {

    #emailService;

    constructor() {
        this.#emailService = new EmailService();
    }


    sendEmail(emailDto){
        this.#emailService.sendMessage(emailDto);
    }


}