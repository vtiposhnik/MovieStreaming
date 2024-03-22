import { useEffect, useState } from "react"
import '../assets/styles/styles.css'
import Pagination from "../components/catalogComps/Pagination";
import SearchFilter from "../components/catalogComps/SearchFilter";
import { Button } from "../util/utilComps";
import fetchMovies from "../util/constants";
import { useMovieContext } from "../context/MovieFetchContext";

export interface CardProps {
    id: number,
    name: string,
    genre: string,
    url: string,
    year: number
}

export default function Catalog() {
    const { movies, setMovies } = useMovieContext()

    
    const [countMovies, setCountMovies] = useState(0)
    const [filteredMovies, setFilteredMovies] = useState<CardProps[]>(movies)

    const [currentPage, setCurrentPage] = useState(1)

    const perPage = 16;
    const lastMovieInd = currentPage * perPage;
    const firstMovieInd = lastMovieInd - perPage;

    useEffect(() => {
        fetchMovies()
            .then((data) => {
                setMovies(data.movies);
                setCountMovies(data.count)
                setFilteredMovies(data.movies)
            });
    }, [])

    function getBackgroundClass(movie_url: string) {
        return {
            backgroundImage: `url(${movie_url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
    }
    function handleFilterList(filteredList: CardProps[]) {
        console.log(filteredList)
        console.log(movies)
        setFilteredMovies(filteredList)
    }

    const currentMovies = filteredMovies.slice(firstMovieInd, lastMovieInd)

    return (
        <>
            <SearchFilter movies={movies} onFilter={handleFilterList} setCount={setCountMovies} />

            <section className="w-[80%] p-10 mx-auto grid gap-4 text-center">
                <ul className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4 ">
                    {currentMovies.map((movie) => (
                        <li key={movie.id} className="rounded-xl bg-white border">
                            <figure className='p-2 rounded-xl' style={getBackgroundClass(movie.url)} >
                                {/* <img src={movie.url} alt="movie-img" className="h-[auto] relative size-[100%]" /> */}
                                <figcaption className="h-[45vh] flex flex-col justify-between">
                                    <div className="text-md">
                                        {movie.name}
                                        <h4>Year: {movie.year}</h4>
                                        <h4>{movie.genre}</h4>
                                    </div>
                                    <Button value="Watch Movie" url='#' />
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>

                <Pagination count={countMovies} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
        </>
    )
}
