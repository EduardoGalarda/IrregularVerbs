import db_Verbs from '../../irregularverbs_test.json'
import styles from "./Verbs.module.css"

const IrregularVerbs = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.table}>
                {db_Verbs.map((verb) => (
                    <li key={verb.id} className={styles.row}>
                        <div className={styles.cell}>{verb.infinitive}</div>
                        <div className={styles.cell}>{verb.simple_past}</div>
                        <div className={styles.cell}>{verb.past_participle}</div>
                        <div className={styles.cell}>{verb.translate}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IrregularVerbs;

