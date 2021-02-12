import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global_style';
import { ROUTES } from './constants/routes';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.BROWSE}></Route>
        <Route path={ROUTES.CART}></Route>
        <Route path={ROUTES.ABOUT}></Route>
        <Route path={ROUTES.CONTACT}></Route>
      </Switch>
    </Router>
  );
}

export default App;
