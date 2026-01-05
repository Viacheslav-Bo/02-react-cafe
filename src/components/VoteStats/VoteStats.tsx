import styles from "./VoteStats.module.css";

export default function VoteStats() {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>0%</strong>
      </p>
    </div>
  );
}

// Для того, щоб компонент VoteStats міг динамічно відображати статистику голосування, зібрану з кліків на кнопки голосування, він має приймати три пропси:

// votes – об'єкт, що містить кількість голосів для кожної категорії: good, neutral, bad;
// totalVotes – загальна кількість голосів (поки можна передати 0);
// positiveRate – відсоток позитивних голосів (також поки можна передати 0).

// У файлі компонента оголосіть інтерфейс VoteStatsProps, який описує типи для пропсів компонента.

// Після цього кроку інтерфейс застосунку має виглядати та працювати наступним чином – при кліках на кнопки в VoteOptions зміни відображаються у VoteStats:
