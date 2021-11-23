import { createStore,combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducers";
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/notesReducer";

const composeEnhancers = (typeof window !== 'undefined' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui:uiReducer,
    notes:notesReducer
  
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)

    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)