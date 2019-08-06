import navbarActionTypes from "../../actions/navbarActions/navbarActionTypes";
import { INITIAL_STATE } from './navbarReducer.constant';

const NavbarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case navbarActionTypes.SET_ACTIVE_CARD:
          return {
            ...state,
            activeCard: action.payload
          };

      case navbarActionTypes.TOGGLE_NAVBAR:
          return {
            ...state,
            navbarOpen: !state.navbarOpen,
          };

        default: 
            return { ...state };
    };
};

export default NavbarReducer;
