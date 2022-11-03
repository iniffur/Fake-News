import Checker from "../src/model/home";

describe("Checker", () => {
  it("check method returns a string with the perctenage bullshit", () => {
    const checkerFunction = new Checker("Do Dogs have feelings?");

    const output = checkerFunction.check();

    expect(output).toEqual(
      "50% bullshit.\nTrash.\nThis headline ticked 2 of our bullshit boxes"
    );
  });

  it("if input is invalid e.g '' or one long string", () => {
    const checkerFunction = new Checker("");
    const output = checkerFunction.check();

    expect(output).toBe("invalid input");
  });

  it("if input is a number", () => {
    const checkerFunction = new Checker("10");
    const output = checkerFunction.check();
    expect(output).toBe("invalid input");
  });
  it("checker tests a number as a string and counts it as bullshit", () => {
    const checkerFunction = new Checker("10 Ideas");

    const output = checkerFunction.check();

    expect(output).toEqual(
      "50% bullshit.\nTrash.\nThis headline ticked 1 of our bullshit boxes"
    );
  });
  it("checker tests a salacious headline", () => {
    const checkerFunction = new Checker("Are these the 50 worst dressed celebrities of all time?");

    const output = checkerFunction.check();

    expect(output).toEqual(
      "50% bullshit.\nTrash.\nThis headline ticked 5 of our bullshit boxes"
    );
  });
  it("checker tests a clickbait headline", () => {
    const checkerFunction = new Checker("Doctors hate this one trick!");

    const output = checkerFunction.check();

    expect(output).toEqual(
      "100% bullshit.\nTrash.\nThis headline ticked 6 of our bullshit boxes"
    );
  });
  it("test an all caps clickbait", () => {
    const checkerFunction = new Checker("ARE DOCTORS KEEPING THIS ONE WEIRD TRICK SECRET?");

    const output = checkerFunction.check();

    expect(output).toEqual(
      "87.5% bullshit.\nTrash.\nThis headline ticked 7 of our bullshit boxes"
    );
  });
});
