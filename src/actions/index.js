export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};

export const addLibrary = (newLibrary) => {
    return {
        type: 'add_library',
        payload: newLibrary
    }
}
