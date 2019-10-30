import React from 'react';

import CollectionsOverviewContainer from './../../components/collection-overview/collections-overview.container';
import { Route } from 'react-router-dom';

import CollectionPageContainer from '../collection/collection.container';

import './shop.styles.scss';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

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
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        )} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        )} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
