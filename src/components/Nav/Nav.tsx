'use client';
import styles from './Nav.module.css';
import Link from 'next/link';
import { InputText } from '../InputText/InputText';
import {
  IoHome,
  IoCalendar,
  IoPeople,
  IoChatbubbleEllipses,
  IoNotifications,
} from 'react-icons/io5';
import { Profile } from '../Profile/Profile';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const currentPath = usePathname();
  const [searchValue, setSearchedValue] = React.useState('');

  return (
    <nav className={styles.container}>
      <div className={styles.boxLogo}>
        <Image
          src={'/logos/logowhite.svg'}
          height={25}
          width={150}
          alt='Logo'
        />
      </div>

      <ul className={styles.ulBoxLinks}>
        <li
          className={`${styles.links} ${
            currentPath === '/' && styles.linkActive
          }`}
        >
          <Link href={'/'}>
            <IoHome size={20} />
          </Link>
        </li>
        <li
          className={`${styles.links} ${
            currentPath === '/events' && styles.linkActive
          }`}
        >
          <Link href={'/events'}>
            <IoCalendar size={20} />
          </Link>
        </li>
        <li
          className={`${styles.links} ${
            currentPath === '/peoples' && styles.linkActive
          }`}
        >
          <Link href={'/peoples'}>
            <IoPeople size={20} />
          </Link>
        </li>
        <InputText
          type='text'
          placeholder='Busque por pessoas, posts ou eventos'
          value={searchValue}
          setValue={setSearchedValue}
          modal='searchAll'
          icon='search'
        />
      </ul>

      <ul className={styles.ulBoxInfo}>
        <li
          className={`${styles.links} ${
            currentPath === '/chats' && styles.linkActive
          }`}
        >
          <IoChatbubbleEllipses size={20} />
        </li>
        <li
          className={`${styles.links} ${
            currentPath === '/notifications' && styles.linkActive
          }`}
        >
          <IoNotifications size={20} />
        </li>
        <li className={styles.links}>
          <Profile />
        </li>
      </ul>
    </nav>
  );
};
