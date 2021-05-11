import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Header.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Header extends Component {
  state = {
    actualUnit: this.props.unitActual,
    nextUnit: this.props.nextUnit,
    menuPosition: this.props.menuPosition
  }
  // FUNCION PARA IR AL MENU PPAL
  goToMenu = e => {
    const { actualIndex, DataCourse, updateNextUnit, checkEndUnit, checkEnabledUnit } = this.props;

    const { goToPage } = this.props;

    goToPage(2);

    switch (actualIndex) {
      case 5:
        updateNextUnit(2, DataCourse.page2.Units[1].position);
        checkEndUnit(0);
        checkEnabledUnit(1);
        break;

      case 10:
        updateNextUnit(3, DataCourse.page2.Units[2].position);
        checkEndUnit(1);
        checkEnabledUnit(2);
        break;

      case 15:
        updateNextUnit(4, DataCourse.page2.Units[3].position);
        checkEndUnit(2);
        checkEnabledUnit(3);
        break;

      case 19:
        checkEndUnit(3);
        // checkEnabledUnit(4);
        break;

      default:
        if (actualIndex < 5) {
          updateNextUnit(1, DataCourse.page2.Units[0].position);
        } else if (actualIndex > 5 && actualIndex < 10) {
          updateNextUnit(2, DataCourse.page2.Units[1].position);
        } else if (actualIndex > 10 && actualIndex < 15) {
          updateNextUnit(3, DataCourse.page2.Units[2].position);
        } else if (actualIndex > 15 && actualIndex < 19) {
          updateNextUnit(4, DataCourse.page2.Units[3].position);
        }
        break;

    }
  }

  setActualUnit = () => {
    this.setState({actualUnit: this.props.unitActual})
  }

  // SHOW BUTTON HEADER
  showHeader = () => {
    const { actualIndex, limitNavigation } = this.props;
    // console.log(lastPage);
    if (actualIndex !== 0 && actualIndex !== 1 && actualIndex !== 2 && actualIndex !== limitNavigation) {
      return (
        <button
          className = { 'buttonMenu ' + (actualIndex === 5 || actualIndex === 10 || actualIndex === 15 ? 'pulse btnInLastPage' : '') }
          id = 'btnMenu'
          onClick = { this.goToMenu } >
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'bars'] }
            size = '2x' />
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className = 'header animated fadeIn'>
        { this.showHeader() }
      </div>
    );
  }
}

export default Header;

// className = { 'buttonMenu ' + (lastPage === true ? 'signal': '')}
