import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import cart from './cartReducer';
import fetch from './fetchReducer';

const combinedReducers = combineReducers({
    cart,
    fetch
});

const rootReducer = createStore( combinedReducers, applyMiddleware( thunk ));

export default rootReducer;