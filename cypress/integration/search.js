describe('Search elements', ()=> {
    beforeEach(()=> {
        cy.visit('http://automationpractice.com');
    })
    it('Search for elements for multiple results', ()=> {
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=> {
            cy.get(searchResult.result).should('contain', 'dress')
        })
    })
    it('Search for elements with no results', ()=> {
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=> {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        })
    })
})