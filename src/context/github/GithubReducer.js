export const ACTIONS = {
    GET_USERS: 'get_users',
    SET_LOADING: 'set_loading',
    CLEAR_USERS: 'clear_users',
}

const githubReducer = (currentState, action) => {
    switch(action.type) {
        case ACTIONS.GET_USERS:
            return {
                ...currentState,
                users: action.payload,
                loading: false,
            }
        case ACTIONS.SET_LOADING:
            return {
                ...currentState,
                loading: true,
            }
        case ACTIONS.CLEAR_USERS:
            return {
                ...currentState,
                users: []
            }
        default:
            return currentState
    }
}

export default githubReducer
