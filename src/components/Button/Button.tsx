import getInputTextIcon from '@/utils/getInputTextIcon';
import styles from './Button.module.css';

export const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        {getInputTextIcon('rocket', 'var(--font)')}
      </button>
    </div>
  );
};
