import Checker from "../src/model/home";

describe("Checker", () => {
  it("check method returns an array with the perctenage bullshit, counter string and percetange string", () => {
    const checkerFuction = new Checker("Do Dogs have feelings?");

    const infoArray = checkerFuction.check();

    expect(infoArray).toEqual([
      50,
      "This headline ticked 2 of our bullshit boxes",
      "50% bullshit.",
    ]);
  });
});
