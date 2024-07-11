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
            <button onClick={onToggle}> {showDetails ? "Fechar" : "Mostrar Detalhes"} </button>
        </div>
        
      {/* <h3>{verb.infinitive}</h3> */}
      {showDetails && (
        
        <div>
          {/* <p><strong>Tradução:</strong> {verb.translate}</p> */}
          <p><strong>Pronuncia (infinitive):</strong> {verb.pronunciation_infinitive}</p>
          <p><strong>Pronuncia (simple past):</strong> {verb.pronunciation_simple_past}</p>
          <p><strong>Pronuncia (past participle):</strong> {verb.pronunciation_past_participle}</p>
          {/* <p><strong>Simple Past:</strong> {verb.simple_past}</p> */}
          {/* <p><strong>Past Participle:</strong> {verb.past_participle}</p> */}
          <p><strong>Exemplo (infinitive):</strong> {verb.exemple_infinitive}</p>
          <p><strong>Exemplo (simple past):</strong> {verb.exemple_simple_past}</p>
          <p><strong>Exemplo (past participle):</strong> {verb.exemple_past_participle}</p>
        </div>
      )}
    </div>
  );
};

export default Verb;
