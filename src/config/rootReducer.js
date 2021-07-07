import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import { sessionReducer as session } from 'redux-react-session';

const rootReducer = combineReducers({
  form,
  session,
});

export default rootReducer;