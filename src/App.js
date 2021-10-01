import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <ProtectedRoute path="/not-found" component={NotFound} />
    <Route to="/not-found" />
  </Switch>
)

export default App
