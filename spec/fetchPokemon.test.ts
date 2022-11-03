import fetchPokemon from "../src/model/fetchPokemon";

describe("tt", () => {
  it("outputs", async () => {
    const pokemon = await fetchPokemon("Bulbasaur");
    expect(pokemon).toEqual("Bulbasaur");
  });
});
