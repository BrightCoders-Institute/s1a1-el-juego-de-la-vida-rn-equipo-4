import { Game } from "../Game.mjs";
import { Grid } from "../Grid.mjs";

describe("Game", () => {
  test("Should start a game", () => {
    const game = new Game(3, 3);
    expect(game.grid).toBeInstanceOf(Grid);
  });
});
