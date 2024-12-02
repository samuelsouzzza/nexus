import styles from './RightInfo.module.css';
import { Events } from '../Events/Events';

export const RightInfo = () => {
  return (
    <div className={styles.container}>
      <Events />
    </div>
  );
};
