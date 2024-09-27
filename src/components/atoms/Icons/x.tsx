import { SVGProps } from "react"

interface XProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const X = ({ className, color, ...props }: XProps) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <path
                d="M13 3L3 13M3 3L13 13"
                stroke={`${color}`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
