import { ModalSearchAll } from '@/components/ModalSearchAll/ModalSearchAll';
import { ModalCreatePost } from '@/components/ModalCreatePost/ModalCreatePost';

export default function getInputTextModal(modalType: string, value: string) {
  if (!modalType || !value) return;

  switch (modalType) {
    case 'searchAll':
      return <ModalSearchAll active={value.length > 0} str={value} />;
    case 'createPost':
      return <ModalCreatePost active={value.length > 0} str={value} />;
  }
}
