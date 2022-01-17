const GITHUB_URL = "https://api.github.com";
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL



export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    return items
};



// Get a single user
export const setSingleUser = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/${login}`)
    const data = await response.json()

    if (response.status === 404) window.location = '/notfound'
 
    return data
};

export const setUserRepos = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`)
    const data = await response.json()

    if (response.status === 404) window.location = '/notfound'
    
    return data
}

