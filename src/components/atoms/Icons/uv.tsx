import { SVGProps } from "react"

interface UVProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const UV = ({ className, color, ...props }: UVProps) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_13_103)">
                <path
                    d="M3.33335 15H1.66669M5.26178 10.2618L4.08327 9.08325M14.7382 10.2618L15.9167 9.08325M18.3334 15H16.6667M5.83335 15C5.83335 12.6988 7.69883 10.8333 10 10.8333C12.3012 10.8333 14.1667 12.6988 14.1667 15M18.3334 18.3333H1.66669M13.3334 5L10 1.66667M10 1.66667L6.66669 5M10 1.66667V7.5"
                    stroke={`${color}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_13_103">
                    <rect width={20} height={20} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
