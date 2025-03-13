import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{
    #aktualisIndex;
    constructor(){
        this.nagykepElem = document.getElementsByClassName("kiemeltkep")[0]
        new KiemeltKep(this.lista[this.aktualisIndex].kep,
                            this.lista[this.aktualisIndex].cim,
                             this.nagykepElem)
        this.lista=lista;
        this.#aktualisIndex=aktualisIndex;
        this.balElem = document.querySelector(".bal")
        this.jobbElem = document.querySelector(".jobb")
        this.esemenykezelo();
    }
    esemenykezelo(){
        this.balElem.addEventListener("click", ()=>{
            this.aktualisIndex--;
            this.aktualisIndex<0?this.lista.length -1 : this.aktualisIndex = this.aktualisIndex;
            const NAGYKEP = new KiemeltKep(this.lista[this.aktualisIndex].kep, this.lista[this.aktualisIndex].cim, this.nagykepElem)
        });
        this.jobbElem.addEventListener("click", ()=>{
            this.aktualisIndex++;
            this.aktualisIndex>this.lista.length -1? this.aktualisIndex=0 : this.aktualisIndex = this.aktualisIndex;
            const NAGYKEP = new KiemeltKep(this.lista[this.aktualisIndex].kep, this.lista[this.aktualisIndex].cim, this.nagykepElem)
        });
    }
    }