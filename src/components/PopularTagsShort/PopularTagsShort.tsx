import styles from './PopularTagsShort.module.css';
import generateColorBackgroundTags from '@/utils/generateColorBackgroundTags';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

export const PopularTagsShort = () => {
  const tags = [
    { name: '#escala61', posts: 3654 },
    { name: '#guerraUcrania', posts: 3512 },
    { name: '#lula', posts: 355 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <Link href={'#'}>
          Popular Tags <IoArrowForward size={20} />
        </Link>
      </div>
      {tags.map((t) => {
        const generatedColor = generateColorBackgroundTags('20');

        return (
          <div key={t.name}>
            <div className={styles.itemTagBox}>
              <div
                className={styles.iconBox}
                style={{
                  backgroundColor: generatedColor.bg,
                  border: `1px solid ${generatedColor.color}`,
                }}
              >
                <p>#</p>
              </div>
              <div className={styles.itemTagContent}>
                <p>{t.name}</p>
                <p className={styles.qtdPosts}>{t.posts} posts</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
