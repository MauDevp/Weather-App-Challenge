import './WeatherContainer.css'
import '@styles/typography.css'

type WeatherContainerProps = {
    children: React.ReactNode;
}

export const WeatherContainer = ({children}: WeatherContainerProps) => {
    return (
        <div className='weather-container'>
            {children}
        </div>
    )
}