import { SVGProps } from "react"

interface TrashProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const Trash = ({ className, color, ...props }: TrashProps) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <path
                fill=""
                stroke={`${color}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
                d="M6 2h4M2 4h12m-1.333 0-.468 7.013c-.07 1.052-.105 1.578-.332 1.977a2 2 0 0 1-.866.81c-.413.2-.94.2-1.995.2H6.994c-1.055 0-1.582 0-1.995-.2a2 2 0 0 1-.866-.81c-.227-.399-.262-.925-.332-1.977L3.333 4m3.334 3v3.333M9.333 7v3.333"
            />
        </svg>
    )
}
