import React, { useEffect } from 'react';

import CollectionsOverviewContainer from './../../components/collection-overview/collections-overview.container';
import { Route } from 'react-router-dom';

import CollectionPageContainer from '../collection/collection.container';

import './shop.styles.scss';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
