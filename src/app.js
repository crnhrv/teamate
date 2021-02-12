import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createElement } from 'react';

import { GlobalStyle } from './global_style';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        {Object.values(ROUTES).map((route) => {
          return (
            <Route key={route.path + route.title} exact path={route.path}>
              {createElement(route.component)}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
