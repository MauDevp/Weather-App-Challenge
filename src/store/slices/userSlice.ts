// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Asegúrate de importar uuid
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../../src/assets';

interface Coordinates {
    lat: number;
    lng: number;
}

interface User {
    id: string;
    username: string;
    coordinates: Coordinates;
    photo?: string;
}

export interface UserState {
    users: User[];
    username: string;
    coordinates: Coordinates;
    isModalOpen: boolean;
    isModalDeleteOpen: boolean;
    selectedAvatar: string; // Añadir estado para el avatar seleccionado
    userToDelete: string | null;  // Usuario seleccionado para eliminar
}

const initialState: UserState = {
    users: [
        { id: uuidv4(), username: 'Mau', coordinates: { lat: 20.6637, lng: -103.4315 }, photo: image1 },
        { id: uuidv4(), username: 'Ana', coordinates: { lat: 20.6593, lng: -103.3728 }, photo: image2 },
        { id: uuidv4(), username: 'Luis', coordinates: { lat: 20.6761, lng: -103.3920 }, photo: image3 },
        { id: uuidv4(), username: 'Sofia', coordinates: { lat: 20.6710, lng: -103.3355 }, photo: image4 },
        { id: uuidv4(), username: 'Juan', coordinates: { lat: 20.6855, lng: -103.3383 }, photo: image5 },
        { id: uuidv4(), username: 'Laura', coordinates: { lat: 20.6881, lng: -103.3678 }, photo: image6 },
        { id: uuidv4(), username: 'Pedro', coordinates: { lat: 20.6913, lng: -103.3771 }, photo: image7 },
        { id: uuidv4(), username: 'María', coordinates: { lat: 20.6945, lng: -103.3599 }, photo: image8 },
    ],
    username: '',
    coordinates: { lat: 20.6866131, lng: -103.3526079 },
    isModalOpen: false,
    isModalDeleteOpen: false,
    selectedAvatar: '', // Inicializar el avatar seleccionado
    userToDelete: null,  // Usuario seleccionado para eliminar
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setCoordinates: (state, action: PayloadAction<Coordinates>) => {
            state.coordinates = action.payload;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload); // Agrega el nuevo usuario al estado
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        closeDeleteModal: (state) => {
            state.isModalDeleteOpen = false;
        },
        openDeleteModal: (state, action: PayloadAction<string | null>) => {
            state.isModalDeleteOpen = true;
            state.userToDelete = action.payload;  // Guardar el usuario a eliminar
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload; // Establece la lista de usuarios
        },
        openModal: (state) => {
            state.isModalOpen = true; // Abre el modal
        },
        setSelectedAvatar: (state, action: PayloadAction<string>) => {
            state.selectedAvatar = action.payload; // Actualizar el avatar seleccionado
        },
    },
});

// Exporta las acciones
export const { setUsername, setCoordinates, closeModal, addUser, setUsers, openModal, setSelectedAvatar, removeUser, openDeleteModal, closeDeleteModal  } = userSlice.actions;

// Exporta el reducer
export default userSlice.reducer;
