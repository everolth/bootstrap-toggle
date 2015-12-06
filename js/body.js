import React from 'react';
import Toggle from './bootstrap-toggle.js';
import Example from './example.js';

export default (
  <div>
    <main>
      <div className="container">
        <h2>Getting Started</h2>
        <hr/>
        <h3>Installation</h3>
        <p>npm install bootstrap-toggle</p>
        <p><span className="label label-warning">Warning</span> Bootstrap v2.3.2, not supported</p>
      </div>
      <div id="usage" className="container">
        <h2>Usage</h2>
        <hr/>

        <h3>Basic example</h3>
        <p>Simply add <code>{'<Toggle/>'}</code> create a toggle.</p>
        <div className="example">
          <Toggle/>
        </div>

        <h3>Stacked checkboxes</h3>
        <p>Refer to Bootstrap <a href="http://getbootstrap.com/css/#forms-controls" target="_blank">Form Controls</a> documentation to create stacked checkboxes. </p>
        <div className="example">
          <div>
            <label>
              <Toggle/>
              <span style={{fontWeight: 'normal'}}> Option one is enabled</span>
            </label>
          </div>
          <div>
            <label>
              <Toggle disabled={true}/>
              <span style={{fontWeight: 'normal'}}> Option two is disabled</span>
            </label>
          </div>
        </div>

        <h3>Inline Checkboxes</h3>
        <p>Refer to Bootstrap <a href="http://getbootstrap.com/css/#forms-controls" target="_blank">Form Controls</a> documentation to create inline checkboxes.</p>
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

        <h3>Options</h3>
        <p>Options can be passed via props/attributes e.g. <code>on="Enabled"</code>.</p>
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
            <td><code>"btn-primary"</code></td>
            <td>
              Style class of the <em>on</em> toggle.
            </td>
          </tr>
          <tr>
            <td>offstyle</td>
            <td>string</td>
            <td><code>"btn-default"</code></td>
            <td>
              Style of the <em>off</em> toggle.
            </td>
          </tr>
          <tr>
            <td>style</td>
            <td>string</td>
            <td></td>
            <td>
              Appends the value to the style attribute of the toggle. This can be used to apply custom styles. Refer to Custom Styles for reference.
            </td>
          </tr>
          <tr>
            <td>additionalClass</td>
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
          <tr>
            <td>checked</td>
            <td>boolean</td>
            <td><em>null</em></td>
            <td>
              decides whether the toggle starts on the On position or the Off position
            </td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td><em>null</em></td>
            <td>
              decides whether the toggle is enabled or disabled (i.e. greyed out)
            </td>
          </tr>
          </tbody>
          </table>
        </div>
        <Example/>
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

