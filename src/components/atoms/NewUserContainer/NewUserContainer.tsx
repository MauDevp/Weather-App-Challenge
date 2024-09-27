import React from 'react'
import { Button } from '../../atoms'
import './NewUserContainer.css'

type NewUserContainerProps = {
    children: React.ReactNode
    onClose: () => void; // Prop para manejar el cierre del modal
}

export const NewUserContainer = ({ children, onClose }: NewUserContainerProps) => {
    return (
        <div className='newUserContainer'>
            {children}
            <div className='headContainer'>
                <Button
                    iconIdentifier='x'
                    iconPosition='alone'
                    variants='tertiary'
                    onClick={onClose} // Llama a onClose cuando se hace clic
                />
            </div>
        </div>
    )
}