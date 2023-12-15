import { Grid } from "../Grid.mjs";
import { Cell } from "../Cell.mjs";

describe('Grid', () => {
    test('Should create a matrix with cells', ()=>{
        const grid = new Grid(3,3)
        grid.create_grid()
        expect(grid.matrix).toEqual([
            [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
            [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
            [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
        ])
        
    })

    test('Should create a new generation', () => {
        const grid = new Grid(3,3)
        grid.create_grid()
        const generation = grid.generation_number
        const output = generation + 1
        grid.create_generation()
        expect(grid.generation_number).toBe(output)
        
    })

    test('Should check all neighbors', () => {
        const grid = new Grid(3,3)
        const output = true
        grid.create_grid()
        expect(grid.check_all_neighbors()).toBe(output)
        
    })
    
    test('Should update all neighbors', () => {
        const grid = new Grid(3,3)
        grid.create_grid();
        grid.matrix = [[new Cell("."), new Cell("*"), new Cell(".")],
                        [new Cell("*"), new Cell("*"), new Cell(".")],
                        [new Cell("."), new Cell("."), new Cell(".")]]
        grid.update_neighbors()
        const output = [[new Cell("*"), new Cell("*"), new Cell(".")],
                        [new Cell("*"), new Cell("*"), new Cell(".")],
                        [new Cell("."), new Cell("."), new Cell(".")]]
        expect(grid.matrix).toBe(output)
    })
})