// src/components/App.tsx

import CSS from "./App.module.css";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";
import Notification from "./Notification/Notification";

export default function App() {
  return (
    <div className={CSS.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
  );
}

// Створіть в App стан votes, який зберігатиме кількість голосів. Це буде об'єкт з властивостями:

// {
// 	good: 0,
// 	neutral: 0,
// 	bad: 0
// }

// Додайте в компонент App обчислення загальної кількості зібраних голосів з усіх категорій та відсоток позитивних відгуків.

// Загальна кількість відгуків – це просто сума станів:

// totalVotes = good + neutral + bad

// Для підрахунку відсотка позитивних відгуків можна використовувати наступний вираз:

// positiveRate = totalVotes
//     ? Math.round((votes.good / totalVotes) * 100)
//     : 0

// Зверни увагу, що для значень totalVotes і positiveRate не потрібно створювати окремі властивості в стані App, оскільки це дані, що легко обчислюються на основі чинного стану.
