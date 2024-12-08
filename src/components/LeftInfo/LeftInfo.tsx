import styles from './LeftInfo.module.css';
import { PopularTagsShort } from '../PopularTagsShort/PopularTagsShort';

export const LeftInfo = () => {
  return (
    <div className={styles.container}>
      <PopularTagsShort />
    </div>
  );
};
