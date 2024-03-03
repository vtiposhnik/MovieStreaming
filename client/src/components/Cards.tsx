interface CardProps {
    id: number,
    name: string,
    genre: string,
    url: string,
    year: number
}

export default function Cards({id, name, genre, url, year}: CardProps) {
    return (
        <li key={id}>
                <figure>
                    <img src={url} alt={name} />
                    <figcaption>
                        <span className="icon-star">
                        </span>
                        <h4>Year: {year}</h4>
                        <h4>{genre}</h4>
                    </figcaption>
                </figure>
        </li>
    )
}
