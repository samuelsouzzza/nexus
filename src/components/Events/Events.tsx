import styles from './Events.module.css';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

export const Events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <Link href={'#'}>
          Events <IoArrowForward size={20} />
        </Link>
      </div>
    </div>
  );
};
