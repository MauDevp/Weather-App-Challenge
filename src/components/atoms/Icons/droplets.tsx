import { SVGProps } from "react"

interface DropletsProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const Droplets = ({ className, color, ...props }: DropletsProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={className}
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_10_327)">
                <path
                    d="M18.3334 13.3333C18.3334 16.0948 16.0948 18.3333 13.3334 18.3333C10.5719 18.3333 8.33335 16.0948 8.33335 13.3333C8.33335 9.73858 13.3334 1.66667 13.3334 1.66667C13.3334 1.66667 18.3334 9.73858 18.3334 13.3333Z"
                    stroke={`${color}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.66669 7.5C6.66669 8.88071 5.5474 10 4.16669 10C2.78597 10 1.66669 8.88071 1.66669 7.5C1.66669 5.70262 4.16669 1.66667 4.16669 1.66667C4.16669 1.66667 6.66669 5.70262 6.66669 7.5Z"
                    stroke={`${color}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_10_327">
                    <rect width={20} height={20} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
