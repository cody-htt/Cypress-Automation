/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {

    it("Should be able to submit a successful submission via Contact Us form", () => {
        //cy.visit('http://webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get("a[href$='contact']").click()
        // cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("Cody")
        cy.get('#ContactUsFrm_email').type("cody@email.com")
        cy.get('#ContactUsFrm_enquiry').type("Cypress Automation Testing")
        cy.get('button[title="Submit"]').click()
    })

})