import React from 'react';

import CollectionsOverview from './../../components/collection-overview/collections-overview.component';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
