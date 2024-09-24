import {Input} from '../../atoms/Input';
import './UserInputField.css';
import '@styles/typography.css'

interface UserInputFieldProps {
    ValueLabel: string;
    placeholder?: string;
    onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInputField = ({ ValueLabel, onUserNameChange, placeholder }: UserInputFieldProps) => (
    <div className="user-input-field">
        <label htmlFor="username" className="input-label headline4">{ValueLabel}</label>
        <Input placeholder={placeholder}  onChange={onUserNameChange} />
    </div>
);
