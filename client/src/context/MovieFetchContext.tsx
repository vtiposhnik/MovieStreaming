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
    setMovies: React.Dispatch<React.SetStateAction<CardProps[]>>,
    clicked: boolean,
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<MovieContextProps | undefined>(undefined)

export const useCommonContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
};

export const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState<CardProps[]>([]);
    const [clicked, setClicked] = useState(false)

    const value = {
        movies,
        setMovies,
        clicked,
        setClicked
    }

    return <Context.Provider value={value}> {children} </Context.Provider>
}
