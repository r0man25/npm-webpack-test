import getElement from "./root";

export default class Article {
    constructor(obj) {
        this.head = obj.head;
        this.description = obj.description;
    }

    render() {
        let app = getElement();

        let h = document.createElement("h1");
        h.innerText = this.head;

        let p = document.createElement("p1");
        p.innerText = this.description;

        app.append(h);
        app.append(p);
    }
}