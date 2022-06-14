describe("Verify Register form", () => {
  function testPage() {
    cy.visit("/login/register");
  }

  function clear(pField) {
    cy.get("#register").click();
    cy.get(pField).clear("");
  }

  it("unsuccessfully register without inform fields", () => {
    testPage();
    cy.get("#register").click();
    cy.contains("div", "Campo Obrigatório.");
  });

  it("unsuccessfully register inform invalid email", () => {
    cy.get("#input-email").type("email invalido");
    cy.contains("div", "Informe um e-mail válido.");
    clear("#input-email");
  });

  it("unsuccessfully register inform name with number", () => {
    cy.get("#input-name").type("nome com numeros 1234");
    cy.contains("div", "Informe um nome válido.");
    clear("#input-name");
  });

  it("unsuccessfully register inform invalid password", () => {
    cy.get("#input-password").type("1");
    cy.contains("div", "A senha deve conter 8 ou mais caracteres.");
    clear("#input-password");
  });
});
