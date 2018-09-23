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

export const deleteLibrary = (libraryId) => {
    return {
        type: 'delete_library',
        payload: libraryId
    }
}

export const openHeaderMenu = (isOpen) => {
    return {
        type: 'open_menu',
        payload: !isOpen
    }
}
