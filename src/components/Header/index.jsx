import styles from './header.module.css'
import { FaCircleArrowDown } from "react-icons/fa6";



const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Irregular Verbs</h1>
      <div className={styles.header}>
        <div className={styles.headerVerb}>
          <div className={styles.cell}>Infinitive</div>
          <div className={styles.cell}>Simple Past</div>
          <div className={styles.cell}>Past Participle</div>
          <div className={styles.cell}>Translate</div>
        </div>
        <div className={styles.headerDetail}>
          <div className={styles.cellIcon}><FaCircleArrowDown /></div>
          <div className={styles.cellText}> Detalhes </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
