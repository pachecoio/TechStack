import data from './LibraryList';


export default (state = data, action) => {
    switch (action.type) {
        case 'add_library':
            let result = [
                action.payload,
                ...state
            ]
            console.log(result);
            return result;
        default:
            return state;
    }
};
