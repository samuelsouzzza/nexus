import styles from './page.module.css';
import { LeftInfo } from '@/components/LeftInfo/LeftInfo';
import { Feed } from '@/components/Feed/Feed';
import { RightInfo } from '@/components/RightInfo/RightInfo';

console.log(
  'https://www.figma.com/design/0ffgseyBacyBP8O6CQdEPK/Forum-UI-Design-(Community)?node-id=0-1&node-type=canvas&t=PhMdW3WlAfgi3RV0-0'
);

export default function IndexPage() {
  return (
    <div className={styles.wrapper}>
      <LeftInfo />
      <Feed />
      <RightInfo />
    </div>
  );
}
