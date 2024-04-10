import { ReactNode } from "react";
import { Link } from "react-router-dom"

interface ButtonProps {
    value: string | ReactNode
    url?: string
    handleClick?: () => void;
    styles?: React.CSSProperties
    type?: string
}

export const Button = (props: ButtonProps) => {
    const { value, url, handleClick, styles, type } = props
    return (
        <a className="border cursor-pointer text-center rounded-lg py-2 px-4 hover:bg-blue transition" style={styles}
        type={type}  onClick={handleClick}>
                {value} 
        </a>
    )
}