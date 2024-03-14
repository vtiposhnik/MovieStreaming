import { Link } from "react-router-dom"

interface ButtonProps {
    value: string,
    url: string,
    handleClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    const { value, url, handleClick } = props
    return (
        <button className="border rounded-lg p-4 hover:bg-blue transition"  onClick={handleClick}>
            <Link to={url}>
                {value}
            </Link>
        </button>
    )
}