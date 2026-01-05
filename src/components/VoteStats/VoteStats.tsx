import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";
// У файлі компонента оголосіть інтерфейс VoteStatsProps, який описує типи для пропсів компонента.
interface VoteStatsProps {
  votes: {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
  };
}
// Для того, щоб компонент VoteStats міг динамічно відображати статистику голосування, зібрану з кліків
// на кнопки голосування, він має приймати три пропси:

// votes – об'єкт, що містить кількість голосів для кожної категорії: good, neutral, bad;
// totalVotes – загальна кількість голосів (поки можна передати 0);
// positiveRate – відсоток позитивних голосів (також поки можна передати 0).
const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => (
  <div className={styles.container}>
    <p className={styles.stat}>
      Good: <strong>{votes.good}</strong>
    </p>
    <p className={styles.stat}>
      Neutral: <strong>{votes.neutral}</strong>
    </p>
    <p className={styles.stat}>
      Bad: <strong>{votes.bad}</strong>
    </p>
    <p className={styles.stat}>
      Total: <strong>{totalVotes}</strong>
    </p>
    <p className={styles.stat}>
      Positive: <strong>{positiveRate}%</strong>
    </p>
  </div>
);

export default VoteStats;
