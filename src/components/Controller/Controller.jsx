import React,{ Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/components/controller/controller.scss'

import { tick, plus, morning,night ,day } from '../../assets/images/'

import ClassNames from 'classnames';

class Controller extends Component{

  state = {
    shades : [ // constant file
      {
        id: 1,
        color: '#ed4161',
      },
      {
        id: 2,
        color: '#8246e6',
      },
      {
        id: 3,
        color: '#4fc0e0',
      },
      {
        id: 4,
        color: '#2889eb',
      },
      {
        id: 5,
        color: '#c791cd',
      }
    ],
    selectedShade : 1,
    mainSwitch: true,
    currentMode: 'MORNING'
  }

  componentDidMount() {
    window.$("#slider").roundSlider({ 
      sliderType: "min-range", 
      handleShape: "round", 
      radius: 100, 
      value: 45, 
      circleShape: "half-top", 
      lineCap: "round", 
      width: 3,
      handleSize: "+18" ,
      editableTooltip: false
    });
  }

  setCurrentSelectedShade = (id) => {
    this.setState({
      selectedShade : id,
    });
  }

  toggleMainSwitch = () => {
    const { mainSwitch } = this.state;

    this.setState({
      mainSwitch : !mainSwitch,
    });
  }

  setCurrentMode = mode => {
    this.setState({
      currentMode: mode
    })
  };

  getShades = () => this.state.shades.map(item =>(
        <div key={item.id}
          className={
            ClassNames('funui-controller-shade-selector-button', { 'funui-controller-shade-selector-button-active': this.state.selectedShade === item.id })
          }
          style={
            {background : item.color}
          }
          onClick={()=> this.setCurrentSelectedShade(item.id)}
        >
          <img className={ClassNames('funui-controller-shade-selector-btn-icon', { 'funui-controller-shade-selector-btn-icon-active': this.state.selectedShade === item.id })} src={tick}/>
        </div>
      )
  );


  getModes = () => (
      <React.Fragment >

        <div onClick={() => this.setCurrentMode('MORNING')} className={ClassNames('funui-controller-mode-button', { 'funui-controller-mode-button-active': (this.state.currentMode === 'MORNING') })} >

          <div className={'funui-controller-mode-TOD'} >
            <img className={ClassNames('funui-controller-mode-TOD-img', { 'funui-controller-mode-TOD-img-active': (this.state.currentMode === 'MORNING') })}  src={morning}/>
            <div >Morning</div>
          </div>
          <div className={ClassNames('funui-controler-mode-percent-visiblity',{'funui-controler-mode-percent': !(this.state.currentMode === 'MORNING')})}>50%</div>
          <div>
            <img className={ClassNames({'funui-controler-mode-tick': !(this.state.currentMode === 'MORNING')})} src={tick}/>
          </div>
        </div>

        <div onClick={() => this.setCurrentMode('DAY')} className={ClassNames('funui-controller-mode-button', { 'funui-controller-mode-button-active': (this.state.currentMode === 'DAY') })}>
          <div className={'funui-controller-mode-TOD'}>
            <img className={ClassNames('funui-controller-mode-TOD-img', { 'funui-controller-mode-TOD-img-active': (this.state.currentMode === 'DAY') })} src={day}/>
            <div >Day</div>
          </div>
          <div className={ClassNames('funui-controler-mode-percent-visiblity',{'funui-controler-mode-percent': !(this.state.currentMode === 'DAY')})}>30%</div>
          <div>
            <img className={ClassNames({'funui-controler-mode-tick': !(this.state.currentMode === 'DAY')})} src={tick}/>
          </div>
        </div>

        <div onClick={() => this.setCurrentMode('NIGHT')} className={ClassNames('funui-controller-mode-button', { 'funui-controller-mode-button-active': (this.state.currentMode === 'NIGHT') })}>
          <div className={'funui-controller-mode-TOD'}>
            <img className={ClassNames('funui-controller-mode-TOD-img', { 'funui-controller-mode-TOD-img-active': (this.state.currentMode === 'NIGHT') })} src={night}/>
            <div >Night</div>
          </div>

          <div className={ClassNames('funui-controler-mode-percent-visiblity',{'funui-controler-mode-percent': !(this.state.currentMode === 'NIGHT')})}>100%</div>
          <div>
            <img className={ClassNames({'funui-controler-mode-tick': !(this.state.currentMode === 'NIGHT')})} src={tick}/>
          </div>
        </div>

      </React.Fragment>
  );

  getIntensityScroller = () => {
    return(
      <div>
        <div id="slider" ref="slider"></div>
      </div>
    );
  };

  getMainSwitch () {
    return(
      <div className={'funui-controller-main-switch'}>
        <div className={'funui-controller-switch-text'}>
          BED LAMP
        </div>
        <label className="funui-controller-main-switch-togglebtn">
          <input type="checkbox" onChange={this.toggleMainSwitch} defaultChecked={true}/>
          <span className="slider round"></span>
        </label>
      </div>
    )
  }

  render(){
    return(
      <div className={ClassNames('funui-controller-main-container', { 'funui-controller-main-container-expanded': this.props.navbarOpen })}>

        <div className={'funui-controller-title'}>
          <div className={'funui-controller-title-text'}>
            DEVICES
          </div>
            <div className={'funui-controller-title-plus-btn'}>
              <img className={'funui-controller-title-plus-btn-img'} src={plus}/>
            </div>
        </div>

        {this.getMainSwitch()}


        <div className={ClassNames('funui-controllers-container', { 'funui-controllers-container-active': this.state.mainSwitch })} >

          <div className={'funui-controller-wrapper'}>
            <div className={'funui-controller-header-container'}>
              <div className={'funui-controller-header'}>
                SHADES
              </div>
              <div className={'funui-controller-header-line'}></div>
            </div>
            <div className={'funui-controller-shade-selector-buttons-container'}>
              {this.getShades()}
            </div>
          </div>

          <div className={'funui-controller-wrapper'}>
            <div className={'funui-controller-header-container'}>
              <div className={'funui-controller-header'}>
                MODE
              </div>
              <div className={'funui-controller-header-line'}></div>
            </div>
            <div className={'funui-controller-mode-selector-buttons-container'}>
              {this.getModes()}
            </div>
          </div>

          <div className={'funui-controller-wrapper'}>
            <div className={'funui-controller-header-container'}>
              <div className={'funui-controller-header'}>
                INTENSITY
              </div>
              <div className={'funui-controller-header-line'}></div>
            </div>
            <div className={'funui-controller-shade-selector-buttons-container'}>
              {this.getIntensityScroller()}
            </div>
          </div>

        </div>
      </div>);
  }
}


export default Controller;

