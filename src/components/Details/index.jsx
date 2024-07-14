import styles from './details.module.css'
import { GrEdit, GrPlay } from "react-icons/gr";

const Details = () => {

    const verb = {
        "id": 1,
        "infinitive": "be",
        "simple_past": "was / were",
        "past_participle": "been",
        "translate": "ser / estar",
        "phonetic_infinitive": "/biː/",
        "spoken_infinitive": "bee",
        "phonetic_simple_past": "/wəz/ /wɜːr/",
        "spoken_simple_past": "wuhz / wur",
        "phonetic_past_participle": "/bɪn/",
        "spoken_past_participle": "bin",
        "exemple_infinitive": "I want to be a doctor.",
        "exemple_simple_past": "She was happy.",
        "exemple_past_participle": "They have been friends."
    };
    

    return(
        <div className={styles.details}>
        <p className={styles.detailsTitle}><strong>Pronúncia: falada e fonética</strong> </p>
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
        <p className={styles.detailsTitle}><strong>Exemplos</strong> </p>
       
            <div className={styles.detailsExamples}>
                <p className={styles.detailsCell}><strong>Infinitive:</strong> {verb.exemple_infinitive} </p>
                <div>
                    <button className={styles.detailsButton}><GrPlay /></button>
                    <button className={styles.detailsButton}><GrEdit /></button>
                </div>
            </div> 
            <div className={styles.detailsExamples}>
                <p className={styles.detailsCell}><strong>Simple Past:</strong> {verb.exemple_simple_past} </p>
                <div>
                    <button className={styles.detailsButton}><GrPlay /></button>
                    <button className={styles.detailsButton}><GrEdit /></button>
                </div>
            </div> 
            <div className={styles.detailsExamples}>
                <p className={styles.detailsCell}><strong>Past participle:</strong> {verb.exemple_past_participle} </p>
                <div>
                    <button className={styles.detailsButton}><GrPlay /></button>
                    <button className={styles.detailsButton}><GrEdit /></button>
                </div> 
            </div>            
          
        <br/>
      </div>
    )
}

export default Details