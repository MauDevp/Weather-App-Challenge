import { SVGProps } from "react"

interface chevronDownProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const ChevronDown = ({ className, color, ...props }: chevronDownProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                fill=""
                stroke={`${color}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m5 7.5 5 5 5-5"
            />
        </svg>
    )
}