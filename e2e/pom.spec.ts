import CreateRoom from '../pages/CreateRoom';
import DeleteRoom from '../pages/DeleteRoom';
import LoginPage from '../pages/LoginPage';
import UpdateRoom from '../pages/UpdateRoom';
import ViewRoomList from '../pages/ViewRoomList';
import LogoutPage from '../pages/LogoutPage';

const loadLanguageSelectors = require('../locales/loadLanguageSelectors');
let selectors: any;

describe('Room Management Tests', () => {
  before(() => {

  });

  beforeEach(() => {
    const loginPage = new LoginPage(selectors);
    loginPage.visit();
    loginPage.login('admin', 'password');
    cy.wait(3000);
  });

  it('Create a Room and Validate it', () => {
    const room = new CreateRoom(selectors);
    room.createRoom();
    cy.wait(3000);
    room.validateRoom();
    cy.wait(3000);
  });

  it('Update a Room and Validate it', () => {
    const update = new UpdateRoom(selectors);
    update.updateRoom();
    cy.wait(3000);
    update.validateUpdateRoom();
    cy.wait(3000);
  });

  it('Room List Validation', () => {
    const roomList = new ViewRoomList();
    cy.wait(3000);
    roomList.validateRoomList();
    cy.wait(3000);
  });

  it('Delete a Room and Validate it', () => {
    const del = new DeleteRoom();
    del.deleteRoom();
    cy.wait(3000);
    del.validateDeleteRoom();
    cy.wait(3000);
  });

  it('Logout Test', () => {
    const logout = new LogoutPage(selectors);
    cy.wait(3000);
    logout.logout();
    cy.wait(3000);
  });
});
