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
  IoTrophy,
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
        <Link href={'/'}>
          <Image
            src={'/logos/logowhite.svg'}
            height={25}
            width={150}
            alt='Logo'
          />
        </Link>
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
        <li
          className={`${styles.links} ${
            currentPath === '/ranking' && styles.linkActive
          }`}
        >
          <Link href={'/ranking'}>
            <IoTrophy size={20} />
          </Link>
        </li>
        <InputText
          type='text'
          placeholder='Busque por perguntas, pessoas, hashtags ou mais'
          value={searchValue}
          setValue={setSearchedValue}
          modal='searchAll'
          icon='search'
        />
        <li
          className={`${styles.links} ${
            currentPath === '/chats' && styles.linkActive
          }`}
        >
          <Link href={'/chats'}>
            <IoChatbubbleEllipses size={20} />
          </Link>
        </li>
        <li
          className={`${styles.links} ${
            currentPath === '/notifications' && styles.linkActive
          }`}
        >
          <Link href={'/notifications'}>
            <IoNotifications size={20} />
          </Link>
        </li>
        <li className={styles.links}>
          <Profile />
        </li>
      </ul>

      <ul className={styles.ulBoxInfo}></ul>
    </nav>
  );
};
