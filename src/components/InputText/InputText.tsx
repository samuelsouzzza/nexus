import styles from './InputText.module.css';
import { IoSearch } from 'react-icons/io5';
import { ModalSearchAll } from '../ModalSearchAll/ModalSearchAll';
import React from 'react';

export const InputText = () => {
  const [valueSearched, setValueSearched] = React.useState('');
  const refMenu = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setValueSearched('');
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={refMenu}>
      <input
        type='text'
        className={styles.input}
        placeholder='Busque por pessoas, postagens, eventos e mais'
        value={valueSearched}
        onChange={(e) => setValueSearched(e.target.value)}
      />
      <IoSearch size={20} className={styles.ico} />

      <ModalSearchAll active={valueSearched.length > 0} str={valueSearched} />
    </div>
  );
};
