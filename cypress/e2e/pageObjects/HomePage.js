class HomePage

{
    getNameBox()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayBox()
    {
        return  cy.get(":nth-child(4) > .ng-untouched")
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepruener(){
       return cy.get('#inlineRadio3')
    }


}

//if we want to make all the object declared here accessible we will use "export default HomePage"
export default HomePage;