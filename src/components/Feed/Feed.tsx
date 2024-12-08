import styles from './Feed.module.css';
import { CreatePost } from '../CreatePost/CreatePost';
import { motion } from 'motion/react';

export const Feed = () => {
  return (
    <div className={styles.container}>
      <CreatePost />
    </div>
  );
};
