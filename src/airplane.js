class Airplane { 
    #id = "default";

    constructor(name) {
        this.#id = name;
    }

    getID() {return this.#id};
};

export default Airplane;