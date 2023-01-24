import { Site } from "./site"
import { Sidebar } from "./sidebar"

export class App {
    constructor(model) {
        this.model = model
    }
    init() {
        const site = new Site('#site')

        site.rendor(this.model)

        const updateCallback = newBlock => {
            this.model.push(newBlock)
            site.rendor(this.model)
        }
        new Sidebar('#panel', updateCallback)
    }
}

