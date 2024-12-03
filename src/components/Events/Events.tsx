import styles from './Events.module.css';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

export const Events = () => {
  const events = [
    {
      id: 1532,
      date: { day: 7, month: 'Fev' },
      title: 'Rebaixamento do Fluminense',
      owner: { name: 'Samuel', profilePic: '/profile.svg' },
      local: 'Rio de Janeiro, RJ',
      subject: ['futebol', 'meme', 'brasileirao'],
    },
    {
      id: 1952,
      date: { day: 15, month: 'Dez' },
      title: 'Aniversário de Camila',
      owner: { name: 'Camila', profilePic: '/profile.svg' },
      local: 'Joinville, SC',
      subject: ['aniversario', 'festa', '20'],
    },
    {
      id: 147,
      date: { day: 31, month: 'Dez' },
      title: 'Ano Novo',
      owner: { name: 'Samuel', profilePic: '/profile.svg' },
      local: 'Joinville, SC',
      subject: ['festa', 'virada', 'branco'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <Link href={'/events'}>
          Events <IoArrowForward size={20} />
        </Link>
      </div>

      {events.map((e) => {
        return (
          <div key={e.id} className={styles.boxDate}>
            <div className={styles.itemDate}>
              <p>{e.date.month}</p>
              <span>{e.date.day.toString().padStart(2, '0')}</span>
            </div>
            <div className={styles.boxInfo}>
              <p>{e.title}</p>
              <div className={styles.boxOwnerEvent}>
                <Image
                  src={`${e.owner.profilePic}`}
                  alt='Foto de perfil'
                  width={20}
                  height={20}
                />
                <p>
                  {e.owner.name} • {e.local}
                </p>
              </div>
              <div>
                <p className={styles.qtdInterest}>25 interessados</p>
                <div>
                  <Image
                    src={'/profile.svg'}
                    alt='Fotos de perfil'
                    width={15}
                    height={15}
                  />
                  <Image
                    src={'/profile.svg'}
                    alt='Fotos de perfil'
                    width={15}
                    height={15}
                  />
                  <Image
                    src={'/profile.svg'}
                    alt='Fotos de perfil'
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              {/* <div className={styles.boxSubject}>
                {e.subject.map((s) => {
                  return (
                    <div key={s}>
                      <span>{s}</span>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
