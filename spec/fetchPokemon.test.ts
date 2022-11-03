import fetchPokemon from "../src/model/fetchPokemon";

describe("tt", () => {
  it("outputs", async () => {
    const pokemon = await fetchPokemon("Bulbasaur");
    expect(pokemon).toEqual({
      attacks: {
        special: [
          { damage: 70, name: "Power Whip", type: "Grass" },
          { damage: 40, name: "Seed Bomb", type: "Grass" },
          { damage: 55, name: "Sludge Bomb", type: "Poison" },
        ],
      },
      fetchedAt: "date",
      id: "UG9rZW1vbjowMDE=",
      image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      name: "Bulbasaur",
      number: "001",
    });
  });
});
