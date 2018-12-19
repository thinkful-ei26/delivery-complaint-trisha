import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//reducers are coming from the redux-form library 
export default createStore(
  combineReducers({
    form: formReducer
  })
)