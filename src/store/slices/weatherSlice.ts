// src/store/slices/weatherSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherData } from '../../types/weather'; // Importa el tipo de WeatherData

// Obtiene la clave de la API desde las variables de entorno
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Define una acción asincrónica para obtener el clima
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (coordinates: { lat: number; lng: number }) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${API_KEY}&units=metric`
        );
        return response.data as WeatherData; // Devuelve los datos del clima con el tipo adecuado
    }
);

// Define el slice para el clima
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null as WeatherData | null, // Asegúrate de tipar el estado del clima
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Guarda los datos del clima
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
});

export default weatherSlice.reducer;
