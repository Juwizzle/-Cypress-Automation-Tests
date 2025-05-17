///<reference types ='cypress'/>

import { DataCYPage } from "./Pages/DataCYPage";

describe('Testing Tab Elements', () => {

    const tabElementsToInject = [
        {selector:'h5',text:'Elements',dataCy:'elementDataCy'},
        {selector:'h5',text:'Forms',dataCy:'formsDataCy'},
        {selector:'h5',text:'Alerts, Frame & Windows',dataCy:'alertsFrameWindowsDataCy'},
        {selector:'h5',text:'Widgets',dataCy:'widgetsDataCy'},
        {selector:'h5',text:'Interactions',dataCy:'interactionsDataCy'},
        {selector:'h5',text:'Book Store Application',dataCy:'bookStoreApplicationDataCy'},
    ];
    beforeEach(() => {
        DataCYPage.launchURL();
        cy.injectMultipleDataCY(tabElementsToInject)
    });

    it('Elements Tab', () => {
        DataCYPage.getElementTab().should('exist').should('be.visible')
        .should('contain.text','Elements')
        .click({force:true});
        
    });
    it('Forms Tab', () => {
        DataCYPage.getFormsTab().should('exist').should('be.visible')
        .should('contain.text','Forms').click({force:true});
    });
    it('Alerts, Frame & Windows Tab', () => {
        DataCYPage.getAlertsFrameWindowsTab().should('exist')
        .should('be.visible')
        .should('contain.text','Alerts, Frame & Windows')
        .click({force:true});
    });
    it('Widgets', () => {
        DataCYPage.getWidgetsTab().should('exist')
        .should('be.visible')
        .should('contain.text','Widgets').click({force:true});
    });
    it('Interactions', () => {
        DataCYPage.getInteractionsTab().should('exist')
        .should('be.visible')
        .should('contain.text','Interactions').click({force:true});
    });
    it('Book Store Application', () => {
        DataCYPage.getBookStoreApplicationTab().should('exist')
        .should('be.visible')
        .should('contain.text','Book Store Application').click({force:true});
    });
});
