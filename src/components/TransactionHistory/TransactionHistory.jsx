import Transaction from '../Transaction/Transaction';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
