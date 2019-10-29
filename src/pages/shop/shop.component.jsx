import React from 'react';

import CollectionsOverview from './../../components/collection-overview/collections-overview.component';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';
// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from './../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };
  // unsubscribeFromSnapShot = null;

  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionReference = firestore.collection('collections');
    // collectionReference.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
