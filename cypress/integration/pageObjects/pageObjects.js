 
class HomePage 
{
getNameBox()
{
    return  cy.get(":nth-child(1) > .form-control");
}

getEmail()
{
    cy.get("input[name*='email']")
}

getTwoWayDataBinding()
{
    return cy.get("h4 input[name*='name']")
}

getGender()
{

    return cy.get('#exampleFormControlSelect1')
}


getEntrepreneur()

{
    return  cy.get("#inlineRadio3")
}

getShopTab()

{
    return cy.get(".nav-link[href='/angularpractice/shop']")
}


getCheck()
{
    return cy.get(" #exampleCheck1")
}

}
export default HomePage;