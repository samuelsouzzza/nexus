'use client';
import styles from './CreatePost.module.css';
import { InputText } from '../InputText/InputText';
import React from 'react';
import Image from 'next/image';
import { InputFile } from '../InputFile/InputFile';
import { IImgsCreatePost } from '@/@types/@types';
import { loadImgs } from '@/utils/loadImgsInputFile';
import { deleteImgsInputFile } from '@/utils/deleteImgsInputFile';
import { Button } from '../Button/Button';

export const CreatePost = () => {
  const [valueNewPost, setValueNewPost] = React.useState('');
  const [selectedImgs, setSelectedImgs] = React.useState<
    IImgsCreatePost[] | null
  >(null);

  return (
    <form className={styles.container}>
      <div className={styles.boxInputText}>
        <Image
          src={'/profile.svg'}
          height={40}
          width={40}
          alt='Foto de perfil'
          className={styles.profile}
        />
        <InputText
          value={valueNewPost}
          setValue={setValueNewPost}
          placeholder='Diga o que está pensando...'
          multilines
          maxLength={50}
        />
      </div>
      <InputFile
        id='inputFilesCreatePost'
        value={selectedImgs as string & IImgsCreatePost[]}
        setValue={setSelectedImgs}
        onChange={(e) => loadImgs(e, setSelectedImgs)}
        onDelete={deleteImgsInputFile}
      />
      {valueNewPost.length > 0 || (selectedImgs && selectedImgs.length > 0) ? (
        <Button />
      ) : null}
      {/* <Button /> */}
    </form>
  );
};
