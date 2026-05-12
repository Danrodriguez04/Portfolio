
export class EmailDto {

    #name;
    #email;
    #issue;
    #message;
    #language;


    constructor(name, email, issue, message, language) {
        this.#name = name;
        this.#email = email;
        this.#issue = issue;
        this.#message = message;
        this.#language = language;
    }


    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(value) {
        this.#email = value;
    }

    getIssue() {
        return this.#issue;
    }

    setIssue(value) {
        this.#issue = value;
    }

    getMessage() {
        return this.#message;
    }

    setMessage(value) {
        this.#message = value;
    }

    getLanguage() {
        return this.#language;
    }

    setLanguage(value) {
        this.#language = value;
    }
}