describe('Practice 1-Test', () => {
    it("Visit the URL", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
    })

    it("Login Fail Test", () => {
        // Wait for the menu-toggle button to be visible
        cy.get("#menu-toggle").should('be.visible').trigger('mouseover');

        cy.get("a[href='profile.php#login']").click();
        cy.get("#txt-username").type("Kenishhalani");
        cy.get("#txt-password").type("Kenish12@");
        cy.get("#btn-login").click();

        // Assert that the login failed message is displayed
        cy.get(".lead.text-danger").should('be.visible').should('contain', 'Login Failed');
    })
})
