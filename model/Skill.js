
export class Skill{
    #name;
    #classIcon;
    #type;
    constructor(name,classIcon,type) {
        this.#name = name;
        this.#classIcon = classIcon;
        this.#type = type;
    }

    getName(){
        return this.#name;
    }
    setName(value){
        this.#name = value;
    }

    getClassIcon(){
        return this.#classIcon;
    }
    setClassIcon(value){
        this.#classIcon = value;
    }

    getType(){
        return this.#type;
    }
    setType(value){
        this.#type = value;
    }

    static jsonToSkill(json){
        return new Skill(json.name,json.classIcon,json.type);
    }
}