export const API_URL = 'http://localhost:3000/catalog';

export default function fetchMovies() {

    return fetch(API_URL)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.log("error fetching movies", error)
            return []
        })
}
