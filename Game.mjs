import { Grid } from "./Grid.mjs"
class Game{
    constructor(gridX, gridY){
        this.gridX = gridX
        this.gridY = gridY
        this.grid = new Grid(gridX, gridY)
        
    }
    
    start(){
        this.grid.create_grid()
        this.grid.create_generation()
        this.grid.show_grid()
        this.grid.update_neighbors()
        while(this.grid.check_all_neighbors() === true){
            this.grid.change_grid_status()
            this.grid.create_generation()
            this.grid.show_grid()
            this.grid.update_neighbors()
        }
        console.log('end Game :)');
    }
}

const game = new Game(6,7)
game.start() 
