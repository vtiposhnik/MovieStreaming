import { useEffect, useState } from "react"
import '../assets/styles/styles.css'
import Pagination from "../components/Pagination";
import SearchFilter from "../components/SearchFilter";
import { Button } from "../components/utilComps";

interface CardProps {
    id: number,
    name: string,
    genre: string,
    url: string,
    year: number
}

export default function Catalog() {
    const [movies, setMovies] = useState<CardProps[]>([]);
    const [countMovies, setCountMovies] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 15;
    const lastMovieInd = currentPage * perPage;
    const firstMovieInd = lastMovieInd - perPage;



    useEffect(() => {
        fetch('http://localhost:3000/catalog')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setMovies(data.movies)
                setCountMovies(data.count)
            })
    }, [])

    function getBackgroundClass(movie_url: string) {
        return {
            backgroundImage: `url(${movie_url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
    }

    const currentMovies = movies.slice(firstMovieInd, lastMovieInd)
    console.log('movies', movies)
    console.log('current', currentMovies)

    return (
        <>
            <SearchFilter />

            <section className="w-[80%] p-10 mx-auto grid gap-4 text-center">
                <a href="" className="">
                    <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
                        {currentMovies.map((movie) => (
                            <li key={movie.id} className="rounded-xl bg-white border">
                                <figure className='p-2 rounded-xl' style={getBackgroundClass(movie.url)} >
                                    {/* <img src={movie.url} alt="movie-img" className="h-[auto] relative size-[100%]" /> */}
                                    <figcaption className="h-[30vw] flex flex-col">
                                        {movie.name}
                                        <span className="icon-star">
                                        </span>
                                        <h4>Year: {movie.year}</h4>
                                        <h4>{movie.genre}</h4>
                                        <Button value="Watch Movie" url={'#'} />
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </a>
                <Pagination count={countMovies} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
        </>
    )
}
