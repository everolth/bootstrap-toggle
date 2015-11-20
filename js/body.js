import React from 'react';
import Toggle from './bootstrap-toggle.js';

export default React.createClass({
  getInitialState: function () {
    return {
    }
  },
  render : function () {
    return (
      <div>
        <main>
          <div className="container">
            <h2>Getting Started</h2>
            <hr/>
            <h3>Installation</h3>
            <p>You can <a href="https://github.com/minhur/bootstrap-toggle/archive/master.zip">download</a> the latest version of Bootstrap Toggle or use CDN to load the library.</p>
            <p><span className="label label-warning">Warning</span> If you are using Bootstrap v2.3.2, use <code>bootstrap2-toggle.min.js</code> and <code>bootstrap2-toggle.min.css</code> instead.</p>
            <code className="highlight">&lt;link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet"&gt;
      &lt;script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"&gt;&lt;/script&gt;</code>

            <h3>Bower Install</h3>
            <p></p>
            <code className="highlight bash">bower install bootstrap-toggle</code>
          </div>
          <div id="usage" className="container">
            <h2>Usage</h2>
            <hr/>

            <h3>Basic example</h3>
            <p>Simply add <code>data-toggle="toggle"</code> to convert checkboxes into toggles.</p>
            <div className="example">
              <Toggle/>
            </div>

            <h3>Stacked checkboxes</h3>
            <p>Refer to Bootstrap <a href="http://getbootstrap.com/css/#forms-controls" target="_blank">Form Controls</a> documentation to create stacked checkboxes. Simply add <code>data-toggle="toggle"</code> to convert checkboxes into toggles.</p>
            <div className="example">
              <div>
                <label>
                  <Toggle/>
                  <span style={{'font-weight': 'normal'}}> Option one is enabled</span>
                </label>
              </div>
              <div>
                <label>
                  <Toggle disabled={true}/>
                  <span style={{'font-weight': 'normal'}}> Option two is disabled</span>
                </label>
              </div>
            </div>

            <h3>Inline Checkboxes</h3>
            <p>Refer to Bootstrap <a href="http://getbootstrap.com/css/#forms-controls" target="_blank">Form Controls</a> documentation to create inline checkboxes. Simply add <code>data-toggle="toggle"</code> to a convert checkboxes into toggles.</p>
            <div className="example">
              <label className="checkbox-inline">
                <Toggle/> First 
              </label>
              <label className="checkbox-inline">
                <Toggle/> Second 
              </label>
              <label className="checkbox-inline">
                <Toggle/> Third 
              </label>
            </div>
          </div>

          <div id="api" className="container">
            <h2>API</h2>
            <hr/>

            <h3>Initialize by JavaScript</h3>
            <p>Initialize toggles with id <code>toggle-one</code> with a single line of JavaScript.</p>
            <div className="example">
              <Toggle/>
            </div>

            <h3>Options</h3>
            <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-on="Enabled"</code>.</p>
            <div className="example">
              <Toggle on="Enabled" off="Disabled" style={{marginRight: '10px'}}/>
              <Toggle on="Enabled" off="Disabled"/>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-condensed">
              <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>on</td>
                <td>string | html</td>
                <td><code>"On"</code></td>
                <td>Text of the <em>on</em> toggle</td>
              </tr>
              <tr>
                <td>off</td>
                <td>string | html</td>
                <td><code>"Off"</code></td>
                <td>Text of the <em>off</em> toggle</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td><code>"normal"</code></td>
                <td>
                  Size of the toggle. Possible values are:<code>large</code>,<code>normal</code>,<code>small</code>,<code>mini</code><br/>
                  Refer to Bootstrap <a href="http://getbootstrap.com/css/#buttons-sizes" target="_blank">Button Sizes</a> documentation for more information.
                </td>
              </tr>
              <tr>
                <td>onstyle</td>
                <td>string</td>
                <td><code>"primary"</code></td>
                <td>
                  Style of the <em>on</em> toggle.<br/>Possible values are:<code>default</code>,<code>primary</code>,<code>success</code>,<code>info</code>,<code>warning</code>,<code>danger</code><br/>
                  Refer to Bootstrap <a href="http://getbootstrap.com/css/#buttons-options" target="_blank">Button Options</a> documentation for more information.
                </td>
              </tr>
              <tr>
                <td>offstyle</td>
                <td>string</td>
                <td><code>"default"</code></td>
                <td>
                  Style of the <em>off</em> toggle.<br/>Possible values are:<code>default</code>,<code>primary</code>,<code>success</code>,<code>info</code>,<code>warning</code>,<code>danger</code><br/>
                  Refer to Bootstrap <a href="http://getbootstrap.com/css/#buttons-options" target="_blank">Button Options</a> documentation for more information.
                </td>
              </tr>
              <tr>
                <td>style</td>
                <td>string</td>
                <td></td>
                <td>
                  Appends the value to the className attribute of the toggle. This can be used to apply custom styles. Refer to Custom Styles for reference.
                </td>
              </tr>
              <tr>
                <td>width</td>
                <td>integer</td>
                <td><em>null</em></td>
                <td>
                  Sets the width of the toggle. if set to <em>null</em>, width will be calculated.
                </td>
              </tr>
              <tr>
                <td>height</td>
                <td>integer</td>
                <td><em>null</em></td>
                <td>
                  Sets the height of the toggle. if set to <em>null</em>, height will be calculated.
                </td>
              </tr>
              </tbody>
              </table>
            </div>

            <h3>Props</h3>
            <p>Props can be used to control the initial state of a toggle</p>
            <div className="example">
              <Toggle/> 
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
                <td><code>$('#toggle-demo').bootstrapToggle('on')</code></td>
                <td>Sets the toggle to be initialised with 'On' state</td>
                <td><button className="btn btn-default btn-xs" onClick="demo.on('#toggle-demo')">On</button></td>
              </tr>
              <tr>
                <td>off</td>
                <td><code>$('#toggle-demo').bootstrapToggle('off')</code></td>
                <td>Sets the toggle to be initialised with 'Off' state</td>
                <td><button className="btn btn-default btn-xs" onClick="demo.off('#toggle-demo')">Off</button></td>
              </tr>
              <tr>
                <td>enable</td>
                <td><code>$('#toggle-demo').bootstrapToggle('enable')</code></td>
                <td>Enables the toggle</td>
                <td><button className="btn btn-default btn-xs" onClick="demo.enable('#toggle-demo')">Enable</button></td>
              </tr>
              <tr>
                <td>disable</td>
                <td><code>$('#toggle-demo').bootstrapToggle('disable')</code></td>
                <td>Disables the toggle</td>
                <td><button className="btn btn-default btn-xs" onclick="demo.disable('#toggle-demo')">Disable</button></td>
              </tr>
              </tbody>
              </table>
            </div>
          </div>


          <div id="events" className="container">
            <h2>Events</h2>
            <hr/>

            <h3>Event Propagation</h3>
            <p><span className="label label-primary">Note</span> All events are propagated to and from input element to the toggle. </p>
            <p>You should listen to events from the <code>&lt;input type="checkbox"></code> directly rather than look for custom events.</p>
            <div className="example">
              <input id="toggle-event" type="checkbox" data-toggle="toggle"/>
              <div id="console-event"></div>
            </div>

            <h3>API vs Input</h3>
            <p>This also means that using the API or Input to trigger events will work both ways.</p>
            <div className="example">
              <input id="toggle-trigger" type="checkbox" data-toggle="toggle"/>
              <button className="btn btn-success" onclick="toggleOn()">On by API</button>
              <button className="btn btn-danger" onclick="toggleOff()">Off by API</button>
              <button className="btn btn-success" onclick="toggleOnByInput()">On by Input</button>
              <button className="btn btn-danger" onclick="toggleOffByInput()">Off by Input</button>
            </div>
          </div>

          <div id="demos" className="container">
            <h2>Demos</h2>
            <hr/>

            <h3>Sizes</h3>
            <p>Bootstrap toggle is available in different sizes. Refer to Bootstrap <a href="http://getbootstrap.com/css/#buttons-sizes" target="_blank">Button Sizes</a> documentation for more information.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-size="large"/>
              <input type="checkbox" checked data-toggle="toggle" data-size="normal"/>
              <input type="checkbox" checked data-toggle="toggle" data-size="small"/>
              <input type="checkbox" checked data-toggle="toggle" data-size="mini"/>
            </div>
            
            <h3>Custom Sizes</h3>
            <p>Bootstrap toggle can handle custom sizes by <code>data-width</code> and <code>data-height</code> options.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-width="100" data-height="75"/>
              <input type="checkbox" checked data-toggle="toggle" data-height="75"/>
              <input type="checkbox" checked data-toggle="toggle" data-width="100"/>
            </div>

            <h3>Colors</h3>
            <p>Bootstrap Toggle supports various colors. Refer to Bootstrap <a href="http://getbootstrap.com/css/#buttons-options" target="_blank">Button Options</a> documentation for more information.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="primary"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="success"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="info"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="warning"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="danger"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="default"/>
            </div>

            <h3>Colors Mix</h3>
            <p>You can style on state as well as the off state.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger"/>
              <input type="checkbox" checked data-toggle="toggle" data-onstyle="warning" data-offstyle="info"/>
            </div>

            <h3>Custom Style</h3>
            <p>Customized styles can be applied as easily.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-style="ios"/>
              <input type="checkbox" checked data-toggle="toggle" data-style="android" data-onstyle="info"/>
            </div>

            <h3>Custom Text</h3>
            <p>The text can be changed easily with attributes or options.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-on="Ready" data-off="Not Ready" data-onstyle="success" data-offstyle="danger"/>
            </div>

            <h3>Icons/Html Text</h3>
            <p>You can easily add icons or images since html is supported for on/off text.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-on="<i className='fa fa-play'></i> Play" data-off="<i className='fa fa-pause'></i> Pause"/>
            </div>

            <h3>Multiple Lines of Text</h3>
            <p>Toggles with multiple lines will adjust its heights.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-on="Hello<br/>World" data-off="Goodbye<br/>World"/>
            </div>

            <h3>Animation Speed</h3>
            <p>Transition speed can be easily controlled with css <code>transition</code> property on <code>.toggle-group</code>. You can also turn animation off completely.</p>
            <div className="example">
              <input type="checkbox" checked data-toggle="toggle" data-style="slow"/>
              <input type="checkbox" checked data-toggle="toggle" data-class="fast"/>
              <input type="checkbox" checked data-toggle="toggle" data-style="quick"/>
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>
              <img className="nyt-logo" src="doc/nyt.png"/>
              <img className="nyt-logo" src="doc/nytdev.svg"/>
            </p>
            <p>Designed and built by <a href="https://github.com/minhur" target="_blank">Min Hur</a> for <a href="http://developers.nytimes.com" target="_blank">The New York Times Company</a></p>
            <p>Latest Version: 2.2.0 | Code licensed under MIT</p>
            <p>
              <iframe src="https://mdo.github.io/github-buttons/github-btn.html?user=minhur&repo=bootstrap-toggle&type=watch&count=true" allowTransparency="true" frameBorder="0" scrolling="0" width="110" height="20"></iframe>
              <iframe src="https://mdo.github.io/github-buttons/github-btn.html?user=minhur&repo=bootstrap-toggle&type=fork&count=true" allowTransparency="true" frameBorder="0" scrolling="0" width="95" height="20"></iframe>
            </p>
          </div>
        </footer>
      </div>
    );
  }
});

