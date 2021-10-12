class CareersPage {

 waitPageLoading(){
  cy.contains("button","See open positions").should("be.visible");
  return this;
 }

 validateAmountOfOpenings(jobTitle, numberOfOpening){
  cy.contains("a",jobTitle).should('have.length', numberOfOpening);
  return this;
 }

 validateFilterResults(filterValue){
  cy.get("div.job-offers__wrapper").find('a[href*="/careers/"]').each(($ele, i) => {
   expect($ele).to.contains.text(filterValue)
  })

  return this;
 }

 typeInFilterInput(filterValue){
  cy.get("#search-job").type(filterValue);

  return this;
 }
}

export default CareersPage
