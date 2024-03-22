import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useMovieContext } from "../../context/MovieFetchContext";
import { CardProps } from "../../pages/Catalog";

export default function DynamicSearchBar() {
    const { movies } = useMovieContext()
    const newRef = useRef<HTMLDivElement>(null)

    const [filteredList, setFilteredList] = useState<CardProps[]>([])
    const [showPopup, setShowPopup] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    })

    const handleOutsideClick = (e: MouseEvent) => {
        if (newRef.current && !newRef.current.contains(e.target as Node)) {
            setShowPopup(false);
        }
        console.log(showPopup);
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setShowPopup(true);

        const searched = e.currentTarget.value.trim()
        setInput(searched)

        setFilteredList(movies.filter((movie) => movie.name.toLowerCase().includes(searched)))
    }

    return (
        <div className="relative">
            <input type="text" placeholder="Search..." className="border rounded-xl px-4 py-2"
                onChange={(e) => handleSearch(e)}
                value={input} />
            <CiSearch className="absolute search-icon right-1 top-[calc(50%-16px)] size-[32px] opacity-60" />
            {showPopup ? <div className="absolute top-[50px] w-[100%] bg-white border rounded-xl p-4" ref={newRef}>
                <ul className="flex flex-col gap-3">
                    {filteredList.length !== 0 ?
                        <>
                            {filteredList.map((movie) => (
                                <li key={movie.id} className="border px-1 py-3">
                                    {movie.name}
                                </li>
                            ))}
                        </> : 'No Matches'}
                </ul>
            </div>: null}
        </div>
    )
}
