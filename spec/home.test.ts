import Checker from "../src/model/home";

describe("Checker", () => {
  it("check method returns an array with the perctenage bullshit, counter string and percetange string", () => {
    const checkerFunction = new Checker("Do Dogs have feelings?");

    const infoArray = checkerFunction.check();

    expect(infoArray).toEqual([
      50,
      "This headline ticked 2 of our bullshit boxes",
      "50% bullshit.",
    ]);
  });

  it("if input is invalid e.g '' or one long string", () => {
    const checkerFunction = new Checker("");
    const infoArray = checkerFunction.check();

    expect(infoArray).toBe("invalid input");
  });

  it("if input is a number", () => {
    const checkerFunction = new Checker("10");
    const infoArray = checkerFunction.check();
    expect(infoArray).toBe("invalid input");
  });
});
