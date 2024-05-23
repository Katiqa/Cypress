describe("Tests for add books to favorite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Add new book", () => {
    cy.login("test@test.com", "test");
    cy.addNew("Book", "This book", "Me");
  });
  it("Add to favorite", () => {
    cy.login("test@test.com", "test");
    cy.addNew("Book", "This book", "Me");
    cy.addFavorite();
  });
  it("Delete from favorite", () => {
    cy.login("test@test.com", "test");
    cy.addNew("Book", "This book", "Me");
    cy.addFavorite();
    cy.get("button").contains("Delete from favorite").click();
  });
});
