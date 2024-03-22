import { useEffect, useState } from "react";
import { Button } from "../../util/utilComps";

interface PaginationProps {
    count: number,
    currentPage: number,
    setCurrentPage: (page: number) => void
}

export default function Pagination({ count, currentPage, setCurrentPage }: PaginationProps) {
    const pages = []
    const pagesTotal = count / 15;
    const minPagesLimit = currentPage;
    const maxPagesLimit = minPagesLimit + 6;
    const [prevDots, setPrevDots] = useState(false)

    useEffect(() => {
        if (currentPage > 2) {
            setPrevDots(true)
        }
    }, [currentPage])

    for (let i = 0; i < pagesTotal; i++) {
        pages.push(i)
    }
    function handlePageClick(page: number): void {
        setCurrentPage(page)
    }
    const pageNumbers = pages.map(page => {
        if (page <= maxPagesLimit && page >= minPagesLimit) {
            return (
                <li key={page} className="rounded-md lg:block hidden">
                    <Button value={`${page}`} url="#" handleClick={() => handlePageClick(page)} />
                </li>
            );
        } else {
            return null;
        }
    }

    );
    function handlePrevious() {
        setCurrentPage(1)
    }

    function handleLast() {
        setCurrentPage(pagesTotal)
    }
    function handleNext() {
        setCurrentPage(currentPage + 7)
    }

    return (
        <>
            <ul className="flex gap-3 justify-center items-center">
                {prevDots ?
                    <Button value="..." url="#" handleClick={handlePrevious} /> : <></>}
                {pageNumbers}
                {(currentPage !== 20) ? <Button value="..." url="#" handleClick={handleNext} /> : <></>}
                <div onClick={handleLast} className="flex gap-5">
                    <Button value={`${pagesTotal}`} url="#" />
                </div>
            </ul>
        </>
    )
}
