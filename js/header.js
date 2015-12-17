import React from 'react';

export default (
  <header>
		<nav className="navbar navbar-default container" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Bootstrap Toggle</a>
				</div>
				<div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#usage">Usage</a></li>
						<li><a href="#api">API</a></li>
						<li><a href="#events">Events</a></li>
						<li><a href="#demos">Demos</a></li>
						<li><a href="https://github.com/everolth/bootstrap-toggle-react/pulls">Issues</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div className="mast-head">
			<div className="container">
				<h1>Bootstrap Toggle</h1>
				<p>Bootstrap Toggle is a highly flexible Bootstrap plugin that converts checkboxes into toggles</p>
			</div>
		</div>
	</header>
);
