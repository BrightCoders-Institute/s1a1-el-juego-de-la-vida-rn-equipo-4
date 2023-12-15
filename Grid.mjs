import { Cell } from "./Cell.mjs"
export class Grid{ 
    constructor(width, height){
        this.height = width
        this.width = height
        this.matrix = []
        this.generation = []
        this.generation_number = 0
    }
    create_grid(){
        for(let i = 0; i<this.height; i++){
            this.matrix[i] = []
            for(let j = 0; j < this.width;j++) {
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
        this.generation_number++
        for (let i = 0; i < this.height; i++) {
            this.generation[i] = []
            for(let j= 0; j< this.width;j++){
                this.generation[i][j] = this.matrix[i][j].get_status()
            }
          }
    }

    show_grid(){
        console.log(`- - - - Generation ${this.generation_number} - - - -`)
        for (let i = 0; i < this.height; i++) {
            console.log(this.generation[i].join('\t'))
        }
    }

    change_grid_status(){
        for(let i = 0; i< this.height;i++){
            for(let j = 0; j< this.width;j++){
                 this.matrix[i][j].change_status()
            }
        }
    }
    
    check_all_neighbors(){
        for(let i = 0; i< this.height;i++){
            for(let j = 0; j< this.width;j++){
                if(this.matrix[i][j].get_neighbors() > 0){
                    return true
                } 
            }
        }
        return false;
    }


    update_neighbors(){
        
        for (let i = 0; i < this.height; i++) { 
            for(let j= 0; j< this.width; j++){
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
                    if(j!==this.width-1){
                        if(this.matrix[i-1][j+1].get_status() == "*"){
                            this.matrix[i][j].add_neighbors()
                        }
                    }
                    
                }
                if(j!==this.width-1){
                    if(this.matrix[i][j+1].get_status()=="*"){
                        this.matrix[i][j].add_neighbors()
                    }
                    if(i !== this.height -1){
                        if(this.matrix[i+1][j+1].get_status()=="*"){
                            this.matrix[i][j].add_neighbors()
                        }
                    }
                }
                if(i!==this.height-1){
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

