import { combineReducers } from 'redux';
import data from './domainData';
import app from './appData';

// AppData and DomainData states for CATEGORIES
export default combineReducers({
    app,
    data,
});