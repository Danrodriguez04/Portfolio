
export class Skill{
    #name;
    #classIcon;
    #type;
    #image;
    constructor(name,classIcon,type,image = null) {
        this.#name = name;
        this.#classIcon = classIcon;
        this.#type = type;
        this.#image = image;
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

    getImage(){
        return this.#image;
    }
    setImage(value){
        this.#image = value;
    }

    static jsonToSkill(json){
        return new Skill(json.name,json.classIcon,json.type,json.image ?? null);
    }
}