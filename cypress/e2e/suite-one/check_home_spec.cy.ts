describe("Home page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get("title").should("contain", "login");
    cy.contains("p", "Test");
  });
});
