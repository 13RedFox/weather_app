import { Container } from '../Container';
import styles from './Info.module.scss';

export const Info = () => {
  return (
    <Container className={styles.info}>
      <h1 className={styles.infoTitle}>Kremenchuk</h1>
      <span className={styles.infoTemp}>-3°</span>
      <span className={styles.infoWeather}>Mostly Clear</span>
      <div className={styles.infoWrapper}>
        <span className={styles.infoWrapperTemp}>L:14°</span>
        <span className={styles.infoWrapperTemp}>H:20°</span>
      </div>
    </Container>
  );
};
