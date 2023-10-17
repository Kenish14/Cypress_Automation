describe('Validating New Drop Down', () => {
    it('should validate that Latest News is selected and user is on that page', () => {
      cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/75476/ind-vs-pak-12th-match-icc-cricket-world-cup-2023');
      cy.wait(3000)
      cy.get('#newsDropDown').click();
     // cy.wait(3000)
      //cy.contains('.cb-sub-navigation', 'Latest Cricket News').click();
      //cy.url().should('include', '/cricket-news/latest-news');
    });
  });
  