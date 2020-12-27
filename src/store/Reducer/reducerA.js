import * as Types from '../type/Type';

const initialState = {
    itemList: [],
    addMessage: '',
    editMessage: '',
    deleteMessage: '',

    addStatus: false,
    editStatus: false,
    deleteStatus: false,
};

const reducerA = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case Types.GET_ITEM_LIST:
            return {
                ...state,
                itemList: null,
            };

        default:
            break;
    }
    return newState;
};
export default reducerA;
