import { SetStateAction } from 'react';
import { IImgsCreatePost } from '@/@types/@types';

export function loadImgs(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<SetStateAction<IImgsCreatePost[] | null>>
): boolean {
  e.preventDefault();
  const { files } = e.target;

  if (files !== null && files?.length > 0) {
    if (files.length > 5) {
      alert('Não é possível subir mais de 5 imagens por publicação.');
      return false;
    }

    if (files instanceof FileList)
      setValue(
        Array.from(files).map((file, i) => ({
          id: i,
          preview: URL.createObjectURL(file),
          raw: file,
        }))
      );
    return true;
  }

  return false;
}
