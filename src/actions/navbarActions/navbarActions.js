import navbarActionTypes from './navbarActionTypes';

const navbarActions = {
  cardClicked : payload => ({ type: navbarActionTypes.SET_ACTIVE_CARD, payload }),
  toggleNavbar : () => ({ type: navbarActionTypes.TOGGLE_NAVBAR }),
};

export default navbarActions;
