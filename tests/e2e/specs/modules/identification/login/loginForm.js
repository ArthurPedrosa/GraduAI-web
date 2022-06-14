describe("Verify login form", () => {
  function testPage() {
    cy.visit("/login");
  }

  it("unsuccessfully login without inform fields", () => {
    testPage();
    cy.get("#login").click();
    cy.contains("div", "Campo Obrigatório.");

    cy.get("#input-email").type("teste@gmail.com");
    cy.get("#login").click();
    cy.contains("div", "Campo Obrigatório.");

    cy.get("#input-email").clear("");
    cy.get("#input-password").type("abcd1234");
    cy.get("#login").click();
    cy.contains("div", "Campo Obrigatório.");
    cy.get("#input-password").clear("");
  });

  it("unsuccessfully login inform invalid email", () => {
    cy.get("#input-email").type("email invalido");
    cy.get("#login").click();
    cy.contains("div", "Informe um e-mail válido.");
  });
});
