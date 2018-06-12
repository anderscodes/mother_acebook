import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
// import LogicWrapper from "./wrapper/logicWrapper";
import Home from "./home";


const config = {
  issuer: 'https://dev-509050.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{clientId}'
}


class App extends React.Component {

  render() {
    return (
    <Router>
      <Security issuer={config.issuer}
                client_id={config.client_id}
                redirect_uri={config.redirect_uri}
      >
        <Route path='/' exact={true} component={Home} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </Security>
    </Router>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

export default App