/*! ========================================================================
 * Bootstrap Toggle: bootstrap2-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */

//TODO
//workout copyright and author and licence
//click handler
//publishing npm
//getting this as a global import

import React from 'react';
import styles from '../css/bootstrap-toggle.css!';

//NOTE $element is the checkbox $toggle is the containing div
export default React.createClass({

  getDefaultProps: function () {
    return {
      on: 'On',
      off: 'Off',
      onstyle: 'primary',
      offstyle: 'default',
      size: 'normal',
      style: '',
      width: null,
      height: null
    }
  },

  handleClick: function (...args) {
    this.setState({
      checked: !this.state.checked
    });
    if (this.props.handler) {
      this.props.handler(...args);
    }
  },

  getInitialState: function () {
    return {
      checked: this.props.checked
    }
  },

	render: function () {

    let size = this.props.size === 'large' ? 'btn-lg'
      : this.props.size === 'small' ? 'btn-sm'
      : this.props.size === 'mini' ? 'btn-xs'
      : '';

    let wrapper_stype = this.state.checked ? 
      `btn-${this.props.onstyle}` : `btn-${this.props.offstyle} ${styles.off}`;

    let width = this.props.width || null;
    //TODO how do I get around the fact that I want to know the width of parts of the component
    //Math.max($toggleOn.width(), $toggleOff.width())+($toggleHandle.outerWidth()/2);
    let height = this.props.height || null;
    //TODO how I get around the fact that I want to know the height of parts of the component
    //Math.max($toggleOn.height(), $toggleOff.height())
    //
    let toggle_styles = {};
    let toggle_on_off_styles = {};

    if (width) {
      toggle_styles.width = width;
    }
    //TODO $toggleOn.height() && $toggleOff.height() were used to do this for on/off
    if (height) {
      toggle_styles.height = height;
      toggle_on_off_styles['line-height'] = `${height} px`;
    }

    return (
      <div className={`${styles.toggle} btn ${size} ${wrapper_stype} ${this.props.style}`} 
        data-toggle="toggle" disabled={this.props.disabled} onClick={this.handleClick} style={toggle_styles}>
        <input type="checkbox" checked={this.state.checked} data-toggle="toggle" disabled={this.props.disabled}/>
        <div className={`${styles['toggle-group']}`}>
          <label className={`btn btn-${this.props.onstyle} ${size} ${styles['toggle-on']}`} style={toggle_on_off_styles}>
            {this.props.on}
          </label>
          <label className={`btn btn-${this.props.offstyle} ${size} active ${styles['toggle-off']}`}>
            {this.props.off}
          </label>
          <span className={`${styles['toggle-handle']} btn btn-default ${size}`}/>
        </div>
      </div>
    );
	}
});

