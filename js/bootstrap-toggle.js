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
//import styles from '../css/bootstrap-toggle.css!';
let styles = {
  'toggle': 'toggle',
  'toggle-group': 'toggle-group',
  'off': 'off',
  'toggle-on': 'toggle-on',
  'toggle-off': 'toggle-off',
  'toggle-handle': 'toggle-handle'
};

import classNames from 'classnames';
import _ from 'lodash';
// hack assume jquery available globally on the window object
let $ = window.$;

let getChanged = (oldObj, newObj, ...props) => _.transform(props, 
      (result,prop) => {
        if(oldObj[prop] !== newObj[prop]) {
          result[prop] = newObj[prop]
        }
      }
  ,{});

//NOTE $element is the checkbox $toggle is the containing div
export default React.createClass({

  getDefaultProps: function () {
    return {
      on: 'On',
      off: 'Off',
      onstyle: 'primary',
      offstyle: 'default',
      size: 'normal',
      additionalClass: '',
      styleWrapper: {},
      width: null,
      height: null,
      checked: true,
      disabled: false,
      lineHeight: null
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

  calculateSizing: function () {
    let tgOn = $(this.toggleOn);
    let tgOff =  $(this.toggleOff);
    if (!this.state.width) {
      this.setState({
        width: Math.round(Math.max(tgOn.outerWidth(),
                    tgOff.outerWidth())+
          ($(this.toggleHandle).outerWidth()/2))
      });
    }
    if (!this.state.height) {
      this.setState({
        height: Math.max(tgOn.outerHeight(),
                   tgOff.outerHeight())
      });
    }
    if (this.props.height && !this.state.lineHeight) {
      this.setState({
        lineHeight: this.props.height - (tgOn.outerHeight() - tgOn.height())
      });
    }
  },
  componentDidMount: function () {this.calculateSizing()},
  componentDidUpdate: function () {this.calculateSizing()},
  componentWillReceiveProps: function (nextProps) {
    let state = getChanged(this.props,nextProps,'height','width');
    _.assign(state,getChanged(this.state, nextProps, 'checked'));
    if (!nextProps.height || state.height) {
      state.lineHeight = null;
    }
    this.setState(state);
  },
	render: function () {

    let width = this.props.width || this.state.width;
    let height = this.props.height || this.state.height;
    let lineHeight = this.props.height && this.state.lineHeight;
    let toggle_styles = {};
    let toggle_on_off_styles = {};

    if (width) {
      toggle_styles.width = width;
    }

    if (height) {
      toggle_styles.height = height;
      if (lineHeight) {
        toggle_on_off_styles.lineHeight = `${lineHeight}px`;
      }
    }
    
    let baseObj = {
       btn: true,
      'btn-lg': this.props.size === 'large' ,
      'btn-sm': this.props.size === 'small',
      'btn-xs': this.props.size === 'mini'
    };
    let onOffObj = null;
    if (this.state.checked) {
      onOffObj = {
        [`btn-${this.props.onstyle}`] : true
      }
    } else {
      onOffObj = {
        [`btn-${this.props.offstyle}`] : true
      }
    }
    let wrapperClass = classNames({
      [styles.toggle]: true,
      [this.props.additionalClass]: true,
      [styles.off]: !this.state.checked
    },baseObj,onOffObj);

    let labelOnClass = classNames({
      [`btn-${this.props.onstyle}`]: true,
      [styles['toggle-on']]: width && height
    },baseObj);

    let labelOffClass = classNames({
      [`btn-${this.props.offstyle}`]: true,
      active: true,
      [styles['toggle-off']]: width && height
    },baseObj);

    let spanClass = classNames({
      [styles['toggle-handle']]: true,
      'btn-default': true
    },baseObj);

    let toggle_on_styles = {};
    let toggle_off_styles = {};
    let toggle_handle_styles = {};
    let toggle_group_styles = this.props.groupStyle || {};

    _.assign(toggle_styles,this.props.style);
    _.assign(toggle_on_styles, this.props.onHandleStyle,toggle_on_off_styles);
    _.assign(toggle_off_styles, this.props.offHandleStyle,toggle_on_off_styles);
    _.assign(toggle_handle_styles, this.props.handleStyle);

    return (
       <div className={wrapperClass} 
        disabled={this.props.disabled} onClick={this.handleClick} style={toggle_styles}>
        <div className={styles['toggle-group']} style={toggle_group_styles}>
          <label ref={l => this.toggleOn = l} className={labelOnClass} style={toggle_on_styles}>
            {this.props.on}
          </label>
          <label ref={l => this.toggleOff = l} className={labelOffClass} style={toggle_off_styles}>
            {this.props.off}
          </label>
          <span ref={s => this.toggleHandle = s} className={spanClass} style={toggle_handle_styles}/>
        </div>
      </div>
    );
	}
});

