/// <reference types="cypress" />

describe("testing cdenv", () => {
  beforeEach(() => {
    // cy.visit(`${process.env.NEXTAUTH_URL}`)
    cy.visit("http://localhost:3000/");
  });

  it("check Signin", () => {
    cy.get("button").contains("Log in").click();
    // Should be on a new URL which includes /authentication/signin
    cy.url().should("include", "/authentication/signin");
    cy.get("div").contains("Log in to your account");
    cy.get('input[name="email"]')
      .type("d25thbamm@gmail.com")
      .should("have.value", "d25thbamm@gmail.com");
    cy.get('input[name="password"]')
      .type("12345678")
      .should("have.value", "12345678");
    cy.get('div[id="showPasswordButton"]').click();
    cy.get("[type='text']").should("have.value", "12345678");
    cy.get('div[id="showPasswordButton"]').click();
    cy.get("form").submit();
    // Verify the app redirected you to the homepage
    cy.location("pathname", { timeout: 10000 }).should("eq", "/dashboard");
  });

  // it("test if signin successful", () => {
  //   cy.visit("http://localhost:3000/dashboard");
  //   cy.location("pathname").should("eq", "/dashboard");
  // });
});
