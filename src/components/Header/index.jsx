import styles from './header.module.css'



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
          <div className={styles.cell}>Detalhes</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
