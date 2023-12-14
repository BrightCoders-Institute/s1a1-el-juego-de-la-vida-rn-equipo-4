export class Cell{
    constructor(status){
        this.status = status
        this.neighbors = 0
    }
    
    change_status(){
        if (this.neighbors <= 2){
            this.status = "."
        }

        if (this.neighbors > 3){
            this.status = "."
        }
        if (this.neighbors == 3){
            this.status = "*"
        }
    }

    get_status(){
        return this.status
    }
    get_neighbors(){
        return this.neighbors
    }
    
    add_neighbors(){
        this.neighbors++
    }

    reset_neighbors(){
        this.neighbors = 0
    }
    
}
