import { IoSearch, IoRocket } from 'react-icons/io5';

export default function getInputTextIcon(icon: string) {
  switch (icon) {
    case 'search':
      return <IoSearch size={20} style={{ fill: 'var(--font-bg)' }} />;
    case 'rocket':
      return <IoRocket size={20} style={{ fill: 'var(--font-bg)' }} />;
  }
}
