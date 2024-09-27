class LogoutPage {
    private logoutButton = () => cy.contains('a', this.selectors.logoutButton);
  
    constructor(private selectors: any) {}
  
    async logout() {
      this.logoutButton().click();
    }
  }
  
  export default LogoutPage;
  