import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = ['enter']
    initialize(){
        console.log("start")
    }

    connect() {
        this.addEnterClass()
    }

    turboBeforeRenderHook(e){
        console.log(e)
    }

    addEnterClass(){
        this.enterClasses.forEach(c => {
            this.element.classList.add(c)
        });
    }

    addExitClass(){
        this.enterClasses.forEach(c => {
            this.element.classList.add(c)
        });
    }
}
