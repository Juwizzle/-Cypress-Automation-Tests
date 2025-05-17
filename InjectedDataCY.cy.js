Cypress.Commands.add('injectMultipleDataCY',(TabElements)=>{
  TabElements.forEach(({selector,text,dataCy})=>{
    cy.contains(selector,text,{timeout:5000}) // Up to 5s wait
    .should('exist')
    .invoke('attr','data-cy',dataCy);
  });
});
