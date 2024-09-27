class CreateRoom {
  private roomNo = () => cy.get('input#roomName');
  private roomType = () => cy.get('select#type');
  private accessible = () => cy.get('select#accessible');
  private roomPrice = () => cy.get('input#roomPrice');
  private wifi = () => cy.get('input#wifiCheckbox');
  private tv = () => cy.get('input#tvCheckbox');
  private safe = () => cy.get('input#safeCheckbox');
  private createButton = () => cy.contains('button', this.selectors.createButton);
  private errorMessage = () => cy.get('.alert.alert-danger');

  constructor(private selectors: any) {}

  async createRoom() {
    this.createButton().click(); // Negative Test
    this.errorMessage().should('be.visible').and('contain.text', 'Error Message'); // Negative Test
    this.roomNo().type('106');
    this.roomType().select('Family');
    this.accessible().select('true');
    this.roomPrice().type('700');
    this.wifi().click();
    this.tv().click();
    this.safe().click();
    this.createButton().click();
  }

  async validateRoom() {
    cy.get('p[id^="roomName"]').each((element) => {
      cy.wrap(element).invoke('text').then((text) => {
        if (text.includes('106')) {
          cy.log('Found room with name 106');
        } else {
          cy.log('Room name does not contain 106');
        }
      });
    });
  }
}

export default CreateRoom;
