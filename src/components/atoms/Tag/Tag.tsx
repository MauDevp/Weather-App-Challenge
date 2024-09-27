import './Tag.css';
import '@styles/typography.css';

type TagProps = {
    icon?: React.ReactNode;
    text: string;
    value: string;
}

export const Tag = ({icon, text, value}: TagProps) => {
    return (
        <div className="tag">
            {icon}
            <div className="buttonText">{text}</div>
            <div className="caption">{value}</div>
        </div>
    );
};
