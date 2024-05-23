describe("test booking store", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("First test view", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });
  it("Wrong mail", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql(
        "Please fill out this field."
      );
    });
  });
  it("Wrong password", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql(
        "Please fill out this field."
      );
    });
  });
});
