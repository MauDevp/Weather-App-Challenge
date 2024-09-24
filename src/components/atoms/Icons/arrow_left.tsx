import { SVGProps } from "react"

interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const ArrowLeft = ({ className, color, ...props }: ArrowLeftProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill=""
        {...props}
        >
            <path
                fill=""
                stroke={`${color}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
            />
        </svg>
    );
}