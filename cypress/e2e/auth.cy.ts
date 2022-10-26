// import { faker } from "@faker-js/faker";

describe("auth page", () => {
  /* 
  beforeEach(() => {
    cy.visit('/login')
  }) */

  const loginForm = {
    email: `usertest@example.com`,
    password: `usertest`,
  };

  beforeEach(() => {
    cy.cleanupUser({ email: loginForm.email });
  });

  it("should allow you to register and login", () => {

    cy.visit('/join')
  

    cy.dataCy('email-input')
      .focus()
      .type(loginForm.email)

    cy.dataCy('password-input')
      .focus()
      .type(loginForm.password)

    cy.dataCy('join-submit')
      .click()

    /* cy.find

    cy.findByRole("link", { name: /sign up/i }).click();

    cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
    cy.findByLabelText(/password/i).type(loginForm.password);
    cy.findByRole("button", { name: /create account/i }).click(); */

    /* cy.findByRole("link", { name: /notes/i }).click();
    cy.findByRole("button", { name: /logout/i }).click();
    cy.findByRole("link", { name: /log in/i }); */
  });

  /* it("should allow you to make a note", () => {
    const testNote = {
      title: faker.lorem.words(1),
      body: faker.lorem.sentences(1),
    };
    cy.login();

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /notes/i }).click();
    cy.findByText("No notes yet");

    cy.findByRole("link", { name: /\+ new note/i }).click();

    cy.findByRole("textbox", { name: /title/i }).type(testNote.title);
    cy.findByRole("textbox", { name: /body/i }).type(testNote.body);
    cy.findByRole("button", { name: /save/i }).click();

    cy.findByRole("button", { name: /delete/i }).click();

    cy.findByText("No notes yet");
  }); */
});
