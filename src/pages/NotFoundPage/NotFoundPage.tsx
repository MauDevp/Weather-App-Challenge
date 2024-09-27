import './NotFoundPage.css'
import { Button } from '../../components/atoms';

export const NotFoundPage = () => {
    return (
        <div className="notfoundpage-container">
            <h1 className="headline1">NotFoundPage</h1>
            <Button
                label="Regresar al inicio"
                iconIdentifier='arrow-left'
                iconPosition='left'
                variants='tertiary'
                onClick={() => window.location.href = '/'}
                
            />
        </div>
    )
}