export const DataCYPage = {
    launchURL(){
        return cy.visit('/');
    },
    getElementTab(){
      return cy.get('[data-cy="elementDataCy"]',
            {timeout:5000}
        );
    },
    getFormsTab(){
       return cy.get('[data-cy="formsDataCy"]',
            {timeout:5000}
        );
    },
    getAlertsFrameWindowsTab(){
       return cy.get('[data-cy="alertsFrameWindowsDataCy"]',
            {timeout:5000}
        );
    },
    getWidgetsTab(){
       return cy.get('[data-cy="widgetsDataCy"]',
            {timeout:5000}
        );
    },
    getInteractionsTab(){
       return cy.get('[data-cy="interactionsDataCy"]',
            {timeout:5000}
       );
    },
    getBookStoreApplicationTab(){
       return cy.get('[data-cy="bookStoreApplicationDataCy"]',
            {timeout:5000}
       );
    },
};