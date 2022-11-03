import Google from "../src/model/google";
describe("Google API", () => {
  it("returns claims array", () => {
    const mockedAPI = {
      fetchCheckerData: (query: any, callback: any) => {
        callback({
          text: "King Charles III signed a proclamation saying Trump won the 2020 election",
          claimant: "social media",
        });
      },
    };

    const google = new Google(mockedAPI);
    google.fetch("trump won election");

    expect(google.getCheckerData()).toEqual({
      text: "King Charles III signed a proclamation saying Trump won the 2020 election",
      claimant: "social media",
    });
  });
});
