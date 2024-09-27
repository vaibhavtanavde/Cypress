class UpdateRoom {
    private roomDetails = () => cy.get('p[id^="roomName"]');
    private editButton = () => cy.contains('button', this.selectors.editButton);
    private roomNo = () => cy.get('input#roomName');
    private roomType = () => cy.get('select#type');
    private roomPrice = () => cy.get('input#roomPrice');
    private refreshments = () => cy.get('input#refreshCheckbox');
    private description = () => cy.get('textarea#description');
    private updateButton = () => cy.contains('button', this.selectors.updateButton);
    private roomsButton = () => cy.contains('a', this.selectors.roomsButton);
    private errorMessage = () => cy.get('.alert.alert-danger');
  
    constructor(private selectors: any) {}
  
    async updateRoom() {
      this.roomDetails().each((element) => {
        cy.wrap(element).invoke('text').then((text) => {
          if (text.includes('106')) {
            cy.wrap(element).click();
          }
        });
      });
      this.editButton().click();
      this.roomNo().clear(); // Negative Test
      this.roomPrice().clear(); // Negative Test
      this.updateButton().click(); // Negative Test
      this.errorMessage().should('be.visible').and('contain.text', 'Error Message'); // Negative Test
      this.roomNo().type('107');
      this.roomType().select('Single');
      this.roomPrice().type('800');
      this.refreshments().click();
      this.description().type('Test for Myra');
      this.updateButton().click();
      this.roomsButton().click();
    }
  
    async validateUpdateRoom() {
      this.roomDetails().each((element) => {
        cy.wrap(element).invoke('text').then((text) => {
          if (text.includes('107')) {
            cy.log('Found room with name 107');
          }
        });
      });
    }
  }
  
  export default UpdateRoom;
  