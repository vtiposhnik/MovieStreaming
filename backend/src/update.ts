import { movie } from "./movie";
import { createApi } from "unsplash-js";
import dotenv from 'dotenv'

dotenv.config()

// const api = createApi({
//     accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`
// })

export async function updateMovies() {
    const movies = await movie.findAll()

    try {
        for (const item of movies) {
            const response = await fetch("https://api.unsplash.com/photos/random", {
                headers: {
                    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
                }
            })
            const data = await response.json()
            // console.log('here')
            // console.log(item.url)
            // console.log('there')

            const newUrl = data.urls.regular
            if (item.dataValues.url.includes("unsplash")) {
                return 0;
            } else {
                await item.update({ url: newUrl })
            }
        }

    } catch (error) {
        console.error(error, "couldn't update movies")
    }
}

updateMovies()