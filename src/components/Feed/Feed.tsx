import styles from './Feed.module.css';
import { CreatePost } from '../CreatePost/CreatePost';

export const Feed = () => {
  return (
    <div className={styles.container}>
      <CreatePost />
    </div>
  );
};
