import { combineReducers } from 'redux'
import userReducer from './user.reducers';
import authReducer from './auth.reducers'
// import userReducer from './user.reducers';
import categoryReducer from './category.reducers';
import locationReducer from './location.reducers'
// import productReducer from './product.reducer';
// import orderReducer from './order.reducer';
// import pageReducer from './page.reducer'


const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    category: categoryReducer,
    location: locationReducer
    // product: productReducer,
    // page: pageReducer,
    // order: orderReducer,
});

export default reducer