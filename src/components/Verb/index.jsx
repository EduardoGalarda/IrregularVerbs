import styles from './Verbs.module.css'

const Verb = ({ verb, showDetails, onToggle }) => {
  return (
    <div>

      <div className={styles.container}>
            <ul className={styles.table}>
                
                    <li key={verb.id} className={styles.row}>
                        <div className={styles.cell}>{verb.infinitive}</div>
                        <div className={styles.cell}>{verb.simple_past}</div>
                        <div className={styles.cell}>{verb.past_participle}</div>
                        <div className={styles.cell}>{verb.translate}</div>
                    </li>
                
            </ul>
            <button className={styles.button} onClick={onToggle}> {showDetails ? "Fechar" : "Mostrar Detalhes"} </button>
        </div>
        
      {/* <h3>{verb.infinitive}</h3> */}
      {showDetails && (
        
        <div className={styles.details}>
          <br/>
          <p className={styles.cell}><strong>Pronúncia: falada e fonética</strong></p>
          <div className={styles.container}>
            <p className={styles.cell}> {verb.infinitive}</p>
            <p className={styles.cell}> {verb.simple_past}</p>
            <p className={styles.cell}> {verb.past_participle}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.cell}> {verb.spoken_infinitive}</p>
            <p className={styles.cell}> {verb.spoken_simple_past}</p>
            <p className={styles.cell}> {verb.spoken_past_participle}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.cell}> {verb.phonetic_infinitive}</p>
            <p className={styles.cell}> {verb.phonetic_simple_past}</p>
            <p className={styles.cell}> {verb.phonetic_past_participle}</p>
          </div>
          <br/>
          <p className={styles.cell}><strong>Exemplo:</strong></p>
          <div>
            <p className={styles.cell}><strong>Infinitive:</strong> {verb.exemple_infinitive}</p>
            <p className={styles.cell}><strong>Simple Past:</strong> {verb.exemple_simple_past}</p>
            <p className={styles.cell}><strong>Past participle:</strong> {verb.exemple_past_participle}</p>
          </div>
          <br/>
        </div>
      )}
    </div>
  );
};

export default Verb;
