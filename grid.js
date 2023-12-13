const Cell = require("./Cell.js")
class Grid{ //ayudadios
    constructor(width, height){
        this.width = width
        this.height = height
        this.matrix = []
        this.generation = []
    }
    create_grid(){
        for(let i = 0; i<this.width; i++){
            this.matrix[i] = []
            for(let j = 0; j < this.height;j++) {
                if(this._getRandomInt(3) == 2){
                    this.matrix[i][j] = new Cell("*") 
                }
                else{
                    this.matrix[i][j] = new Cell(".")
                }
               
            }
        }
    }

//////

    _getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    
    create_generation(){
        for (let i = 0; i < this.width; i++) {
            this.generation[i] = []
            for(let j= 0; j< this.height;j++){
                this.generation[i][j] = this.matrix[i][j].get_status()
               // console.log(((this.matrix[i][j]).get_status()).join('\t'));
            }
            
          }
    }

    show_grid(){
        for (let i = 0; i < this.width; i++) {
            console.log(this.generation[i].join('\t'))
        }
    }
    change_grid_status(){
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j< this.height;j++){
                this.matrix[i][j].change_status()
            }
        }
    }
    check_all_neighbors(){
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j< this.height;j++){
                if(this.matrix[i][j].get_neighbors() > 0){
                    return true
                } 
            }
        }
    }


    update_neighbors(){
        
        for (let i = 0; i < this.width; i++) { //neighbors
            for(let j= 0; j< this.height; j++){
                this.matrix[i][j].reset_neighbors()
                if(i !== 0){
                    if(j !== 0){
                        if(this.matrix[i-1][j-1].get_status() == "*") {
                            this.matrix[i][j].add_neighbors()
                            
                        }
                        
                    }
                    if(this.matrix[i-1][j].get_status() == "*"){
                        this.matrix[i][j].add_neighbors()
                    }
                    if(j!==this.height-1){
                        if(this.matrix[i-1][j+1].get_status() == "*"){
                            this.matrix[i][j].add_neighbors()
                        }
                    }
                    
                }
                if(j!==this.height-1){
                    if(this.matrix[i][j+1].get_status()=="*"){
                        this.matrix[i][j].add_neighbors()
                    }
                    if(i !== this.width -1){
                        if(this.matrix[i+1][j+1].get_status()=="*"){
                            this.matrix[i][j].add_neighbors()
                        }
                    }

                   
                }
                if(i!==this.width-1){
                    if(this.matrix[i+1][j].get_status()=="*"){
                        this.matrix[i][j].add_neighbors()
                    }
                    if(j!== 0){
                        if(this.matrix[i+1][j-1].get_status()=="*"){
                            this.matrix[i][j].add_neighbors()
                        }
                    }
                }
                if(j!==0){
                    if(this.matrix[i][j-1].get_status()=="*"){
                        this.matrix[i][j].add_neighbors()
                    }
                }
                
                
            }

            
            
        }
        
    }
  
}

module.exports = Grid