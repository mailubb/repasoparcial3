
import './section.css';
import {Card} from '../Card/Card';
import { useAppSelector } from '../../hooks/storeHook';
import { DataType } from '../../types';
import { mapper } from '../../utils/mappers';

interface SectionProps {
    dataId: DataType;
  }
  
  export const Section = ({ dataId }: SectionProps) => {
    const slice = useAppSelector((state) => state[dataId]);
  
    return (
      <section>
        <h3>{dataId}</h3>
  
        <div className="content">
          {slice.data.map((item: unknown) => (
            <Card {...mapper[dataId](item)} />
          ))}
        </div>
      </section>
    );
  };

