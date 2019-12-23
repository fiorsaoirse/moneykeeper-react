import { combineReducers } from 'redux';
import purchase from './purchase';
import category from './category';

export default combineReducers({ purchase, category });