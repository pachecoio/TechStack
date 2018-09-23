import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers';
import SelectionReducer from './SelectionReducer';
import HeaderMenu from './HeaderMenu';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
    openMenu: HeaderMenu
});
