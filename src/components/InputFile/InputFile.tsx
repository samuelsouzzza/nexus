'use client';
import styles from './InputFile.module.css';
import React from 'react';
import { IImgsCreatePost } from '@/@types/@types';
import Image from 'next/image';
import { IoCloudUploadOutline, IoRemoveCircle } from 'react-icons/io5';
import { SetStateAction } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label?: string;
  value: IImgsCreatePost[] | null;
  setValue?: React.Dispatch<SetStateAction<IImgsCreatePost[] | null>>;
  radius?: number;
  onDelete: (
    id: number,
    setValue: React.Dispatch<SetStateAction<IImgsCreatePost[] | null>>,
    value: IImgsCreatePost[] | null
  ) => void;
};

export const InputFile = ({
  id,
  label,
  value,
  setValue,
  onDelete,
  ...props
}: InputFileProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        <IoCloudUploadOutline size={25} />
        <p>{value?.length ?? 0}/5 </p>
      </label>
      <input className={styles.file} id={id} type='file' multiple {...props} />
      <motion.div positiontransition='true' className={styles.previewContainer}>
        <AnimatePresence>
          {value?.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              animate={{
                y: 5,
                opacity: 1,
              }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.1, delay: i / 30 }}
              className={styles.boxImg}
            >
              <span
                className={styles.delImg}
                onClick={() =>
                  onDelete(
                    img.id,
                    setValue as React.Dispatch<
                      SetStateAction<IImgsCreatePost[] | null>
                    >,
                    value
                  )
                }
              >
                <IoRemoveCircle size={15} />
              </span>
              <Image
                className={styles.previewImg}
                src={img.preview}
                alt='Imagens selecionadas manualmente'
                width={300}
                height={300}
                priority
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
