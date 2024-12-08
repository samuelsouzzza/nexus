import styles from './RightInfo.module.css';
import { EventsShort } from '../EventsShort/EventsShort';

export const RightInfo = () => {
  return (
    <div className={styles.container}>
      <EventsShort />
    </div>
  );
};
