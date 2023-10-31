describe("Validating Intact Website",()=>{
    it("Testing the Radio Buttons",()=>{
        //Test all the functionalities on the website and validate them as well.
        cy.visit("https://www.intact.ca/en/personal-insurance.html")
        cy.get(".ic-radio-button").eq(0).click()
        cy.get("div[class='i-cmp-province-selector i-cmp-province-selector--is-open'] span[class='ic-button__label']").click()
        //validating if we have choosen alberta region
        cy.get("h2[id='1c1cd051-6515-440a-a721-3060b4b6f71d'] div").should('contain','Alberta')          
        })

    it("Validating Get Quote Function",()=>{
        cy.visit("https://www.intact.ca/en/personal-insurance.html")
        cy.get(".ic-radio-button").eq(0).click()
        cy.get("div[class='i-cmp-province-selector i-cmp-province-selector--is-open'] span[class='ic-button__label']").click()
        cy.get("#getQuote-bt-mobile-modal").click()
        cy.get('#mobile-get-a-quote-modal-content > .ic-container-v2--max-width--100-no-padding > :nth-child(1) > :nth-child(1) > :nth-child(1) > .aem-Grid--md--12 > .ic-container-v2--background--white > .ic-container-v2__wrapper > .ic-container-v2__content > .responsivegrid > .aem-Grid > :nth-child(2) > .ic-button--desktop > .ic-button__label').invoke("removeAttr",'target').click()
        //validating if we are at car insurance page
        //cy.wait(2000)
        //cy.get("#car_info_title").should('have.text', 'Car');

    
    
    })

    it("Validating Get Quote Function in New Tab", () => {
        cy.visit("https://www.intact.ca/en/personal-insurance.html");
        cy.get(".ic-radio-button").eq(0).click();
        cy.get("div[class='i-cmp-province-selector i-cmp-province-selector--is-open'] span[class='ic-button__label']").click();
      
        // Click the element that opens in a new tab
        cy.get("#getQuote-bt-mobile-modal").click();
      
        // Handle the confirmation dialog
        cy.on("window:confirm", (str) => {
          expect(str).to.equal("This action will open a new tab. Do you want to continue?");
          return true;  // Confirms the dialog
        });
      
        // Switch to the new tab
        cy.window().then((win) => {
          // You're now in the new tab
          // You can use cy.get() to interact with elements in the new tab
          cy.log("Before clicking element");
          cy.get("#getQuote-bt-mobile-modal").click();
          cy.log("After clicking element");
          cy.get("#car_cant_find_popup_link", { timeout: 10000 }).should("be.visible");

          cy.get("#car_cant_find_popup_link").should("contain", "Car");
        });
      });
      
    })