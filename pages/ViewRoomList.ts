class ViewRoomList {
  async validateRoomList() {
    cy.get('p[id^="roomName"]').each((roomNameElement, index) => {
      // Ensure index is a number before using it
      if (typeof index === 'number') {
        cy.get('p[id^="type"]').eq(index).then((roomTypeElement) => {
          cy.get('p[id^="roomPrice"]').eq(index).then((roomPriceElement) => {
            const roomName = roomNameElement.text();
            const roomType = roomTypeElement.text();
            const roomPrice = roomPriceElement.text();
            cy.log(`Room No: ${roomName}, Type: ${roomType}, Price: ${roomPrice}`);
          });
        });
      }
    });
  }
}

export default ViewRoomList;
