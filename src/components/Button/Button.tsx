import getInputTextIcon from '@/utils/getInputTextIcon';
import styles from './Button.module.css';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

export const Button = () => {
  return (
    <AnimatePresence>
      <motion.div
        key={1}d
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 5, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.container}
      >
        <button className={styles.btn}>
          {getInputTextIcon('rocket', 'var(--font)')}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
