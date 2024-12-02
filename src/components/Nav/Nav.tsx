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

export const Nav = () => {
  const [activeTab, setActiveTab] = React.useState('/');

  function handleActiveTab(tab: string) {
    setActiveTab(tab);
  }

  return (
    <nav className={styles.container}>
      <div className={styles.boxLogo}>
        <h2>Nexus</h2>
      </div>

      <ul className={styles.ulBoxLinks}>
        <li
          className={`${styles.links} ${
            activeTab === '/' && styles.linkActive
          }`}
        >
          <Link href={'/'} onClick={() => handleActiveTab('/')}>
            <IoHome size={20} />
          </Link>
        </li>
        <li
          className={`${styles.links} ${
            activeTab === 'events' && styles.linkActive
          }`}
        >
          <Link href={'/events'} onClick={() => handleActiveTab('events')}>
            <IoCalendar size={20} />
          </Link>
        </li>
        <li
          className={`${styles.links} ${
            activeTab === 'peoples' && styles.linkActive
          }`}
        >
          <Link href={'/peoples'} onClick={() => handleActiveTab('peoples')}>
            <IoPeople size={20} />
          </Link>
        </li>
        <InputText />
      </ul>

      <ul className={styles.ulBoxInfo}>
        <li
          className={`${styles.links} ${
            activeTab === 'chat' && styles.linkActive
          }`}
          onClick={() => handleActiveTab('chat')}
        >
          <IoChatbubbleEllipses size={20} />
        </li>
        <li
          className={`${styles.links} ${
            activeTab === 'notifications' && styles.linkActive
          }`}
          onClick={() => handleActiveTab('notifications')}
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
