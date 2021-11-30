/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    it("Should be able to submit a successful submission via Contact Us form", () => {
        //cy.visit('http://webdriveruniversity.com/')
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Cody")
        cy.get('[name="last_name"]').type("Huynh")
        cy.get('[name="email"]').type("tung@email.com")
        cy.get('textarea.feedback-input').type("Cypress Automation Testing")
        cy.get('[type="submit"]').click()
    })

    //Use it.only() to run only the specified test case
    it("Should not be able to submit a successful submission via Contact Us form as all fied are required", () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Cody")
        cy.get('[name="last_name"]').type("Huynh")
        cy.get('textarea.feedback-input').type("Cypress Automation Testing")
        cy.get('[type="submit"]').click()
    })

})