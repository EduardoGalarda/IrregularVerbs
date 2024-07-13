import styles from './Verbs.module.css'
import { GrEdit, GrPlay } from "react-icons/gr";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const Verb = ({ verb, showDetails, onToggle }) => {
  return (

    <>
      <div className={styles.container}>
        <ul className={styles.table}>                
          <li key={verb.id} className={styles.row}>
            <div className={styles.cell}>{verb.infinitive}</div>
            <div className={styles.cell}>{verb.simple_past}</div>
            <div className={styles.cell}>{verb.past_participle}</div>
            <div className={styles.cell}>{verb.translate}</div>
          </li>                
        </ul>
        <button className={styles.button} onClick={onToggle}> {showDetails ? <FaCircleArrowDown /> : <FaCircleArrowUp /> } </button>
      </div>
        
      {showDetails && (
        
      <div className={styles.details}>
        <div>
          <p className={styles.detailsTitle}><strong>Pronúncia: falada e fonética</strong> </p>
        </div>
        <div className={styles.container}>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.infinitive} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
            <button className={styles.detailsButton}><GrPlay /></button>
          </div>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.simple_past} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
            <button className={styles.detailsButton}><GrPlay /></button>
          </div>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.past_participle} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
            <button className={styles.detailsButton}><GrPlay /></button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.spoken_infinitive} </p>
            <button className={styles.detailsButton}><GrEdit /></button>
          </div>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.spoken_simple_past} </p>
            <button className={styles.detailsButton}><GrEdit /></button>
          </div>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.spoken_past_participle} </p>
            <button className={styles.detailsButton}><GrEdit /></button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.phonetic_infinitive} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
          </div>
          <div className={styles.detailsVerb}>
            <p className={styles.detailsCell}> {verb.phonetic_simple_past} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
          </div>
          <div className={styles.detailsVerb}>
             <p className={styles.detailsCell}> {verb.phonetic_past_participle} </p>
            {/* <button className={styles.detailsButton}><GrEdit /></button> */}
          </div>
        </div>          
        <div>
          <p className={styles.detailsTitle}><strong>Exemplos</strong> </p>
        </div>
        <div>
          <div className={styles.detailsExamples}>
           <p className={styles.detailsCell}><strong>Infinitive:</strong> {verb.exemple_infinitive} </p>
           <button className={styles.detailsButton}><GrEdit /></button>
           <button className={styles.detailsButton}><GrPlay /></button>
          </div> 
            <div className={styles.detailsExamples}>
              <p className={styles.detailsCell}><strong>Simple Past:</strong> {verb.exemple_simple_past} </p>
              <button className={styles.detailsButton}><GrEdit /></button>
              <button className={styles.detailsButton}><GrPlay /></button>
            </div> 
            <div className={styles.detailsExamples}>
              <p className={styles.detailsCell}><strong>Past participle:</strong> {verb.exemple_past_participle} </p>
              <button className={styles.detailsButton}><GrEdit /></button>
              <button className={styles.detailsButton}><GrPlay /></button>            
            </div>            
          </div>
        <br/>
      </div>
      )}
    </>
  );
};

export default Verb;
