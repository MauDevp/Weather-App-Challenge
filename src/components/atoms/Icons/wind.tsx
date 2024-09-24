import { SVGProps } from "react"

interface WindProps extends SVGProps<SVGSVGElement> {
    /** Manejar propiedades css */
    className?: string;
    /** Color del icon */
    color?: string;
}

export const Wind = ({ className, color, ...props }: WindProps) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M13.9699 5.41667C14.4277 4.90521 15.0929 4.58333 15.8333 4.58333C17.214 4.58333 18.3333 5.70262 18.3333 7.08333C18.3333 8.46404 17.214 9.58333 15.8333 9.58333H10.8333M5.63654 3.33333C6.09431 2.82188 6.75954 2.5 7.49996 2.5C8.88067 2.5 9.99996 3.61929 9.99996 5C9.99996 6.38071 8.88067 7.5 7.49996 7.5H1.66663M8.96987 16.6667C9.42764 17.1781 10.0929 17.5 10.8333 17.5C12.214 17.5 13.3333 16.3807 13.3333 15C13.3333 13.6193 12.214 12.5 10.8333 12.5H1.66663"
                stroke={`${color}`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
