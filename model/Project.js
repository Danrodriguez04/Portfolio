export class Project{

    #name;
    #description;
    #location;
    #date;
    #imageLocation;
    #status
    #skills;

    constructor(name,description,location,date,imageLocation,status) {
        this.#name = name;
        this.#description = description;
        this.#location = location;
        this.#date = date;
        this.#imageLocation = imageLocation;
        this.#status = status;
    }


    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getDescription() {
        return this.#description;
    }

    setDescription(value) {
        this.#description = value;
    }

    getLocation() {
        return this.#location;
    }

    setLocation(value) {
        this.#location = value;
    }

    getDate() {
        return this.#date;
    }

    setDate(value) {
        this.#date = value;
    }

    getImageLocation() {
        return this.#imageLocation;
    }

    setImageLocation(value) {
        this.#imageLocation = value;
    }

    getStatus() {
        return this.#status;
    }

    setStatus(value) {
        this.#status = value;
    }

    getSkills() {
        return this.#skills;
    }

    setSkills(value) {
        this.#skills = value;
    }


    static jsonToProject(json){
        return new Project(json.name,json.description,json.location,json.date,json.imageLocation,json.status);
    }

}