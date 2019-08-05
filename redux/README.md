## Redux

# ownProps 
```javascript
import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'
import  './collection.styles.scss'

const CollectionPage = ({collection}) => {
    return (
        <div className="collection">
            <h2>
                collectionPage
            </h2>
        </div>
    )
}

// ownProps - все props компонента CollectionPage
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

```





## redux-thunk
```javascript
// reducer
import shopActionsTypes from './shop.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case shopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case shopActionsTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload
        }
    default:
      return state;
  }
};

export default shopReducer;




// action
import shopActionsTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
          dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error)))
    }
}
```