class ShopPage
{
    getShop()
    {
      return cy.get("body > app-root:nth-child(1) > app-navbar:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
    }

    getCheckout()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getCheckoutCart(){
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }

    getCountry(){
        return cy.get('#country')
    }

    getCountryPopUp()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckBoxCheckout()
    {
        return cy.get("#checkbox2")
    }
    getPurchaseButton()
    {
        return cy.get('.ng-untouched > .btn')
    }

    getAlertText()
    {
        return cy.get('.alert')
    }
    getProductPrice()
    {
        return cy.get('tr td:nth-child(4) > strong')
    }

}
export default ShopPage;