import React,{ Component } from 'react';
import ClassNames from 'classnames';
import '../../styles/components/card/card.scss';
import { chevronRight } from '../../assets/images/'
class Card extends Component{


  getImageStyle = (image) =>({
      background: `url(${image}) no-repeat`,
      backgroundSize : '100%',
      backgroundColor : '#fff'
    });

  getCard = (device, image, location, id) =>{
    const isSelected = this.props.isActive === id;

    return (
        <div className={ClassNames('funui-card', { 'funui-card-active': isSelected })}>
            <div className={ClassNames('funui-card-image', { 'funui-card-image-active': isSelected })} style={this.getImageStyle(image)}>
                <div className={ClassNames('funui-card-image-icon', { 'funui-card-image-icon-active': isSelected })} >
                    <img className='funui-card-image-icon-image' src={chevronRight}/>
                </div>
            </div>
            <div className={ClassNames('funui-card-content-info', { 'funui-card-content-info-active': isSelected })}>
                <div className={ClassNames('funui-card-content-header', { 'funui-card-content-header-active': isSelected })}>
                    {device}
                </div>
                <div className={ClassNames('funui-card-content-description', { 'funui-card-content-description-active': isSelected })}>
                    <div className='funui-card-content-description-in'>
                        in
                    </div>
                    <div className='funui-card-content-description-value'>
                        {location}
                    </div>
                </div>
            </div>
        </div>
    );
  };

  render(){
    const { device, id, image, location } = this.props.card;

    return (
        <div onClick={() => this.props.onClickHandler(id)}>
            {this.getCard(device, image, location, id)}
        </ div>
    );
  }
}

export default Card;