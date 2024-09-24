import { WeatherContainer } from "../../atoms"
import { Tag } from "../../atoms"
import { Droplets, Wind, UV, Eye } from '../../atoms/Icons'
import './Weather.css'

type WeatherProps = {
    date: string;
    temperature: number;
    location: string;
    caracteristics?: {
        humidity: number;
        wind: number;
        uvIndex: number;
        visibility: number;
    }
}

export const Weather = ({date, temperature, location}: WeatherProps) => {
    return (
        <WeatherContainer>
            <div className="weather-information weather-text">
                <span className="headline3 weather-text">{date}</span>
                <span className="headline1 weather-text">{temperature}°C</span>
                <span className="headline3 weather-text">Lugar</span>
                <span className="headline4 weather-text">{location}</span>
            </div>
            <div className="caracteristics">
                <Tag
                    icon={ <Droplets className="tagIcon" /> }
                    text="Humedad"
                    value="33.2 °C"
                />
                <Tag
                    icon={ <Wind className="tagIcon" /> }
                    text="Viento"
                    value="33.2 °C"
                />
                <Tag
                    icon={ <UV className="tagIcon" /> }
                    text="UV indice"
                    value="33.2 °C"
                />
                <Tag
                    icon={ <Eye className="tagIcon" /> }
                    text="Visibilidad"
                    value="33.2 °C"
                />
            </div>
        </WeatherContainer>
    )
}