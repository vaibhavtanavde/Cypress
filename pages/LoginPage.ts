class LoginPage {
    private usernameInput = () => cy.get(`input[placeholder="${this.selectors.username}"]`);
    private passwordInput = () => cy.get(`input[placeholder="${this.selectors.password}"]`);
    private loginButton = () => cy.contains('button', this.selectors.login);
  
    constructor(private selectors: any) {}
  
    async visit() {
      cy.visit('https://automationintesting.online/#/admin');
    }
  
    async login(username: string, password: string) {
      this.usernameInput().type(username);
      this.passwordInput().type(password);
      this.loginButton().click();
    }
  }
  
  export default LoginPage;
  