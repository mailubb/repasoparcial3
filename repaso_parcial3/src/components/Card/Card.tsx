import './card.css';
import {Chip} from '../Chip/Chip';


export interface CardProps {
    title: string;
    img?: string;
    meta: Array<string>;
  }
  
  export const Card = ({ img, title, meta }: CardProps) => {
    return (
      <figure className="card">
        {img && <img src={img} alt={title} />}
        <h3>{title}</h3>
  
        <section>
          {meta.map((data) => (
            <Chip key={data} text={data} />
          ))}
        </section>
      </figure>
    );
  };