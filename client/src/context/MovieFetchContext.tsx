import { createContext, useContext, useState } from "react"

interface CardProps {
    id: number,
    name: string,
    genre: string,
    url: string,
    year: number
}
interface MovieContextProps {
    movies: CardProps[],
    setMovies: React.Dispatch<React.SetStateAction<CardProps[]>>
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined)

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
};

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState<CardProps[]>([]);

    const value = {
        movies,
        setMovies
    }

    return <MovieContext.Provider value={value}> {children}</MovieContext.Provider>
}
