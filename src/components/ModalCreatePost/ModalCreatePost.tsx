import styles from './ModalCreatePost.module.css';

type ModalCreatePostProps = {
  str: string;
  active: boolean;
};

export const ModalCreatePost = ({ str, active }: ModalCreatePostProps) => {
  return (
    <>
      {active ? (
        <div className={styles.container}>Modal de criação de posts</div>
      ) : (
        <></>
      )}
      {/* <div className={styles.container}>Modal de criação de posts</div> */}
    </>
  );
};
