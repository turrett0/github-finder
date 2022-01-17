
const githubReducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }

        case "CLEAR_USERS":
            return {
                ...state,
                users: []
            }

        case "SET_CURRENT_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "SET_USER_REPOS":
            return {
                ...state,
                userRepos: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer;