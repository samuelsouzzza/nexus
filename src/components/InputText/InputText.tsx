'use client';
import styles from './InputText.module.css';
import React from 'react';
import getInputTextIcon from '@/utils/getInputTextIcon';
import getInputTextModal from '@/utils/getInputTextModal';

type InputTextProps = React.ComponentProps<'input'> &
  React.ComponentProps<'textarea'> & {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    modal?: 'searchAll' | undefined;
    icon?: string;
    multilines?: true | undefined;
  };

export const InputText = ({
  value,
  setValue,
  modal,
  icon,
  multilines,
  ...props
}: InputTextProps) => {
  const refMenu = React.useRef<HTMLDivElement>(null);
  const refTextArea = React.useRef<HTMLTextAreaElement>(null);
  const [activeModal, setActiveModal] = React.useState(false);

  React.useEffect(() => {
    if (value) setActiveModal(true);
  }, [value]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setActiveModal(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={refMenu}>
      <div className={styles.boxInputs}>
        {multilines ? (
          <textarea
            {...props}
            ref={refTextArea}
            className={styles.textArea}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            autoFocus
            placeholder='No que você está pensando agora?'
            maxLength={500}
          />
        ) : (
          <input
            {...props}
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        <p>{multilines && value?.length + '/500'}</p>
        {icon && getInputTextIcon(icon, 'var(--font-bg)')}
      </div>
      {modal && activeModal && getInputTextModal(modal as string, value)}
    </div>
  );
};
