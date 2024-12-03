'use client';
import styles from './CreatePost.module.css';
import { InputText } from '../InputText/InputText';
import React from 'react';
import Image from 'next/image';

export const CreatePost = () => {
  const [valueNewPost, setValueNewPost] = React.useState('');
  return (
    <div className={styles.container}>
      <Image src={'/profile.svg'} height={40} width={40} alt='Foto de perfil' />
      <InputText
        value={valueNewPost}
        setValue={setValueNewPost}
        modal='createPost'
        icon='rocket'
        placeholder='Diga o que está pensando...'
        multilines
        maxLength={500}
      />
    </div>
  );
};
