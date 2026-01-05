import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

// У файлі компонента оголосіть інтерфейс VoteOptionsProps, який описує типи для пропсів компонента.
interface VoteOptionsProps {
  onVote: (option: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

// Компонент має приймати три пропси:
// onVote  функція, яка викликається при кліку на одну з кнопок голосування;
// onReset  функція, що викликається при кліку на кнопку Reset і відповідає за скидання голосів;
// canReset булеве значення, яке визначає, чи потрібно показувати кнопку Reset. (На цьому етапі можеш передавати просто зі значенням true.)
const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => (
  <div className={css.container}>
    <button className={css.button} onClick={() => onVote("good")}>
      Good
    </button>
    <button className={css.button} onClick={() => onVote("neutral")}>
      Neutral
    </button>
    <button className={css.button} onClick={() => onVote("bad")}>
      Bad
    </button>
    {/* кнопка Reset відображалась тільки тоді, коли є хоча б один голос. Для цього
    використовуйте змінну totalVotes в компоненті App і передавайте пропс
    canReset в компонент VoteOptions зі значенням, яке буде вказувати, чи
    потрібно відображати кнопку Reset. */}
    {canReset && (
      <button
        className={`${css.button} ${css.reset}`}
        onClick={onReset}
      >
        Reset
      </button>
    )}
  </div>
);

export default VoteOptions;
