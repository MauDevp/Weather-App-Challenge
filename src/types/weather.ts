// src/types/weather.ts
export interface WeatherData {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string; // Nombre de la ubicación
    weather: Array<{ description: string; icon: string }>; // Arreglo con las descripciones del clima
    wind: {
        speed: number;
        deg: number;
    };
    visibility: number;
}
