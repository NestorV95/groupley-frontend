export const selectList = list => {
    return{ type: 'SELECT_LIST' , selectedList: list }
}

export const deselectList = () => {
    return{ type: 'DESELECT_LIST', selectedList: {} }
}

