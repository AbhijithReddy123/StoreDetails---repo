import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import Customer from './components/Customer';
import CustomerPost from './components/CustomerPost';
import CustomerEdit from './components/CustomerEdit';
import Product from './components/Product';
import Sales from './components/Sales';
import Store from './components/Store';
import Productpost from './components/Productpost';
import Salespost from './components/Salespost';
import Storepost from './components/Storepost'
import Editproduct from './components/Editproduct';
import Storeedit from './components/Storeedit';



import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />

        
            <Route path='/customer' component={Customer} />
            <Route path='/customerpost' component={CustomerPost} />
            <Route path='/customeredit' component={CustomerEdit} />
            <Route path='/product' component={Product} />
            <Route path='/sales' component={Sales} />
            <Route path='/store' component={Store} />
            <Route path='/Productpost' component={Productpost} />
            <Route path='/salespost' component={Salespost} />
            <Route path='/storepost' component={Storepost} />
            <Route path='/editproduct' component={Editproduct} />
            <Route path='/storeedit' component={Storeedit} />
           
           
      </Layout>
    );
  }
}
