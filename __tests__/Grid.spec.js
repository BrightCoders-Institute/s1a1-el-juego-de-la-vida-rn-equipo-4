import { Grid } from "../Grid.mjs";
import { Cell } from "../Cell.mjs";

describe("Grid", () => {
  test("Should create a matrix with cells", () => {
    const grid = new Grid(3, 3);
    grid.create_grid();
    expect(grid.matrix).toEqual([
      [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
      [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
      [expect.any(Cell), expect.any(Cell), expect.any(Cell)],
    ]);
  });

  test("Should create a new generation", () => {
    const grid = new Grid(3, 3);
    grid.create_grid();
    const generation = grid.generation_number;
    const output = generation + 1;
    grid.create_generation();
    expect(grid.generation_number).toBe(output);
  });

  test("Should check all neighbors", () => {
    const grid = new Grid(3, 3);
    grid.create_grid();
    grid.matrix = [
      [new Cell("."), new Cell("*"), new Cell(".")],
      [new Cell("*"), new Cell("."), new Cell(".")],
      [new Cell("."), new Cell("."), new Cell("*")],
    ];
    const output = grid.check_all_neighbors();
    grid.change_grid_status();
    expect(false).toBe(output);
  });

  test("Should change the cell status", () => {
    const grid = new Grid(2, 2);
    grid.create_grid();
    grid.matrix = [
      [new Cell("."), new Cell("*")],
      [new Cell("*"), new Cell("*")],
    ];
    grid.update_neighbors();
    grid.change_grid_status();
    const output = [
      [new Cell("*"), new Cell(".")],
      [new Cell("."), new Cell(".")],
    ];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        expect(grid.matrix[i][j].get_status()).toBe(output[i][j].status);
      }
    }
  });

  test("Should update the neighbors", () => {
    const grid = new Grid(2, 2);
    grid.create_grid();
    grid.matrix = [
      [new Cell("."), new Cell("*")],
      [new Cell("*"), new Cell("*")],
    ];
    grid.update_neighbors();
    grid.change_grid_status();
    const output = [
      [new Cell("*"), new Cell(".")],
      [new Cell("."), new Cell(".")],
    ];

    output[0][0].neighbors = 3;
    output[0][1].neighbors = 2;
    output[1][0].neighbors = 2;
    output[1][1].neighbors = 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        expect(grid.matrix[i][j].get_neighbors()).toBe(output[i][j].neighbors);
      }
    }
  });
});
