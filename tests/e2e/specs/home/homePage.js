describe("Verify home page load", () => {
  it("successfully loads Home Page", () => {
    cy.visit("/");

    cy.contains("h3", "Descubra sua chance de aprovação!");
    cy.contains("h4", "As Universidades com Menores Taxas de Evasão");
    cy.contains("h4", "Os Atributos Mais Influentes");
    cy.contains("h4", "Sobre a Análise");
    cy.contains("h4", "Sobre Nós");

    cy.contains("#start", "Começar");
    cy.contains("#login", "Iniciar sessão");
  });

  it("successfully change routes", () => {
    cy.visit("/");
    cy.get("#start").click();
    cy.get("#home").click();
    cy.get("#login").click();
    cy.get("#home").click();
  });
});
