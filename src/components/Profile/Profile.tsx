'use client';
import styles from './Profile.module.css';
import Image from 'next/image';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { MenuProfileDetails } from '../MenuProfileDetails/MenuProfileDetails';
import React from 'react';

export const Profile = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const refMenu = React.useRef<HTMLDivElement>(null);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={refMenu} className={styles.container} onClick={handleClick}>
      <Image src={'/profile.svg'} height={32} width={32} alt='Foto de perfil' />
      <p>Samuel</p>
      {!showMenu ? <IoCaretDown /> : <IoCaretUp />}
      <MenuProfileDetails active={showMenu} />
    </div>
  );
};
