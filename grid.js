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

    // check_cell_neighbors(){
        
    // }

    check_all_neighbors(){
        for (let i = 0; i < this.width; i++) {
            for(let j= 0; j< this.height; j++){
                if(i !== 0){
                    if((this.matrix[i-1][j-1]).get_status() == "*"){ //arriba izzq
                        this.matrix[i][j].neighbors++
                    } else if((this.matrix[i-1][j]).get_status() == "*"){ // arriba
                        this.matrix[i][j].neighbors++
                    } else if((this.matrix[i-1][j+1]).get_status() == "*"){ // arriba der
                        this.matrix[i][j].neighbors++
                    }
                }
                //A partir de aqui
                if(j !== this.height || (this.matrix[i][j+1]).get_status() == "*")
                
                if(i)

                if(i !== 0 || j !== 0) {

                }
            }
            
        }
    }
  



    
}

const grid = new Grid(3,2)


grid.create_grid()
grid.create_generation()
//grid.create_new_cell()
grid.show_grid()