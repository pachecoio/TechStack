export default (state = false, action) => {

    switch (action.type) {
        case 'open_menu':
            // console.log(state);
            console.log(!state.openMenu);
            return action.payload;

        default:
            return state;
    }

};
