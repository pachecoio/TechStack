import data from './LibraryList';


export default (state = data, action) => {
    switch (action.type) {
        case 'add_library':
            return [
                {
                    id: Math.floor((Math.random() * 10000) + 1),
                    title: action.payload.title,
                    description: action.payload.description
                },
                ...state
            ];

        case 'delete_library':
            return state.filter((library) => library.id != action.payload)

        default:
            return state;
    }
};
