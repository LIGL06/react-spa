import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';
import rootReducer from '../config/rootReducer';

const middleware = [thunk];
let enhancer = compose;
if (process.env.REACT_APP_ENV !== 'prod') {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
}

const createStoreWithMiddleware = enhancer(
  applyMiddleware(...middleware)
)(createStore);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sessionService.initSessionService(store);
  return store;
}

export default configureStore;