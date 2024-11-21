
import './chip.css';
interface ChipProps {
    text: string;
}
export const Chip = ({text}: ChipProps) => {
    return (
        <p>{text}</p>
    )
}
