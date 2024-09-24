// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Manejo de rutas no encontradas */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
