import styles from './Header.module.css'
import { FaCircleArrowDown } from "react-icons/fa6";

const Header = () => {
  return (

    <div className={styles.header}>
      <h1>Irregular Verbs</h1>
      <div className={styles.container}>
        <ul className={styles.table}>                
          <li className={styles.row}>
            <div className={styles.cell}>Infinitive</div>
            <div className={styles.cell}>Simple Past</div>
            <div className={styles.cell}>Past Participle</div>
            <div className={styles.cell}>Translate</div>
          </li>                
        </ul>
        <button className={styles.button}> <FaCircleArrowDown /></button>
      </div>        
    </div>
  );
};

export default Header;
