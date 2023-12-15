import { Cell } from "../Cell.mjs";


describe('Cell', () => {
    test('Should create a new live Cell', ()=>{
        const cell = new Cell('*')
        const output = "*"
        expect(cell.get_status()).toBe(output)
    })
    
    test('Should create a new death Cell', ()=>{
        const cell = new Cell('.')
        const output = "."
        expect(cell.get_status()).toBe(output)
    })
    
    test('Should change the cell status', () =>{
        const cell = new Cell('*')
        const output = "."
        cell.change_status()
        expect(cell.get_status()).toBe(output)
    })

    test('Should return the number of neighbors', () => {
        const cell = new Cell('*')
        const output = 0
        expect(cell.get_neighbors()).toBe(output)
    })

    test('Should add a neighbors', () => {
        const cell = new Cell('*')
        const output = cell.get_neighbors() + 1
        cell.add_neighbors()
        expect(cell.get_neighbors()).toBe(output)
    })
    test('Should reset the neighbors',() => {
        const cell = new Cell('*')
        const output = 0
        cell.add_neighbors()
        cell.reset_neighbors()
        expect(cell.get_neighbors()).toBe(output)
    })
})


