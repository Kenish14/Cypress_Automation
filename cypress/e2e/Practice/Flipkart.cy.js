/// <reference types="Cypress"/>

describe("Testing End-to-End Flipkart Website",()=>{

    it("Validating the Business Logic",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.get("body.fk-modal-visible:nth-child(2) div.fbDBuK._3CYmv5:nth-child(17) div.JFPqaw > span._30XB9F").click()
        cy.get('[style="display: flex; flex: 1 1 0%; flex-direction: column; align-items: stretch; border-width: 0px; min-height: 0px; min-width: 0px; position: relative; z-index: 0; box-sizing: border-box; justify-content: center;"] > ._58bkzq62').click()
    })
    
    
})