export default class Kep{
    #elut
    #cim
    constructor(elut, cim, szuloElem){
        this.#elut=elut;
        this.#cim=cim;
        this.szuloElem=szuloElem;
        this.megjelenit();
        
    }

    megjelenit(){
        let html=
        `
        <div class="kep">
            <img src="${this.#elut}" alt="${this.#cim}">
        </div>
        `
        this.szuloElem.innerHTML+=html;
    }
}