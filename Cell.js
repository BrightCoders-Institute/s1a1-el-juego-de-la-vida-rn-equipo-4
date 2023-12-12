class Cell{
    constructor(status){
        this.status = status
        this.neighbours = 0
    }
    
    change_status(){
        if (this.neighbours < 2){
            this.status = "."
        }

        if (this.neighbours > 3){
            this.status = "."
        }
        if (this.neighbours == 3){
            this.status = "*"
        }
    }

    get_status(){
        return this.status
    }
    
}
module.exports = Cell