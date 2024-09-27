import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setSelectedAvatar } from '../../../store/slices/userSlice';

import { Avatar, Select } from '../../atoms';
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../../assets';

import './AvatarSelector.css';
import '@styles/typography.css';

const imageOptions = [
    { value: image1, label: 'Profile 1' },
    { value: image2, label: 'Profile 2' },
    { value: image3, label: 'Profile 3' },
    { value: image4, label: 'Profile 4' },
    { value: image5, label: 'Profile 5' },
    { value: image6, label: 'Profile 6' },
    { value: image7, label: 'Profile 7' },
    { value: image8, label: 'Profile 8' },
];

export const AvatarSelector = () => {
    const dispatch = useDispatch();
    const selectedAvatar = useSelector((state: RootState) => state.user.selectedAvatar) || imageOptions[0].value;

    const handleSelectChange = (value: string) => {
        dispatch(setSelectedAvatar(value)); // Actualiza el avatar en Redux
    };

    return (
        <div className="profile-form">
            <Avatar
                imageUrl={selectedAvatar}
                altText="Avatar del usuario seleccionado"
                size="small"
                shape="circle"
            />
            <div className='profile-select'>
                <label htmlFor="user-select" className="headline4 profileLabel">Selecciona tu avatar</label>
                <Select
                    placeholder="Selecciona una imagen"
                    options={imageOptions}
                    value={selectedAvatar}
                    onChange={handleSelectChange}
                />
            </div>
        </div>
    );
};
