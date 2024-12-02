import styles from './MenuProfileDetails.module.css';
import {
  IoSettings,
  IoPerson,
  IoKeySharp,
  IoHelpCircle,
  IoLogOut,
} from 'react-icons/io5';
import { motion } from 'motion/react';

type MenuProfileDetailsProps = {
  active: boolean;
};

export const MenuProfileDetails = ({ active }: MenuProfileDetailsProps) => {
  return (
    <motion.div
      animate={{
        y: active ? 5 : -5,
        opacity: active ? 1 : 0,
      }}
      transition={{ duration: '0.1' }}
      className={styles.container}
      style={{ visibility: active ? 'visible' : 'hidden' }}
    >
      <ul className={styles.ulBox}>
        <li>
          <IoPerson />
          <p>Meu Perfil</p>
        </li>
        <li>
          <IoKeySharp />
          <p>Privacidade e segurança</p>
        </li>
        <li>
          <IoHelpCircle />
          <p>Ajuda</p>
        </li>
        <li>
          <IoSettings />
          <p>Configurações</p>
        </li>
        <li>
          <IoLogOut />
          <p>Sair</p>
        </li>
      </ul>
    </motion.div>
  );
};
