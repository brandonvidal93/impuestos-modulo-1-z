import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Slides.scss';

library.add(fas, fab, far);

class Slides extends Component {
  state = {
    page: 1
  }

  mSlides = e => {
    const { dataPage } = this.props;
    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        page: this.state.page - 1
      });
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        page: this.state.page + 1
      });

      // console.log(this.state.page);

      if (this.state.page === dataPage.length - 1) {
        this.props.isEnded(true);
      }
    }
  }

  render() {
    // console.log(this.props.dataPage[this.state.page - 1] );
    // console.log(this.state.page);
    const { dataPage } = this.props;
    return (
      <div className = 'slides dF-C-es'>
        {
          dataPage.map((item, i) =>
          <div className = { 'itemInfo animated fadeIn ' + (item.id !== this.state.page ? 'dNone' : '') } key = { item.id } id = { item.id } >
            <p>
              { item.text }
            </p>
          </div>

          )
        }

        <div className = 'buttons mT-1 dF-R-cc'>
          <button className = { 'buttonSlide mR-05 ' + (this.state.page === 1 ? 'disabled' : 'pulse-2') } id = 'btnAnt' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-left" size = 'lg' />
          </button>
          <button className = { 'buttonSlide mL-05 ' + (this.state.page === dataPage.length ? 'disabled' : 'pulse-2') } id = 'btnSig' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-right" size = 'lg' />
          </button>
        </div>
      </div>
    );
  }
}

export default Slides;
