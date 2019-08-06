import React  from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../components/Toolbar/Toolbar';
import Controller from '../../components/Controller/Controller'
import { connect } from 'react-redux';
import navbarActions from '../../actions/navbarActions/navbarActions';


LandingPage.propTypes = {
  navbar: PropTypes.shape({
    activeCard: PropTypes.number,
    cards: PropTypes.shape([]),
    navbarOpen: PropTypes.bool,
  }).isRequired,
};


function LandingPage(props) {

    const { activeCard, cards, navbarOpen} = props.navbar;

    return(
        <div className='lnf-landingpage-container'>
            <div className='lnf-landingpage-container-body'>
                <Toolbar
                  cards={cards}
                  activeCard={activeCard}
                  navbarOpen={navbarOpen}
                  toggleNavbar={props.toggleNavbar}
                  cardClickHandler={props.onClickHandler}
                />
                <Controller navbarOpen={navbarOpen} />
            </div>
        </div>
    );
  }


const mapStateToProps = state =>({
  navbar : state.NavbarReducer,
})

const mapDispatchToProps = dispatch => ({
  onClickHandler: (id) => dispatch(navbarActions.cardClicked(id)),
  toggleNavbar: () => dispatch(navbarActions.toggleNavbar())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

