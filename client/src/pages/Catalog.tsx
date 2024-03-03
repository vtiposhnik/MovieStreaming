import { useEffect, useState } from "react"
import '../assets/styles/styles.css'
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

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

    const currentMovies = movies.slice(firstMovieInd, lastMovieInd)
    console.log('movies', movies)
    console.log('current', currentMovies)

    return (
        <>
            <section className="w-[80%] p-10 border">
                <ul className="card-wrapper gap-6 grid-cols-3">
                    {currentMovies.map((movie) => (
                        <li key={movie.id} className="rounded-xl bg-white border">
                            <figure className="flex flex-col p-2 gap-2">
                                <img src={movie.url} alt={movie.name} className="h-[200px] rounded-xl" />
                                <figcaption>
                                    {movie.name}
                                    <span className="icon-star">
                                    </span>
                                    <h4>Year: {movie.year}</h4>
                                    <h4>{movie.genre}</h4>
                                </figcaption>
                                <a href="#" className="border rounded-lg px-4 py-2 hover:bg-blue transition">Watch Movie</a>
                            </figure>
                        </li>
                    ))}
                </ul>

                <Pagination count={countMovies} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
        </>
    )
}
