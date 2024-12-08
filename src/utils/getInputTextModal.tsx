import { ModalSearchAll } from '@/components/ModalSearchAll/ModalSearchAll';

export default function getInputTextModal(modalType: string, value: string) {
  if (!modalType) return;

  switch (modalType) {
    case 'searchAll':
      return <ModalSearchAll active={!!value} str={value} />;
  }
}
