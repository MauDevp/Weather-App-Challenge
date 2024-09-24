import './DayWeatherContainer.css'
import '@styles/typography.css'

type DayWeatherContainerProps = {
    children: React.ReactNode;
}

export const DayWeatherContainer = ({children}: DayWeatherContainerProps) => {
    return (
        <div className='day-weather-container'>
            {children}
        </div>
    )
}