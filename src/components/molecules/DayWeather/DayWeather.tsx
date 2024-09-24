import './DayWeather.css'
import '@styles/typography.css'
import { DayWeatherContainer } from '../../atoms/DayWeatherContainer'

type DayWeatherProps = {
    day: string;
    temperature: string;
    icon: string;
}

export const DayWeather = ({day, temperature, icon}: DayWeatherProps) => {
    return (
        <DayWeatherContainer>
            <div className='day-weather'>
                <p className='day-weather-text headline3'>{day}</p>
                <img src={icon} alt="icono del clima" className='weather-icon'/>
                <p className='temperature-text body'>{temperature}</p>
            </div>
        </DayWeatherContainer>
    )
}