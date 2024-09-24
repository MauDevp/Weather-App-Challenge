import { Avatar, Button } from '../../atoms';
import '@styles/typography.css';  // Estilos de tipografía
import './UserCard.css'
import Image from '@assets/images/avatars/profile-1.jpg';
import { MarkerPin } from '../../atoms/Icons';
import { CardContainer } from '../../atoms/CardContainer';


export const UserCard = () => {

    return (
        <CardContainer>
            <Avatar
                imageUrl={Image}
                altText="Avatar del usuario seleccionado"
                size="large"
                shape="square"
            />
            <div className='footer-container'>
                <label htmlFor="user-select" className="label-name headline3">User Name</label>
                <div className='location-container'>
                    <MarkerPin className='MakerPin'/>
                    <p className='location-text body'>
                    20.6637808, -103.4315425
                    </p>
                </div>
                <div className='buttons-container'>
                    <Button
                        label='Detalles'
                        variants='secondary'
                    />
                    <Button
                        iconIdentifier="trash"
                        iconPosition="alone"
                        variants="secondary"
                    />
                </div>
            </div>
        </CardContainer>
    );
};