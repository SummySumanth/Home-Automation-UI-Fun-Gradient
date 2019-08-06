import React,{ Component } from 'react';
import Card from '../Card/Card';
import '../../styles/components/toolbar/toolbar.scss';
import { backWhite } from '../../assets/images/'

import ClassNames from 'classnames';


class Toolbar extends Component{

    onClickHandler = (id) => {
        const { cardClickHandler } = this.props;
        cardClickHandler(id);
    }
    

    render(){
        const { cards, activeCard, navbarOpen} = this.props;
        return(
            <div className={ClassNames('funui-sidebar-container', { 'funui-sidebar-container-open': navbarOpen })}>
                <div className='funui-sidebar-top-upper-layer'>
                  <img 
                    onClick={() => this.props.toggleNavbar()} 
                    className={ClassNames({ 'funui-sidebar-toggle-btn-open':navbarOpen } , { 'funui-sidebar-toggle-btn-close': !navbarOpen })} 
                    src={backWhite}
                  />
                </div>
                <div className='funui-sidebar-top-lower-layer'></div>
                
                <div className={ClassNames('funui-sidebar-bottom-layer', { 'funui-sidebar-bottom-layer-hide': navbarOpen })} >
                {
                    cards.map(item => (
                        <Card 
                            key={item.id} 
                            card={item} 
                            isActive={activeCard} 
                            onClickHandler={this.onClickHandler}
                        />
                    ))
                }
                </div>
                
            </div>
        );
    }
};

export default Toolbar;

