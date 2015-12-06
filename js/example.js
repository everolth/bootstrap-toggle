import Toggle from './bootstrap-toggle.js';
import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      disabled: false,
      checked: true
    }
  },
  render : function () {
    return (
      <div>
        <h3>Props</h3>
        <p>Props can be used to control the initial state of a toggle</p>
        <div className="example">
          <Toggle checked={this.state.checked} disabled={this.state.disabled}/>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-condensed">
          <thead>
          <tr>
            <th>Prop</th>
            <th>Example</th>
            <th>Description</th>
            <th>Demo</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>on</td>
            <td><code>checked=true</code></td>
            <td>Sets the toggle to be initialised with 'On' state</td>
            <td><button className="btn btn-default btn-xs" onClick={() => {this.setState({checked: true})}}>On</button></td>
          </tr>
          <tr>
            <td>off</td>
            <td><code>checked=false</code></td>
            <td>Sets the toggle to be initialised with 'Off' state</td>
            <td><button className="btn btn-default btn-xs" onClick={() => this.setState({checked: false})}>Off</button></td>
          </tr>
          <tr>
            <td>enable</td>
            <td><code>disabled=false</code></td>
            <td>Enables the toggle</td>
            <td><button className="btn btn-default btn-xs" onClick={() => this.setState({disabled: false})}>Enable</button></td>
          </tr>
          <tr>
            <td>disable</td>
            <td><code>disabled=true</code></td>
            <td>Disables the toggle</td>
            <td><button className="btn btn-default btn-xs" onClick={() => this.setState({disabled: true})}>Disable</button></td>
          </tr>
          </tbody>
          </table>
        </div>
      </div>
    );
  }
});
