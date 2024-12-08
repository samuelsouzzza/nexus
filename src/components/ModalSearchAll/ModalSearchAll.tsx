import styles from './ModalSearchAll.module.css';
import { motion } from 'motion/react';

type ModalSearchAllProps = {
  active: boolean;
  str: string;
};

export const ModalSearchAll = ({ active, str }: ModalSearchAllProps) => {
  return (
    <motion.div
      animate={{ y: active ? 5 : -5, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={styles.container}
      style={{ display: active && 'flex' }}
    >
      <p>
        Exibindo resultados para
        <span className={styles.str}>{`"${str}"`}</span>
      </p>
    </motion.div>
  );
};
