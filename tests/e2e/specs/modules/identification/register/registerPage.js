describe("Verify register page", () => {
  it("successfully loads Register Page", () => {
    cy.visit("/login/register");

    cy.contains("div", "Cadastrar um Usuário");

    cy.contains("#analisys", "aqui");

    cy.contains("#register", "Registrar-se");

    cy.contains("label", "Concordo com os termos");

    cy.contains("#term", "Termo de Uso");
    cy.get("#term").click();
    cy.contains("#close-modal", "Fechar");
    cy.get("#close-modal").click();
  });

  it("successfully change routes", () => {
    cy.visit("/login");
    cy.get("#register").click();

    cy.get("#back").click();
    cy.visit("/login/register");
  });
});
