'use client';
import styles from './InputText.module.css';
import React from 'react';
import getInputTextIcon from '@/utils/getInputTextIcon';
import getInputTextModal from '@/utils/getInputTextModal';
import autoResizeTextArea from '@/utils/autoResizeTextArea';

type InputTextProps = React.ComponentProps<'input'> &
  React.ComponentProps<'textarea'> & {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    modal?: 'createPost' | 'searchAll' | undefined;
    icon?: string;
    multilines?: boolean;
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

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setValue('');
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    // autoResizeTextArea(refTextArea.current);
  }, [refTextArea.current?.value]);

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
            rows={3}
            autoFocus
            placeholder='No que você está pensando agora?'
            maxLength={1000}
          />
        ) : (
          <input
            {...props}
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        {icon && getInputTextIcon(icon)}
      </div>
      <div>{modal && getInputTextModal(modal, value)}</div>
    </div>
  );
};
