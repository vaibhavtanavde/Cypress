class DeleteRoom {
    private roomListings = () => cy.get('div[data-testid="roomlisting"]');
  
    async deleteRoom() {
      this.roomListings().each(($el, index, $list) => {
        cy.wrap($el).find('p[id^="roomName"]').invoke('text').then((roomName) => {
          if (roomName.includes('107')) {
            cy.wrap($el).find('span.fa.fa-remove.roomDelete').click();
            cy.log('Room deleted successfully');
          }
        });
      });
    }
  
    async validateDeleteRoom() {
      this.roomListings().each(($el) => {
        cy.wrap($el).find('p[id^="roomName"]').invoke('text').should('not.contain', '107');
      });
    }
  }
  
  export default DeleteRoom;
  