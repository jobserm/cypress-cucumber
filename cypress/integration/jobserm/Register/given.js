import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open home page", () => {
  cy.visit("https://jobserm.github.io");
});

Given(`I open login page`, () => {
  cy.visit("https://jobserm.github.io/#/login");
});

Then("I click register button", () => {
  cy.contains("สมัครสมาชิก").click();
});

Then(
  `I input email {string}`,
  (email) => {
    cy.findByPlaceholderText("อีเมล").type(email);
  }
);

Then(`I input username {string}`, (username) => {
  cy.findByPlaceholderText("ชื่อผู้ใช้").type(username);
});

Then(`I input firstname {string}`, (firstname) => {
  cy.findByPlaceholderText("ชื่อ").type(firstname);
});

Then(`I input lastname {string}`, (lastname) => {
  cy.findByPlaceholderText("สกุล").type(lastname);
});

Then(`I input phone {string}`, (phone) => {
  cy.findByPlaceholderText("เบอร์โทรศัพท์").type(phone);
});

Then(`I input password {string}`, (password) => {
  cy.findByPlaceholderText("รหัสผ่าน").type(password);
  cy.findByPlaceholderText("ยืนยันรหัสผ่าน").type(password);
});

Then(`I click complete register button`, () => {
  cy.get(`div[data-chakra-component="CStack"]`)
    .find(`button:contains("สมัครสมาชิก")`)
    .click();
});

Then(`I login with email {string} password {string}`, (email, password) => {
  cy.intercept("POST", "/api/auth/login").as("login");
  cy.findByPlaceholderText("อีเมล").type(email);
  cy.findByPlaceholderText("รหัสผ่าน").type(password);
  cy.get(
    `#__chakra-app > div > div > div.css-j7qwjs.css-0 > div.css-gmuwbf > div:nth-child(2) > div > div.css-14l4d85 > button`
  ).click();
  cy.wait("@login").its("response.body").should("include", "access_token");
  cy.contains("เข้าสู่ระบบสำเร็จ").should("exist");
});
