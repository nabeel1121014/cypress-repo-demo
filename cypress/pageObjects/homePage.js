class HomePage {

   visit() {
      cy.visit('/');

      return this;
   }

   waitPageLoading(){
      cy.get('a[href="https://10clouds.com/contact-us/"]').should("be.visible");
      return this;
   }

   clickCareersLink(){
      cy.get('nav.navigation').find('a[href="/careers/"]:visible').click();
      return this;
   }
}

export default HomePage
