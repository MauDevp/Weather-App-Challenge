import { SVGProps } from "react"

interface MarkerPinProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const MarkerPin = ({ className, color, ...props }: MarkerPinProps) => {
    return(
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
                d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            />
            <path
                fill=""
                stroke={`${color}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 18.333c3.333-3.333 6.667-6.318 6.667-10a6.667 6.667 0 1 0-13.334 0c0 3.682 3.334 6.667 6.667 10Z"
            />
        </svg>
    )
}
