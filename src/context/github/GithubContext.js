import { createContext,  useReducer} from "react";
import githubReducer from "./GithubReducer";

 const GitHhbContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState)


    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`);

        const data = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: data
        })
    };

    return <GitHhbContext.Provider value={
        {
            users: state.users,
            loading: state.loading,
            fetchUsers
        }
    }>
        {children}

    </GitHhbContext.Provider >
}

export default GitHhbContext;