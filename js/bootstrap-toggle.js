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
import classNames from 'classnames/bind';
import _ from 'lodash';

let cx = classNames.bind(styles);

let calculateSizing = function () {
  if (!this.state.height) {
    this.setState({
      width: Math.round(Math.max(this.refs.toggleOn.getBoundingClientRect().width,
                  this.refs.toggleOff.getBoundingClientRect().width)+
        (this.refs.toggleHandle.offsetWidth/2))
    });
  }
  if (!this.state.width) {
    this.setState({
      height: Math.max(this.refs.toggleOn.getBoundingClientRect().height,
                 this.refs.toggleOff.getBoundingClientRect().height)
    });
  }
};

//NOTE $element is the checkbox $toggle is the containing div
export default React.createClass({

  getDefaultProps: function () {
    return {
      on: 'On',
      off: 'Off',
      onstyle: 'btn-primary',
      offstyle: 'btn-default',
      size: 'normal',
      class: '',
      style: {},
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
      checked: this.props.checked,
      height: this.props.height,
      width: this.props.width
    }
  },

  componentDidMount: calculateSizing,
  componentDidUpdate: calculateSizing,
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.on !== this.props.on || nextProps.off !== this.props.off) {
      this.setState({
        width: null,
        height: null
      });
    }
  },
	render: function () {

    let width = this.state.width;
    let height = this.state.height;
    let toggle_styles = {};
    let toggle_on_off_styles = {};

    if (width) {
      toggle_styles.width = width;
    }

    if (height) {
      toggle_styles.height = height;
      toggle_on_off_styles['line-height'] = `${height} px`;
    }
    
    let baseObj = {
       btn: true,
      'btn-lg': this.props.size === 'large' ,
      'btn-sm': this.props.size === 'small',
      'btn-xs': this.props.size === 'mini'
    };
    let wrapperClass = cx({
      toggle: true,
      [this.props.onstyle] : this.state.checked,
      [this.props.offstyle] : !this.state.checked,
      [this.props.class]: true,
      off: !this.state.checked
    },baseObj);

    let labelOnClass = cx({
      [this.props.onstyle]: true,
      'toggle-on': true
    },baseObj);

    let labelOffClass = cx({
      [this.props.offstyle]: true,
      active: true,
      'toggle-off': true
    },baseObj);

    let spanClass = cx({
      'toggle-handle': true,
      'btn-default': true
    },baseObj);

    _.assign(toggle_styles,this.props.style);

    return (
       <div className={wrapperClass} 
        data-toggle="toggle" disabled={this.props.disabled} onClick={this.handleClick} style={toggle_styles}>
        <div className={styles['toggle-group']}>
          <label ref='toggleOn' className={labelOnClass} style={toggle_on_off_styles}>
            {this.props.on}
          </label>
          <label ref='toggleOff' className={labelOffClass}>
            {this.props.off}
          </label>
          <span ref='toggleHandle' className={spanClass}/>
        </div>
      </div>
    );
	}
});

