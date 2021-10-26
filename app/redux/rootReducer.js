import {combineReducers} from '@reduxjs/toolkit';
import photoReducer from './photoSlice';
import appReducer from './appSlice';

const rootReducer = combineReducers({
  photo: photoReducer,
  app: appReducer,
});

export default rootReducer;
