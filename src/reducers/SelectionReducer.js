export default (state = [], action) => {

    switch (action.type) {
        case 'select_library':
            // console.log(state);
            return action.payload;

        default:
            return state;
    }

};
