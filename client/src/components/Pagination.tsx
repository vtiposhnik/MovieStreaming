import { useState } from "react";

export default function Pagination({ count, currentPage, setCurrentPage }) {
    const pages = []
    const pagesTotal = count / 15;
    const minPagesLimit = currentPage;
    const maxPagesLimit = minPagesLimit + 6;

    for (let i = 0; i < pagesTotal; i++) {
        pages.push(i)
    }
    function handlePageClick(page: number): void {
        setCurrentPage(page)
    }
    const pageNumbers = pages.map(page => {
        if (page <= maxPagesLimit && page > minPagesLimit) {

            return (
                <li key={page} className={currentPage === page ? 'active' : 'border p-3 '}>
                    <a href="#" onClick={() => handlePageClick(page)}>
                        {page}
                    </a>
                </li>
            );
        } else {
            return null;
        }
    }

    );
    return (
        <>
            <ul className="flex gap-5">
                {pageNumbers}
            </ul>
        </>
    )
}
