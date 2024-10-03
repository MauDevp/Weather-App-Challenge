// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/weatherSlice';

// Configuración del store con los reducers
const store = configureStore({
    reducer: {
        user: userReducer,
        weather: weatherReducer,
    },
});

// Tipos para el estado y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exportación del store
export default store;