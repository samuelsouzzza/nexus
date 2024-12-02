import styles from './LeftInfo.module.css';
import { PopularTags } from '../PopularTags/PopularTags';

export const LeftInfo = () => {
  return (
    <div className={styles.container}>
      <PopularTags />
    </div>
  );
};
