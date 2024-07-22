import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr className={styles.list}>
                    <th className={styles.titleItem}>Type</th>
                    <th className={styles.titleItem}>Amount</th>
                    <th className={styles.titleItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.body}>
                {items.map(({ id, type, amount, currency }) =>
                (<tr className={styles.list}
                    key={id}>
                    <td className={styles.item}>{type}</td>
                    <td className={styles.item}>{amount}</td>
                    <td className={styles.item}>{currency}</td>
                </tr>))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;