import React, { lazy, Suspense } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './globals/Footer/Footer';
import Navbar from './globals/navbar/mainNav';
import Spinner from './globals/Spinner/Spinner';
import BackToTop from './components/BackToTop';

const Dashboard = lazy(() => import('./pages/user/Dashboard'));
const Homepage = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./components/auth/Login'));
const PremierBook = lazy(() => import('./pages/publish/PremierBook'));
const Product = lazy(() => import('./pages/product/Product'));
const Products = lazy(() => import('./pages/product/Products'));
const Publish = lazy(() => import('./pages/publish/HomePage'));
const PublishBook = lazy(() => import('./pages/user/PublishBook'));
const Read = lazy(() => import('./pages/product/Read'));
const Register = lazy(() => import('./components/auth/Register'));
const UserProfileEdit = lazy(() => import('./pages/user/ProfileEdit'));

function App() {
  return (
    <Router>
      <Navbar />
      <BackToTop />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:category/:pair" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/publish" component={Publish} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/edit_profile" component={UserProfileEdit} />
          <Route exact path="/premier" component={PremierBook} />
          <Route exact path="/publish_book" component={PublishBook} />
          <Route exact path="/read" component={Read} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/signin" component={Login} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
