import React from 'react'
import './DeleteUserContainer.css'

type DeleteUserContainerProps = {
    children: React.ReactNode
}

export const DeleteUserContainer = ({ children }: DeleteUserContainerProps) => {
    return (
        <div className='deleteUserContainer'>
            {children}
            <div className='deleteHeadContainer'>
            </div>
        </div>
    )
}