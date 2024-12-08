import { IImgsCreatePost } from '@/@types/@types';
import { SetStateAction } from 'react';

export function deleteImgsInputFile(
  id: number,
  setValue: React.Dispatch<SetStateAction<IImgsCreatePost[] | null>>
) {
  setValue((prev) => {
    if (!prev) return null;

    // Encontrar o índice do item a ser removido
    const index = prev.findIndex((img) => img.id === id);
    if (index !== -1) {
      prev.splice(index, 1); // Remove o item diretamente
    }

    return [...prev]; // Retorna uma cópia do array original (mantém a mesma referência para itens não alterados)
  });
}
