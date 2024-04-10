export const CTLG_URL = 'http://localhost:3000/catalog';
export const API_URL = 'http://localhost:3000';

interface AuthFetchProps {
    data: object,
    method: string,
    auth: string
}

export default function fetchMovies() {

    return fetch(CTLG_URL)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.log("error fetching movies", error)
            return []
        })
}

export function authFetch({data, method, auth}: AuthFetchProps) {

    return fetch(`${API_URL}/${auth}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
