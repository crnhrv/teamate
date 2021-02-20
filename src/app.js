import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createElement } from 'react';
import { GlobalStyle } from './global_style';
import { HEADER_ROUTES, PRODUCT_ROUTE } from './constants/routes';
import { CartContext } from './contexts/cart_context';
import { useCart } from './hooks/use_cart';

function App() {
  const {
    addToCart,
    removeFromCart,
    cartItems,
    checkingOut,
    checkOut,
  } = useCart();

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, checkingOut, checkOut }}
    >
      <Router>
        <GlobalStyle />

        <Switch>
          {Object.values(HEADER_ROUTES).map((route) => {
            return (
              <Route key={route.path + route.title} exact path={route.path}>
                {createElement(route.component)}
              </Route>
            );
          })}
          <Route path={PRODUCT_ROUTE.path}>
            {createElement(PRODUCT_ROUTE.component)}
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
