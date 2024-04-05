import { ReactNode } from "react";
import { Link } from "react-router-dom"

interface ButtonProps {
    value: string | ReactNode,
    url?: string,
    handleClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    const { value, url, handleClick } = props
    return (
        <a className="border cursor-pointer text-center rounded-lg py-2 px-4 hover:bg-blue transition"  onClick={handleClick}>
                {value} 
        </a>
    )
}