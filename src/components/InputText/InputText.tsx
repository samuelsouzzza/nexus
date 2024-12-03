'use client';
import styles from './InputText.module.css';
import { ModalSearchAll } from '../ModalSearchAll/ModalSearchAll';
import React from 'react';
import getInputTextIcon from '@/utils/getInputTextIcon';

type InputTextProps = React.ComponentProps<'input'> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  modal: 'createPost' | 'searchAll';
  icon?: string;
};

export const InputText = ({
  value,
  setValue,
  modal,
  icon,
  ...props
}: InputTextProps) => {
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
        {...props}
        className={styles.input}
        value={valueSearched}
        onChange={(e) => setValueSearched(e.target.value)}
      />
      {icon && getInputTextIcon(icon)}

      <ModalSearchAll active={valueSearched.length > 0} str={valueSearched} />
    </div>
  );
};
