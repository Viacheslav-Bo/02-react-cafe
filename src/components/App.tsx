// src/components/App.tsx
import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";
import Notification from "./Notification/Notification";
import { Votes, VoteType } from "../types/votes";

export default function App() {
  // Створіть в App стан votes, який зберігатиме кількість голосів.
  // Це буде об'єкт з властивостями:
  // {
  // 	good: 0,
  // 	neutral: 0,
  // 	bad: 0
  // }
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  // Додайте в компонент App обчислення загальної кількості зібраних
  // голосів з усіх категорій та відсоток позитивних відгуків.

  // Загальна кількість відгуків це просто сума станів:
  // totalVotes = good + neutral + bad
  const totalVotes = votes.good + votes.neutral + votes.bad;
  // Для підрахунку відсотка позитивних відгуків можна використовувати
  // наступний вираз:

  // positiveRate = totalVotes
  //     ? Math.round((votes.good / totalVotes) * 100)
  //     : 0

  // Зверни увагу, що для значень totalVotes і positiveRate не потрібно
  // створювати окремі властивості в стані App, оскільки це дані, що легко обчислюються
  // на основі чинного стану.
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  // нижче прописую функції для передачі їх у VoteOptions
  // Функція для обробки голосування
  const handleVote = (option: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };
  // Функція для скидання голосів
  const handleReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  // рендеринг
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={totalVotes > 0}
      />
      {/* Реалізуйте умовний рендеринг компонентів залежно від значення totalVotes.
      Компонент VoteStats має рендеритись тільки після того, як буде отримано
      хоча б один голос. Тому, якщо значення totalVotes більше нуля, то має
      рендеритись компонент VoteStats. Якщо ж відгуків немає (тобто totalVotes
      дорівнює 0), то має рендеритись компонент Notification. */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
