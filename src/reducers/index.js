import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
