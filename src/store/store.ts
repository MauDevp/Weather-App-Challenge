// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Asegúrate de que el nombre sea correcto
import weatherReducer from './slices/weatherSlice'; // Importa tu nuevo slice de clima

const store = configureStore({
    reducer: {
        user: userReducer,
        weather: weatherReducer, // Añade el slice de clima aquí
    },
});

export type RootState = ReturnType<typeof store.getState>; // Esto utiliza el tipo de retorno de store
export type AppDispatch = typeof store.dispatch;

export default store;