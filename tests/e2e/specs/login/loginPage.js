describe("Verify login page load", () => {
  it("successfully loads Home Page", () => {
    cy.visit("/login");

    cy.contains("div", "Iniciar Sessão");
    cy.contains(
      "div",
      "Digite o email e a senha de um usuário ja cadastrado para iniciar a sessão."
    );
    cy.contains("#login", "Entrar");
    cy.contains("#register", "Registrar-se");
    cy.contains("#recover-password", "Esqueci minha senha");
    cy.contains("#analisys", "aqui");
  });

  it("successfully change routes", () => {
    cy.get("#analisys").click();
    cy.visit("/login");
    cy.get("#register").click();
    cy.visit("/login");
    cy.get("#recover-password").click();
    cy.visit("/login");
  });
});
