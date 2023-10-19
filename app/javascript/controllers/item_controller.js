import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = ['enter', 'exit']
    static values = {id: String}

    connect() {
        this.addEnterClass()
    }

    turboBeforeRenderHook(e){
        const target = e.target;
        if(target.action == "remove" && target.target === this.idValue)
            {
                e.preventDefault();
                this.addExitClass();
                this.element.addEventListener("animationend", this.element.remove)
            }
    }

    removeEnterClass(){
        this.enterClasses.forEach((c)=>{
            this.element.classList.remove(c)
        })
    }
    removeExitClass(){
        this.exitClasses.forEach((c)=>{
            this.element.classList.remove(c);
        })
    }
    addEnterClass(){
        this.removeExitClass();
        this.enterClasses.forEach(c => {
            this.element.classList.add(c)
        });
    }

    addExitClass(){
        this.removeEnterClass()
        this.exitClasses.forEach(c => {
            this.element.classList.add(c)
        });
    }
}
